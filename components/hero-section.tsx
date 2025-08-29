"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Compass, Home } from "lucide-react";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

function CountUp({
  from,
  to,
  duration = 2000,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration / 1000,
      onUpdate: (value) => setCount(Math.floor(value)),
    });
    return controls.stop;
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export function HeroSection() {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20Anda",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-32">
      {/* Background Container with overflow control */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        ></div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hunian Impian yang Nyaman & Berkelanjutan
                <span className="text-primary"> Bersama Grahaco!</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Solusi lengkap untuk kebutuhan arsitektur, konstruksi, dan
                pengelolaan properti dengan standar profesional dan kualitas
                terpercaya.
              </p>
            </motion.div>

            {/* Service Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold text-sm text-white">
                    Kontraktor
                  </h3>
                  <p className="text-xs text-gray-300">
                    Konstruksi Berkualitas
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Compass className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold text-sm text-white">Desain</h3>
                  <p className="text-xs text-gray-300">Arsitektur Modern</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Home className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold text-sm text-white">
                    Kelola Properti
                  </h3>
                  <p className="text-xs text-gray-300">Manajemen Terpadu</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <a href="#services">Lihat Layanan</a>
              </Button>
            </motion.div>

            {/* Stats with CountUp */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  <CountUp from={0} to={51} duration={2000} />+
                </div>
                <div className="text-sm text-gray-300">Klien Konsultan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  <CountUp from={0} to={12} duration={2000} />+
                </div>
                <div className="text-sm text-gray-300">Klien Konsultan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  <CountUp from={0} to={100} duration={2000} />+
                </div>
                <div className="text-sm text-gray-300">Proyek Konstruksi</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
