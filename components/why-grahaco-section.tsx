"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useStatsData } from "@/hooks/use-stats-data";

export function WhyGrahacoSection() {
  const { stats } = useStatsData();

  return (
    <section className="py-20 bg-white z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Kenapa Harus Grahaco?
          </h2>
          <p className="text-xl text-primary font-semibold">
            Pencapaian di Tahun 2024
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 h-full bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="text-5xl sm:text-6xl font-bold text-primary">
                    <CountUp
                      end={stat.target}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyDelay={200}
                      suffix="+"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
