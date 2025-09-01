"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  usePackagesData,
  usePackageNavigation,
} from "@/hooks/use-packages-data";

export function PackagesSection() {
  const { packages } = usePackagesData();
  const { activePackage, scrollToPackage } = usePackageNavigation(packages);

  return (
    <section className="py-20 bg-muted/30 z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Pilihan Paket Konstruksi
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Grahaco menghadirkan paket konstruksi fleksibel sesuai kebutuhan dan
            anggaran Anda. Dengan material terjamin dan standar kerja yang
            konsisten, setiap rumah dibangun secara efisien dan berkualitas
            tinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Navigation - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {packages.map((pkg, index) => (
                <motion.button
                  key={pkg.id}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activePackage === index
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card hover:bg-muted border-border"
                  }`}
                  onClick={() => scrollToPackage(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold">{pkg.title}</div>
                  <div className="text-sm opacity-80">{pkg.price}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="lg:col-span-3 space-y-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                id={`package-${index}`}
                className="scroll-mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {pkg.title}
                        </h3>
                        <p className="text-3xl font-bold text-primary mt-2">
                          {pkg.price}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA Section */}
            <motion.div
              className="text-center space-y-6 pt-8 border-t"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                *Harga dapat disesuaikan dengan tambahan fasilitas khusus atau
                perubahan desain yang diinginkan dari klien
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Cek estimasi hunian Anda
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
