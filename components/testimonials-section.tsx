"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  useTestimonialsData,
  useTestimonialCarousel,
} from "@/hooks/use-testimonials-data";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const { testimonials } = useTestimonialsData();
  const {
    currentIndex,
    setCurrentIndex,
    isHovered,
    nextSlide,
    prevSlide,
    handleMouseEnter,
    handleMouseLeave,
    cardsPerPage, // Dapatkan cardsPerPage dari hook (untuk tampilan responsif)
    totalPages, // Dapatkan totalPages dari hook (untuk pagination satu per satu)
  } = useTestimonialCarousel(testimonials);

  // Menghitung nilai translateX secara dinamis berdasarkan currentIndex.
  // Ini memastikan pergeseran satu kartu pada satu waktu, di mana setiap kartu
  // mengambil 1/testimonials.length dari total lebar container flex.
  const translateXValue = currentIndex * (100 / testimonials.length);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Apa kata mereka?
          </h2>
        </motion.div>

        <div
          className="relative group"
          onMouseEnter={handleMouseEnter} // Menghentikan auto-slide saat mouse masuk
          onMouseLeave={handleMouseLeave} // Melanjutkan auto-slide saat mouse keluar
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                // Transformasi translateX untuk menggeser carousel satu kartu pada satu waktu.
                transform: `translateX(-${translateXValue}%)`,
                // Lebar total container flex agar semua kartu testimonial muat.
                // cardsPerPage digunakan untuk menginformasikan berapa banyak 'unit' kartu yang visible pada satu waktu.
                width: `${testimonials.length * (100 / cardsPerPage)}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{
                    // Menyesuaikan lebar setiap kartu secara dinamis berdasarkan cardsPerPage
                    // untuk memastikan responsivitas tampilan.
                    width: `${100 / testimonials.length}%`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: (index % cardsPerPage) * 0.1,
                    }} // Penundaan animasi disesuaikan
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card border-border">
                      <CardContent className="p-4 sm:p-6 text-center space-y-4 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                          <div className="flex justify-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                            "{testimonial.content}"
                          </blockquote>
                        </div>
                        <div className="space-y-1 mt-auto">
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-primary">
                            {testimonial.role}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tombol navigasi Previous dan Next */}
          {/* Tombol hanya terlihat saat mouse diarahkan ke area carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none"
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg pointer-events-auto"
              onClick={prevSlide} // Memanggil fungsi prevSlide
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg pointer-events-auto"
              onClick={nextSlide} // Memanggil fungsi nextSlide
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Indikator pagination (titik-titik di bawah carousel) */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {/* Sekarang ada titik untuk setiap testimonial karena kita menggesernya satu per satu */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  // Tombol pagination aktif jika currentIndex sama dengan indeks titik
                  currentIndex === index ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)} // Mengatur currentIndex ke testimonial yang dipilih
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
