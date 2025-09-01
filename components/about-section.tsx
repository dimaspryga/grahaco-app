"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useValuesData } from "@/hooks/use-values-data";

export function AboutSection() {
  const { values } = useValuesData();

  return (
    <section className="py-20 bg-white z-10">
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
                Tentang Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Grahaco – Konsultan Hunian Nyaman & Berkelanjutan
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Grahaco adalah perusahaan kontraktor yang berdiri sejak tahun
                2024 dengan fokus pada arsitektur, desain interior, pembangunan,
                dan renovasi rumah. Kami menghadirkan layanan terintegrasi mulai
                dari perencanaan hingga pelaksanaan, dengan menekankan solusi
                kreatif, fungsional, dan ramah lingkungan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan pendekatan profesional dan pengalaman tim ahli, Grahaco
                membantu mewujudkan hunian impian yang tidak hanya nyaman,
                tetapi juga berkelanjutan dan selaras dengan kebutuhan hidup
                modern.
              </p>
            </div>

            <Button size="lg" asChild>
              <a href="/contact">Diskusikan Kebutuhan Rumah Anda</a>
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
