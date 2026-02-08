import type { Metadata } from "next"
import { HirePageClient } from "@/components/hire/hire-page-client"

export const metadata: Metadata = {
  title: "Hire Talent | Jo from - Healthcare, Manufacturing & Energy Staffing",
  description:
    "We place skilled workers in healthcare, manufacturing, and energy -- highly regulated, thin-margin industries where the jobs are essential. Compliance-verified and augmented by our platform.",
  keywords: [
    "contract workers",
    "hire engineers",
    "healthcare staffing",
    "production workers",
    "energy field jobs",
    "contract staffing",
    "field technicians",
    "travel nurses",
    "manufacturing workers",
    "workforce deployment",
  ],
  openGraph: {
    title: "Hire Talent | Jo from - Healthcare, Manufacturing & Energy Staffing",
    description:
      "We place skilled workers in healthcare, manufacturing, and energy -- highly regulated industries where the jobs are essential.",
    type: "website",
    url: "https://www.jofrom.io/hire",
    siteName: "Jo from",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Talent | Jo from - Healthcare, Manufacturing & Energy Staffing",
    description:
      "We place skilled workers in healthcare, manufacturing, and energy -- highly regulated industries where the jobs are essential.",
  },
  alternates: {
    canonical: "https://www.jofrom.io/hire",
  },
}

export default function HirePage() {
  return <HirePageClient />
}
