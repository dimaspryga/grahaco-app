"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useServicesData } from "@/hooks/use-services-data";

export function ServicesSection() {
  const { services, handleWhatsAppContact } = useServicesData();

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Layanan Profesional Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan solusi lengkap untuk semua kebutuhan properti Anda
            dengan tim ahli berpengalaman dan teknologi terdepan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card h-full">
                  <CardHeader className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1"
                      >
                        <Link href={service.href}>
                          Detail
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => handleWhatsAppContact(service.title)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-primary-foreground">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Konsultasikan kebutuhan properti Anda dengan tim ahli kami.
              Dapatkan solusi terbaik untuk investasi masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWhatsAppContact("konsultasi")}
                variant="secondary"
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi Gratis
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
