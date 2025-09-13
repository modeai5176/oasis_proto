import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PerformanceMonitor } from "@/app/components/performance-monitor"
import { ErrorBoundary } from "@/app/components/error-boundary"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Oasis & Mirage - From Mirage to Community",
  description:
    "Strengthening communities by fostering connection, resilience, and shared growth. We create spaces of refuge and renewal where individuals come together to support one another, access resources, and transform challenges into opportunities.",
  keywords: "nonprofit, community, connection, resilience, shared growth, social impact, oasis, mirage, community building",
  generator: 'v0.app',
  authors: [{ name: 'Oasis & Mirage' }],
  creator: 'Oasis & Mirage',
  publisher: 'Oasis & Mirage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oasismirage.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Oasis & Mirage - From Mirage to Community",
    description: "Strengthening communities by fostering connection, resilience, and shared growth.",
    url: 'https://oasismirage.org',
    siteName: 'Oasis & Mirage',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oasis & Mirage - From Mirage to Community",
    description: "Strengthening communities by fostering connection, resilience, and shared growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#3A7D44] focus:text-white focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        <PerformanceMonitor />
        <ErrorBoundary>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
