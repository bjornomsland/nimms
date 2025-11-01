"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#om-nimms", label: "Om NIMMS" },
    { href: "#hva-vi-tilbyr", label: "Hva vi tilbyr" },
    { href: "#bli-med", label: "Bli med" },
    { href: "#kontakt", label: "Kontakt oss" },
    { href: "#vedtekter", label: "Vedtekter" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0A4CA6]/10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/NIMMS-Logo-blue.png"
              alt="NIMMS Logo"
              width={48}
              height={48}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading font-bold text-2xl text-[#12437c] hidden sm:inline-block">NIMMS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-[#1E1E1E] hover:text-[#0A4CA6] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#0A4CA6] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#0A4CA6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-[#0A4CA6]/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-semibold text-[#1E1E1E] hover:text-[#0A4CA6] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
