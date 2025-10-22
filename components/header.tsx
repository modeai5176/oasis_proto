"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "OUR MISSION", href: "/about" },
    { name: "JOIN A GROUP", href: "/communities" },
    { name: "STORIES & IMPACT", href: "/projects" },
    { name: "DONATE", href: "/contribute" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#00071B] transition-all duration-300" 
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Section 1: Logo/Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1C3163] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-[#FEFFFF] font-bold text-lg">O</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-[#FEFFFF] tracking-tight">Oasis & Mirage</span>
              <span className="text-xs text-[#D6B585] -mt-0.5">From mirage to community</span>
            </div>
          </Link>

          {/* Section 2: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#FEFFFF] hover:text-[#D6B585] transition-all duration-300 font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEFFFF] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(254,255,255,0.4)]"></span>
              </Link>
            ))}
          </div>

          {/* Section 3: CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-[#1C3163] hover:bg-[#1C3163]/90 text-[#FEFFFF] px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base"
            >
              <Link href="/contribute">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 hover:bg-[#D6B585]/20 rounded-full text-[#D6B585]"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#D6B585]/20 bg-[#00071B]">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#FEFFFF] hover:text-[#D6B585] transition-colors font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#1C3163] hover:bg-[#1C3163]/90 text-[#FEFFFF] w-fit mt-2 px-6 py-2 rounded-full font-medium shadow-lg"
              >
                <Link href="/contribute">Donate Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
