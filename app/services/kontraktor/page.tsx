"use client";

import { Navbar } from "@/components/navbar";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Building2 } from "lucide-react";

const kontraktorkServices = [
  {
    id: 1,
    title: "Konstruksi Rumah Tinggal",
    description:
      "Pembangunan rumah tinggal dengan standar kualitas tinggi dan desain sesuai kebutuhan keluarga modern.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residential",
    price: "Mulai dari Rp 15 juta/m²",
    features: [
      "Struktur Beton Bertulang",
      "Material Berkualitas",
      "Garansi 5 Tahun",
      "Project Management",
    ],
    slug: "konstruksi-rumah-tinggal",
  },
  {
    id: 2,
    title: "Renovasi & Remodeling",
    description:
      "Layanan renovasi dan remodeling untuk meningkatkan fungsi dan estetika bangunan existing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Renovation",
    price: "Mulai dari Rp 8 juta/m²",
    features: [
      "Konsultasi Gratis",
      "3D Visualization",
      "Izin Renovasi",
      "Cleanup Service",
    ],
    slug: "renovasi-remodeling",
  },
  {
    id: 3,
    title: "Pembangunan Komersial",
    description:
      "Konstruksi bangunan komersial seperti ruko, perkantoran, dan fasilitas bisnis lainnya.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
    price: "Mulai dari Rp 12 juta/m²",
    features: [
      "Desain Fungsional",
      "Sistem MEP",
      "Fire Safety System",
      "Sertifikat SLF",
    ],
    slug: "pembangunan-komersial",
  },
  {
    id: 4,
    title: "Konstruksi Industrial",
    description:
      "Pembangunan fasilitas industri dengan standar keamanan dan efisiensi operasional tinggi.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industrial",
    price: "Mulai dari Rp 10 juta/m²",
    features: [
      "Heavy Duty Structure",
      "Crane System",
      "Safety Compliance",
      "Fast Track Construction",
    ],
    slug: "konstruksi-industrial",
  },
  {
    id: 5,
    title: "Infrastruktur Jalan",
    description:
      "Pembangunan dan perbaikan infrastruktur jalan dengan teknologi modern dan material berkualitas.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Infrastructure",
    price: "Mulai dari Rp 2 juta/m²",
    features: [
      "Aspal Berkualitas",
      "Drainage System",
      "Traffic Management",
      "Quality Testing",
    ],
    slug: "infrastruktur-jalan",
  },
  {
    id: 6,
    title: "Konstruksi Apartemen",
    description:
      "Pembangunan apartemen dan kondominium dengan fasilitas lengkap dan desain modern.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residential",
    price: "Mulai dari Rp 18 juta/m²",
    features: [
      "High Rise Construction",
      "Luxury Facilities",
      "Smart Building System",
      "Green Building",
    ],
    slug: "konstruksi-apartemen",
  },
];

export default function KontraktorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageLayout
        title="Layanan Kontraktor"
        description="Solusi konstruksi profesional dengan standar kualitas tinggi dan teknologi terdepan"
        icon={Building2}
        services={kontraktorkServices}
        serviceType="kontraktor"
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
