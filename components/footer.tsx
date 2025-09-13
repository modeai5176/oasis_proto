import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { ElephantIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-[#00071B] text-[#FEFFFF] relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <ElephantIcon className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10">
          <ElephantIcon className="h-24 w-24" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#1C3163] rounded-full flex items-center justify-center shadow-lg">
                <ElephantIcon className="h-5 w-5 text-[#FEFFFF]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-[#FEFFFF]">Oasis & Mirage</span>
                <span className="text-xs text-[#D6B585]">Community-led nonprofit initiative</span>
              </div>
            </div>
            <p className="text-[#D6B585] mb-6 max-w-md leading-relaxed">
              Fostering intergenerational dialogue and amplifying senior voices to build stronger, more connected
              communities where wisdom meets innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#D6B585]">
                <Mail className="h-4 w-4" />
                <span>contact@oasismirage.org</span>
              </div>
              <div className="flex items-center space-x-2 text-[#D6B585]">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-[#D6B585]">
                <MapPin className="h-4 w-4" />
                <span>123 Community St, Your City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-[#FEFFFF]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/communities" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                  Communities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-[#FEFFFF]">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#D6B585] hover:text-[#FEFFFF] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          {/* Decorative Separator Line */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D6B585] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#D6B585] mx-3"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D6B585] to-transparent"></div>
          </div>
          
          <div className="text-[#D6B585]">
            <p>&copy; 2024 Oasis & Mirage. All rights reserved. | Tax ID: 12-3456789</p>
            <p className="mt-2 text-sm text-[#FEFFFF]">Building bridges between generations, one community at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
