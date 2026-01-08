import SMBPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jo: Affordable AI Office Staff for Small Business | $25/month per Department",
  description:
    "Digital staffing for small businesses. Get AI-powered support for Finance, HR, Accounting, IT, Marketing, Sales, and Operations. No code required. Starting at $25/month.",
  keywords: [
    "small business AI",
    "affordable AI employees",
    "digital staffing",
    "AI for small business",
    "small business automation",
    "AI bookkeeping",
    "AI marketing assistant",
    "AI sales assistant",
    "small business software",
    "business automation tools",
  ],
  openGraph: {
    title: "Jo: Affordable AI Office Staff for Small Business",
    description:
      "Digital staffing for Finance, HR, Accounting, IT, Marketing, Sales, and Operations. Starting at $25/month.",
    type: "website",
    url: "https://www.jofrom.io/solutions/smb",
  },
  alternates: {
    canonical: "https://www.jofrom.io/solutions/smb",
  },
}

export default function SMBPage() {
  return <SMBPageClient />
}
