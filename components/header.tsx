"use client"

import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthModal from "@/components/auth-modal"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse PGs", href: "/search" },
    { name: "List Property", href: "#list" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PGSpot</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setAuthModalOpen(true)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Login
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setAuthModalOpen(true)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setAuthModalOpen(true)
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 text-left"
                >
                  Login
                </button>
                <Button
                  className="rounded-full w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setAuthModalOpen(true)
                  }}
                >
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  )
}
