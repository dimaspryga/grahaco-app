"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useNavbarScroll } from "@/hooks/use-navbar-scroll"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isVisible } = useNavbarScroll()

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20Anda",
      "_blank",
    )
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded bg-primary"></div>
            <span className="text-lg sm:text-xl font-bold text-primary">Grahaco</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <Link href="/" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm lg:text-base text-foreground hover:text-primary transition-colors">
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

            <Link href="/about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Tentang Kami
            </Link>
            <Link href="/contact" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Kontak
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="hidden sm:flex items-center space-x-2 bg-accent hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp</span>
              <span className="lg:hidden">WA</span>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b shadow-lg"
            >
              <div className="space-y-1 px-4 py-4">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services/kontraktor"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kontraktor
                </Link>
                <Link
                  href="/services/desain"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Desain
                </Link>
                <Link
                  href="/services/kelola-properti"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kelola Properti
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kontak
                </Link>
                <div className="pt-2">
                  <Button onClick={handleWhatsAppClick} className="w-full bg-accent hover:bg-accent/90">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
