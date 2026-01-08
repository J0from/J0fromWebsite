export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jo",
    alternateName: "Jo from",
    url: "https://www.jofrom.io",
    logo: "https://www.jofrom.io/favicon.png",
    description:
      "AI-powered digital employees for regulated industries. We help businesses strike the right balance between Human + Machine.",
    sameAs: [
      // Add your social media profiles here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@jofrom.io",
      url: "https://calendly.com/myj0/30min",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jo: Human + Machine",
    url: "https://www.jofrom.io",
    description:
      "We help businesses strike the right balance between Human + Machine. AI workforce automation for regulated industries.",
    publisher: {
      "@type": "Organization",
      name: "Jo",
      logo: {
        "@type": "ImageObject",
        url: "https://www.jofrom.io/favicon.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.jofrom.io/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jo",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "25",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "25",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    },
    operatingSystem: "Web",
    description:
      "AI workforce automation for highly regulated industries including healthcare, manufacturing, energy, and food processing.",
    featureList: [
      "HIPAA Compliance",
      "FDA Ready",
      "NERC CIP Certified",
      "Labor Bottleneck Solutions",
      "Automated Compliance",
      "Digital Employees",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Workforce Automation",
    provider: {
      "@type": "Organization",
      name: "Jo",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Workforce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Healthcare Compliance Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manufacturing Workforce Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Energy Sector Compliance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Food Processing Automation",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
