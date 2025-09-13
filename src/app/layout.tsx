import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Oasis & Mirage - Intergenerational Community",
  description:
    "Building bridges between generations through shared stories, grassroots leadership, and authentic connection.",
  keywords: "intergenerational, community, seniors, youth, nonprofit, grassroots",
  authors: [{ name: "Oasis & Mirage" }],
  openGraph: {
    title: "Oasis & Mirage - Intergenerational Community",
    description:
      "Building bridges between generations through shared stories, grassroots leadership, and authentic connection.",
    type: "website",
    locale: "en_US",
    siteName: "Oasis & Mirage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis & Mirage - Intergenerational Community",
    description:
      "Building bridges between generations through shared stories, grassroots leadership, and authentic connection.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <body>
        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
