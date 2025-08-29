"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  MessageCircle,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";

export function AboutPageContent() {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20perusahaan%20Anda",
      "_blank"
    );
  };

  // const teamMembers = [
  //   {
  //     name: "Grahaco Founder",
  //     role: "Founder & CEO",
  //     experience: "20+ tahun",
  //     specialization: "Arsitektur & Manajemen Proyek",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  //   {
  //     name: "Grahaco Lead Designer",
  //     role: "Head of Design",
  //     experience: "15+ tahun",
  //     specialization: "Interior & Landscape Design",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  //   {
  //     name: "Grahaco Construction Manager",
  //     role: "Construction Manager",
  //     experience: "18+ tahun",
  //     specialization: "Konstruksi & Quality Control",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  //   {
  //     name: "Grahaco Marketing Director",
  //     role: "Property Manager",
  //     experience: "12+ tahun",
  //     specialization: "Property Management & Investment",
  //     image: "/placeholder.svg?height=300&width=300",
  //   },
  // ];

  const achievements = [
    {
      icon: Users,
      title: "51+ Klien Konsultan",
      description:
        "Lebih dari 50 klien telah mempercayakan konsultasi hunian mereka kepada Grahaco.",
    },
    {
      icon: Building2,
      title: "12+ Desain Rumah",
      description:
        "Kami telah menyelesaikan lebih dari 12 desain rumah yang disesuaikan dengan kebutuhan dan gaya hidup klien",
    },
    {
      icon: Building,
      title: "100+ Proyek Konstruksi",
      description:
        "Grahaco berhasil menuntaskan lebih dari 100 proyek konstruksi dengan berbagai skala, tepat waktu, dan sesuai harapan.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Kualitas",
      description:
        "Komitmen pada standar kualitas tertinggi dalam setiap proyek yang kami kerjakan.",
    },
    {
      icon: Users,
      title: "Profesionalisme",
      description:
        "Tim ahli yang berpengalaman dan berkomitmen memberikan layanan terbaik.",
    },
    {
      icon: Heart,
      title: "Integritas",
      description:
        "Transparansi dan kejujuran dalam setiap aspek bisnis dan hubungan dengan klien.",
    },
    {
      icon: Target,
      title: "Inovasi",
      description:
        "Selalu mengadopsi teknologi dan metode terbaru untuk hasil yang optimal.",
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
                <BreadcrumbPage>Tentang Kami</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Tentang Perusahaan
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Membangun Masa Depan
                  <span className="text-primary block">Bersama Grahaco</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Grahaco akan menjadi mitra terpercaya dalam mewujudkan impian
                  properti Anda. Kami menghadirkan solusi lengkap dari desain
                  hingga konstruksi dengan standar kualitas internasional.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hubungi via WhatsApp
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#team">Lihat Tim Kami</a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Grahaco Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Cerita Perusahaan Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grahaco adalah perusahaan kontraktor yang berdiri sejak tahun
                  2024 dengan fokus pada arsitektur, desain interior,
                  pembangunan, dan renovasi rumah. Kami menghadirkan layanan
                  terintegrasi mulai dari perencanaan hingga pelaksanaan, dengan
                  menekankan solusi kreatif, fungsional, dan ramah lingkungan.
                </p>
                <p>
                  Dengan pendekatan profesional dan pengalaman tim ahli, Grahaco
                  membantu mewujudkan hunian impian yang tidak hanya nyaman,
                  tetapi juga berkelanjutan dan selaras dengan kebutuhan hidup
                  modern.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="/placeholder.svg?height=300&width=300"
                alt="Company History 1"
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="/placeholder.svg?height=300&width=300"
                alt="Company History 2"
                className="w-full h-48 object-cover rounded-lg mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="/placeholder.svg?height=300&width=300"
                alt="Company History 3"
                className="w-full h-48 object-cover rounded-lg -mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="/placeholder.svg?height=300&width=300"
                alt="Company History 4"
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Visi & Misi Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi setiap klien dan
              proyek
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 bg-card">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Visi</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi perusahaan konstruksi dan properti terdepan di
                    Indonesia yang dikenal karena kualitas, inovasi, dan
                    komitmen terhadap kepuasan klien serta keberlanjutan
                    lingkungan.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 bg-card">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Memberikan layanan konstruksi dan desain berkualitas
                      tinggi dengan standar internasional
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Mengutamakan kepuasan klien melalui pelayanan profesional
                      dan hasil yang memuaskan
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Menerapkan praktik berkelanjutan dan ramah lingkungan
                      dalam setiap proyek
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Terus berinovasi dengan teknologi terbaru untuk efisiensi
                      dan kualitas optimal
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Pencapaian Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Prestasi yang membanggakan dalam perjalanan kami melayani klien
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full" // Tambahkan h-full di sini untuk keamanan, meskipun Grid sudah melakukannya
                >
                  <Card className="text-center border-0 bg-card hover:shadow-lg transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang
              kami berikan
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {value.title}
                        </h3>
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
        </div>
      </section>

      {/* Team */}
      {/* <section id="team" className="py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bertemu dengan para ahli yang berdedikasi untuk mewujudkan proyek
              impian Anda
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <img
                        src={
                          member.image ||
                          "/placeholder.svg?height=96&width=96&query=professional headshot"
                        }
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-sm">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.experience}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {member.specialization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
                Siap Berkolaborasi dengan Kami?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
                Mari wujudkan proyek impian Anda bersama tim profesional
                Grahaco. Hubungi kami untuk konsultasi gratis dan solusi
                terbaik.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppContact}
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
                <a href="/contact">Kontak</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
