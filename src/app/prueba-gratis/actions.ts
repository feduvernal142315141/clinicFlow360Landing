"use server"

import { headers } from "next/headers"
import { siteConfig } from "@/lib/config"
import { trialSignupCopy } from "@/data/trial-signup"

export interface TrialSignupValues {
  clinicName: string
  fullName: string
  email: string
  acceptedTerms: boolean
}

export type TrialSignupState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; values: TrialSignupValues }

interface ApiErrorBody {
  message?: string
  errorCode?: string
  retryAfterSeconds?: number
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const UNSAFE_TEXT = /[<>\p{Cc}]/u
const MAX_NAME = 120
const MAX_EMAIL = 255
// The backend may be waking up from idle, so allow a generous wait.
const REQUEST_TIMEOUT_MS = 45_000

const { errors } = trialSignupCopy

function text(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim() : ""
}

/** Mirrors the backend rules so most mistakes are caught without a round trip. */
function validate(values: TrialSignupValues): string | null {
  for (const [value, message] of [
    [values.clinicName, errors.clinicName],
    [values.fullName, errors.fullName],
  ] as const) {
    if (value.length < 2 || value.length > MAX_NAME) return message
    if (UNSAFE_TEXT.test(value)) return errors.unsafeText
  }
  if (values.email.length > MAX_EMAIL || !EMAIL.test(values.email)) return errors.email
  if (!values.acceptedTerms) return errors.terms
  return null
}

function errorMessage(status: number, body: ApiErrorBody): string {
  if (status === 422 && body.message) return body.message
  if (body.errorCode === "TRIAL_SIGNUP_CAPTCHA_FAILED") return errors.captcha
  if (status === 429) {
    const minutes = body.retryAfterSeconds ? Math.ceil(body.retryAfterSeconds / 60) : null
    return minutes
      ? `Demasiadas solicitudes. Inténtalo de nuevo en ${minutes} ${minutes === 1 ? "minuto" : "minutos"}.`
      : errors.rateLimited
  }
  return errors.unavailable
}

export async function submitTrialSignup(
  _previous: TrialSignupState,
  formData: FormData,
): Promise<TrialSignupState> {
  const values: TrialSignupValues = {
    clinicName: text(formData, "clinicName"),
    fullName: text(formData, "fullName"),
    email: text(formData, "email"),
    acceptedTerms: formData.get("acceptedTerms") === "on",
  }
  const fail = (message: string): TrialSignupState => ({ status: "error", message, values })

  const invalid = validate(values)
  if (invalid) return fail(invalid)
  if (!siteConfig.apiUrl) return fail(errors.unavailable)

  const forwardedFor = (await headers()).get("x-forwarded-for")

  try {
    const response = await fetch(`${siteConfig.apiUrl.replace(/\/+$/, "")}/public/trial-signups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(forwardedFor ? { "X-Forwarded-For": forwardedFor } : {}),
      },
      body: JSON.stringify({
        ...values,
        termsVersion: siteConfig.termsVersion,
        captchaToken: text(formData, "captchaToken") || undefined,
        // Honeypot: forwarded as-is so the backend applies its own handling.
        website: text(formData, "website"),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })

    const body = (await response.json().catch(() => ({}))) as ApiErrorBody
    if (response.status === 202) {
      return { status: "success", message: body.message ?? trialSignupCopy.successFallback }
    }
    return fail(errorMessage(response.status, body))
  } catch {
    return fail(errors.unavailable)
  }
}
