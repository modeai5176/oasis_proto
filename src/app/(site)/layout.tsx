import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <Toaster />
    </>
  )
}
