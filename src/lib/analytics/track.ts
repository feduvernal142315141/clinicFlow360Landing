type EventName =
  | "hero_cta_click"
  | "demo_click"
  | "ai_whatsapp_demo_click"
  | "pricing_view"
  | "plan_select"
  | "signup_start"
  | "signup_complete"
  | "login_click"
  | "faq_open"

type EventProperties = Record<string, string | number | boolean>

/**
 * Analytics abstraction. Replace internals when PostHog or GA4 is configured.
 * Currently a no-op that logs in development.
 */
export function track(event: EventName, properties?: EventProperties): void {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, properties)
  }

  // TODO: Replace with PostHog or GA4 when configured
  // posthog.capture(event, properties)
}
