"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20untuk%20berkonsultasi",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          className="text-center my-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-foreground">
              Siap memulai proyek Anda?
            </h1>
            <p className="text-muted-foreground text-lg">
              Wujudkan Rumah Impian yang Nyaman & Berkelanjutan bersama Grahaco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Klik di sini untuk konsultasi gratis!
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">Form Lengkap</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
