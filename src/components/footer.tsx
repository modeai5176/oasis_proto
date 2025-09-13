import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CamelIcon } from "./icons"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

const footerLinks = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/about#team" },
    { name: "Vision & Values", href: "/about#vision" },
  ],
  programs: [
    { name: "Communities", href: "/communities" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/projects#events" },
  ],
  getInvolved: [
    { name: "Donate", href: "/contribute" },
    { name: "Volunteer", href: "/contribute#volunteer" },
    { name: "Start a Circle", href: "/communities#start" },
  ],
  resources: [
    { name: "FAQ", href: "/about#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Newsletter", href: "#newsletter" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--sand-100)] border-t border-[var(--sand-200)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <CamelIcon className="h-8 w-8 text-[var(--oasis-600)]" />
              <span className="font-display text-xl font-bold text-[var(--ink)]">Oasis & Mirage</span>
            </Link>
            <p className="text-[var(--ink-soft)] text-sm leading-relaxed mb-4">
              Building bridges between generations through shared stories, grassroots leadership, and authentic
              connection.
            </p>
            <Button size="sm" className="bg-[var(--date-500)] hover:opacity-90 text-white focus-ring">
              <Link href="/contribute">Mini Donate</Link>
            </Button>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-[var(--ink)] mb-3">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)] mb-3">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)] mb-3">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)] mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-[var(--sand-200)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[var(--ink)] mb-2">Stay Connected</h3>
              <p className="text-sm text-[var(--ink-soft)]">Get updates on community events and stories.</p>
            </div>
            <div className="flex gap-2 max-w-sm">
              <Input type="email" placeholder="Enter your email" className="focus-ring" />
              <Button type="submit" className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="mt-8 pt-8 border-t border-[var(--sand-200)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-[var(--ink-soft)]">Oasis & Mirage is a community-led nonprofit initiative.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring rounded">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring rounded">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring rounded">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring rounded">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
