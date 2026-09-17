export interface CreateCheckoutInput {
  planId: string
  clinicName?: string
  email?: string
  successUrl: string
  cancelUrl: string
}

export interface CheckoutSession {
  id: string
  url: string
}

export interface Subscription {
  id: string
  status: "active" | "canceled" | "past_due" | "trialing"
  planId: string
  currentPeriodEnd: string
}

/**
 * Billing provider abstraction.
 * Implement with Tilopay, BAC Xpress Pago, or other provider when ready.
 */
export interface BillingProvider {
  createCheckoutSession(
    input: CreateCheckoutInput
  ): Promise<CheckoutSession>

  getSubscription(id: string): Promise<Subscription>

  cancelSubscription(id: string): Promise<void>

  reactivateSubscription(id: string): Promise<void>
}
