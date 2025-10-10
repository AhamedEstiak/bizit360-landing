import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://bizit360.org"),
  title: "BizIT360 | Property Preservation Operations Partner",
  description:
    "U.S.-based property preservation operations partner with Bangladesh operations hub. Expert work order processing, vendor coordination, QC, and reporting services.",
  keywords: [
    "property preservation",
    "operations partner",
    "work order processing",
    "vendor coordination",
    "quality control",
    "reporting services",
    "BPO",
    "Bangladesh operations",
  ],
  authors: [{ name: "BizIT360" }],
  creator: "BizIT360",
  publisher: "BizIT360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizit360.org",
    siteName: "BizIT360",
    title: "BizIT360 | Property Preservation Operations Partner",
    description:
      "U.S.-based property preservation operations partner with Bangladesh operations hub. Expert work order processing, vendor coordination, QC, and reporting services.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BizIT360 - Property Preservation Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizIT360 | Property Preservation Operations Partner",
    description: "U.S.-based property preservation operations partner with Bangladesh operations hub.",
    images: ["/images/og-image.jpg"],
    creator: "@bizit360",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BizIT360",
  url: "https://bizit360.org",
  logo: "https://bizit360.org/images/logo.png",
  description: "U.S.-based property preservation operations partner with Bangladesh operations hub.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@bizit360.com",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  sameAs: ["https://www.linkedin.com/company/bizit360", "https://twitter.com/bizit360"],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: ["Work Order Processing", "Vendor Coordination", "Quality Control", "Reporting Services"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        {/* Google Tag Manager - Replace GTM-XXXXXXX with your GTM ID */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Google Analytics 4 - Replace G-XXXXXXXXXX with your GA4 ID */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
