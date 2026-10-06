"use client"

import { useActionState, useEffect } from "react"
import { submitTrialSignup, type TrialSignupState } from "@/app/prueba-gratis/actions"
import { trialSignupCopy } from "@/data/trial-signup"
import { siteConfig } from "@/lib/config"
import { track } from "@/lib/analytics/track"
import { TurnstileWidget } from "./turnstile-widget"

const initialState: TrialSignupState = { status: "idle" }

const inputClassName =
  "mt-1.5 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[15px] text-white placeholder:text-slate-600 outline-none transition-colors focus:border-brand-400 focus:bg-white/[0.06]"

const textFields = [
  { name: "clinicName", type: "text", autoComplete: "organization" },
  { name: "fullName", type: "text", autoComplete: "name" },
  { name: "email", type: "email", autoComplete: "email" },
] as const

export function TrialSignupForm() {
  const [state, formAction, pending] = useActionState(submitTrialSignup, initialState)
  const { fields, terms } = trialSignupCopy

  useEffect(() => {
    if (state.status === "success") track("signup_complete")
  }, [state.status])

  if (state.status === "success") {
    return (
      <div role="status" className="py-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/70 text-emerald-400">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </div>
        <h2 className="mt-5 text-[22px] font-black tracking-tight text-white">{trialSignupCopy.successTitle}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{state.message}</p>
        <p className="mt-3 text-[13px] leading-relaxed text-slate-500">{trialSignupCopy.successHint}</p>
      </div>
    )
  }

  const values = state.status === "error" ? state.values : null

  return (
    <form action={formAction} onFocus={handleFirstFocus} className="space-y-5">
      {textFields.map((field) => (
        <label key={field.name} className="block text-[13px] font-semibold text-slate-300">
          {fields[field.name].label}
          <input
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder={fields[field.name].placeholder}
            defaultValue={values?.[field.name] ?? ""}
            required
            minLength={field.type === "email" ? undefined : 2}
            maxLength={field.type === "email" ? 255 : 120}
            className={inputClassName}
          />
        </label>
      ))}

      {/* Honeypot — hidden from people and assistive tech; a real person leaves it empty */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Sitio web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-slate-400">
        <input
          name="acceptedTerms"
          type="checkbox"
          required
          defaultChecked={values?.acceptedTerms ?? false}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500"
        />
        <span>
          {terms.prefix}{" "}
          <a href="/terms" target="_blank" className="font-semibold text-brand-300 underline-offset-2 hover:underline">
            {terms.termsLabel}
          </a>{" "}
          {terms.connector}{" "}
          <a href="/privacy" target="_blank" className="font-semibold text-brand-300 underline-offset-2 hover:underline">
            {terms.privacyLabel}
          </a>
          .
        </span>
      </label>

      {siteConfig.turnstileSiteKey && (
        <TurnstileWidget siteKey={siteConfig.turnstileSiteKey} resetSignal={state} />
      )}

      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/25 bg-red-950/40 px-4 py-3 text-[13px] leading-relaxed text-red-300">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary flex h-[52px] w-full items-center justify-center rounded-full text-[15px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? trialSignupCopy.submitting : trialSignupCopy.submit}
      </button>
    </form>
  )
}

let signupStartTracked = false

function handleFirstFocus() {
  if (signupStartTracked) return
  signupStartTracked = true
  track("signup_start")
}
