"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useRouter } from "next/navigation"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function StripeCheckout({ productId }: { productId: string }) {
  const router = useRouter()
  const startCheckoutSessionForProduct = useCallback(() => startCheckoutSession(productId), [productId])

  const handleComplete = useCallback(() => {
    router.push("/success")
  }, [router])

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: startCheckoutSessionForProduct,
          onComplete: handleComplete,
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
