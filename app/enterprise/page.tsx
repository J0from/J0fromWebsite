import type { Metadata } from "next"
import EnterpriseClientPage from "./client"

export const metadata: Metadata = {
  title: "Enterprise AI Workforce Solutions | HIPAA, FDA, NERC Compliant Automation | Jo",
  description:
    "Enterprise-grade AI workforce automation for healthcare, energy, manufacturing, and food processing. HIPAA compliant, FDA ready, NERC CIP certified. Reduce labor costs while maintaining compliance.",
  keywords: [
    "enterprise AI automation",
    "HIPAA compliant AI",
    "FDA compliant automation",
    "NERC CIP compliance",
    "healthcare workforce automation",
    "energy sector automation",
    "manufacturing AI solutions",
    "food processing automation",
    "enterprise compliance tools",
    "regulated industry AI",
  ],
  openGraph: {
    title: "Enterprise AI Workforce Solutions for Regulated Industries",
    description:
      "HIPAA, FDA, and NERC compliant AI automation for enterprise organizations. 99.9% uptime SLA and 24/7 support.",
    type: "website",
    url: "https://www.jofrom.io/enterprise",
  },
  alternates: {
    canonical: "https://www.jofrom.io/enterprise",
  },
}

export default function EnterprisePage() {
  return <EnterpriseClientPage />
}
