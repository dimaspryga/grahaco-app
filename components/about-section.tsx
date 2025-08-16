"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description:
        "Standar kualitas tinggi dalam setiap proyek dengan sertifikasi internasional.",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description:
        "Didukung oleh tim ahli berpengalaman dengan keahlian multidisiplin.",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description:
        "Komitmen menyelesaikan proyek sesuai timeline yang telah disepakati.",
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description:
        "Kepercayaan klien adalah prioritas utama dengan track record yang solid.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Tentang Grahaco
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari 15 tahun di industri konstruksi dan
                properti, Grahaco telah menjadi mitra terpercaya untuk berbagai
                proyek arsitektur dan konstruksi di Indonesia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kami mengombinasikan keahlian teknis, inovasi desain, dan
                manajemen proyek yang efisien untuk memberikan hasil terbaik
                bagi setiap klien. Dari konsep hingga penyelesaian, kami
                berkomitmen menghadirkan solusi properti yang berkualitas
                tinggi.
              </p>
            </div>

            {/* Company Stats */}
            {/* <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Tim Profesional</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
              </div>
            </motion.div> */}

            <Button size="lg" asChild>
              <a href="/about">Pelajari Lebih Lanjut</a>
            </Button>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground text-center lg:text-left">
              Nilai-Nilai Kami
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 bg-card hover:shadow-md transition-shadow">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
