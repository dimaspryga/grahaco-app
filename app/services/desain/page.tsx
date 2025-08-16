"use client";

import { Navbar } from "@/components/navbar";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Compass } from "lucide-react";

const desainServices = [
  {
    id: 1,
    title: "Desain Arsitektur Rumah",
    description:
      "Desain arsitektur rumah tinggal yang menggabungkan estetika modern dengan fungsionalitas optimal.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residential",
    price: "Mulai dari Rp 150 ribu/m²",
    features: [
      "Gambar Kerja Lengkap",
      "3D Rendering",
      "Konsultasi Design",
      "Revisi Unlimited",
    ],
    slug: "desain-arsitektur-rumah",
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Desain interior yang menciptakan ruang hidup yang nyaman, fungsional, dan sesuai dengan gaya hidup Anda.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Interior",
    price: "Mulai dari Rp 2 juta/m²",
    features: [
      "Space Planning",
      "Material Selection",
      "Furniture Layout",
      "Lighting Design",
    ],
    slug: "interior-design",
  },
  {
    id: 3,
    title: "Landscape Design",
    description:
      "Desain taman dan landscape yang harmonis dengan arsitektur bangunan dan lingkungan sekitar.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Landscape",
    price: "Mulai dari Rp 500 ribu/m²",
    features: [
      "Garden Planning",
      "Plant Selection",
      "Irrigation System",
      "Outdoor Lighting",
    ],
    slug: "landscape-design",
  },
  {
    id: 4,
    title: "Desain Komersial",
    description:
      "Desain bangunan komersial yang menarik pelanggan dan mendukung aktivitas bisnis secara optimal.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
    price: "Mulai dari Rp 200 ribu/m²",
    features: [
      "Brand Integration",
      "Customer Flow",
      "Efficient Layout",
      "Signage Design",
    ],
    slug: "desain-komersial",
  },
  {
    id: 5,
    title: "Renovasi Design",
    description:
      "Desain renovasi yang mengoptimalkan ruang existing dengan konsep fresh dan modern.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Renovation",
    price: "Mulai dari Rp 100 ribu/m²",
    features: [
      "Space Optimization",
      "Cost Effective",
      "Minimal Disruption",
      "Quick Turnaround",
    ],
    slug: "renovasi-design",
  },
  {
    id: 6,
    title: "Konsultasi Desain",
    description:
      "Layanan konsultasi desain untuk memberikan solusi terbaik sesuai budget dan kebutuhan Anda.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Consultation",
    price: "Mulai dari Rp 500 ribu/jam",
    features: [
      "Expert Advice",
      "Budget Planning",
      "Material Guidance",
      "Permit Assistance",
    ],
    slug: "konsultasi-desain",
  },
];

export default function DesainPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageLayout
        title="Layanan Desain"
        description="Desain arsitektur dan interior yang inovatif dengan sentuhan modern dan fungsional"
        icon={Compass}
        services={desainServices}
        serviceType="desain"
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
