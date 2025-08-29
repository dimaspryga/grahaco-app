"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  Building2,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20untuk%20berkonsultasi",
      "_blank"
    );
  };

  const handleEmailContact = () => {
    window.open("mailto:info@grahaco.com", "_blank");
  };

  const handlePhoneContact = () => {
    window.open("tel:+6281234567890", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const message = `Halo Grahaco, saya ${formData.name}. Saya tertarik dengan layanan ${formData.service}. ${formData.message}`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      description: "Hubungi kami langsung",
      value: "+62 812-3456-7890",
      action: handlePhoneContact,
      buttonText: "Telepon Sekarang",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat langsung dengan tim kami",
      value: "+62 812-3456-7890",
      action: handleWhatsAppContact,
      buttonText: "Chat WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim email kepada kami",
      value: "info@grahaco.com",
      action: handleEmailContact,
      buttonText: "Kirim Email",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content: "Jl. Retno Dumilah 2 C, Kotagede, Kota Yogyakarta",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content:
        "Senin - Jumat: 08:00 - 16:00\nSabtu: 08:00 - 14:00\nMinggu: Tutup",
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Respons Cepat",
      description: "Tim kami akan merespons dalam Jam Operasional",
    },
    {
      icon: Users,
      title: "Konsultasi Gratis",
      description: "Konsultasi awal tanpa biaya untuk semua layanan",
    },
    {
      icon: Calendar,
      title: "Fleksibel",
      description: "Jadwal konsultasi yang fleksibel sesuai kebutuhan Anda",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Kontak</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Hubungi Kami
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Siap membantu mewujudkan proyek impian Anda. Hubungi tim ahli kami
              untuk konsultasi gratis dan solusi terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 bg-card hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="font-semibold text-foreground mb-4">
                          {method.value}
                        </p>
                        <Button onClick={method.action} className="w-full">
                          {method.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-muted-foreground">
                    Isi formulir di bawah ini dan kami akan segera menghubungi
                    Anda
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Masukkan nama lengkap Anda"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Nomor Telepon *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Contoh: 081234567890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Layanan yang Diminati *
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Pilih layanan</option>
                        <option value="Kontraktor">Kontraktor</option>
                        <option value="Desain">Desain</option>
                        <option value="Kelola Properti">Kelola Properti</option>
                        <option value="Konsultasi">Konsultasi</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Pesan *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Ceritakan detail proyek atau pertanyaan Anda..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Kirim via WhatsApp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleEmailContact}
                        variant="outline"
                        className="flex-1 bg-transparent"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Kirim via Email
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informasi Kantor
                </h2>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="border-0 bg-card">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">
                                  {info.title}
                                </h3>
                                <p className="text-sm text-muted-foreground whitespace-pre-line">
                                  {info.content}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Mengapa Memilih Kami?
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
                Jangan ragu untuk menghubungi kami. Tim profesional kami siap
                membantu mewujudkan impian properti Anda dengan hasil terbaik.
              </p>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
