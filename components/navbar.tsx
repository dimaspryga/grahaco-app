"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20Anda",
      "_blank",
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="text-xl font-bold text-primary">Grahaco</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Layanan</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services/kontraktor">Kontraktor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/desain">Desain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/kelola-properti">Kelola Properti</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              Tentang Kami
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </Link>
          </div>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center space-x-2 bg-accent hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services/kontraktor"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Kontraktor
              </Link>
              <Link
                href="/services/desain"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Desain
              </Link>
              <Link
                href="/services/kelola-properti"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Kelola Properti
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <Button onClick={handleWhatsAppClick} className="mt-2 w-full bg-accent hover:bg-accent/90">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
