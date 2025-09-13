"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { CamelIcon } from "./icons"
import { ContactDialog } from "./contact-dialog"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Communities", href: "/communities" },
  { name: "Projects", href: "/projects" },
  { name: "Contribute", href: "/contribute" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--sand-200)] bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus-ring rounded-md">
            <CamelIcon className="h-8 w-8 text-[var(--oasis-600)]" />
            <span className="font-display text-xl font-bold text-[var(--ink)]">Oasis & Mirage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded-md px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setContactOpen(true)}
              className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring"
            >
              Contact
            </Button>
            <Button asChild className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring">
              <Link href="/contribute">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="focus-ring">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded-md px-2 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[var(--sand-200)] space-y-3">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setContactOpen(true)
                      setIsOpen(false)
                    }}
                    className="w-full justify-start text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring"
                  >
                    Contact
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
                  >
                    <Link href="/contribute" onClick={() => setIsOpen(false)}>
                      Donate
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </header>
  )
}
