"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20Anda",
      "_blank"
    );
  };

  const handleEmailContact = () => {
    window.open("mailto:info@grahaco.com", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary-foreground"></div>
              <span className="text-xl font-bold">Grahaco</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Solusi terpercaya untuk kebutuhan arsitektur, konstruksi, dan
              properti Anda.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/kontraktor"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Kontraktor
                </Link>
              </li>
              <li>
                <Link
                  href="/services/desain"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Desain
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kelola-properti"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Kelola Properti
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  +62 812-3456-7890
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  info@grahaco.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-primary-foreground/80 whitespace-pre-line">
                  Jl. Retno Dumilah 2 C, Kotagede,
                  <br /> Kota Yogyakarta
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Button
                onClick={handleWhatsAppContact}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                size="sm"
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Grahaco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
