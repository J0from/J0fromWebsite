import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: "Jo: AI Workforce Automation for Regulated Industries | Labor Shortage Solutions",
  description:
    "Fix labor bottlenecks in highly regulated industries with AI-powered digital employees. Stay compliant, cut costs, and automate repetitive tasks in healthcare, manufacturing, energy, and food processing.",
  keywords: [
    "AI workforce automation",
    "labor shortage solutions",
    "compliance automation",
    "AI for regulated industries",
    "digital employees",
    "healthcare automation",
    "manufacturing automation",
    "AI compliance tools",
    "workforce management",
    "labor cost reduction",
  ],
  openGraph: {
    title: "Jo: AI Workforce Automation for Regulated Industries",
    description:
      "Fix labor bottlenecks with AI-powered digital employees. Stay compliant, cut costs, and get the work done.",
    type: "website",
    url: "https://www.jofrom.io",
    siteName: "Jo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo - Human + Machine Balance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jo: AI Workforce Automation for Regulated Industries",
    description:
      "Fix labor bottlenecks with AI-powered digital employees. Stay compliant, cut costs, and get the work done.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.jofrom.io",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
