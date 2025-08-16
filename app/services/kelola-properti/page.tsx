"use client";

import { Navbar } from "@/components/navbar";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Home } from "lucide-react";

const kelolaPropertiServices = [
  {
    id: 1,
    title: "Property Management",
    description:
      "Layanan pengelolaan properti komprehensif untuk memaksimalkan nilai investasi dan ROI Anda.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Management",
    price: "Mulai dari Rp 50 ribu/unit/bulan",
    features: [
      "Tenant Management",
      "Rent Collection",
      "Maintenance Service",
      "Financial Reporting",
    ],
    slug: "property-management",
  },
  {
    id: 2,
    title: "Facility Management",
    description:
      "Pengelolaan fasilitas bangunan untuk memastikan operasional yang efisien dan nyaman.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Facility",
    price: "Mulai dari Rp 15 ribu/m²/bulan",
    features: [
      "24/7 Security",
      "Cleaning Service",
      "Technical Support",
      "Utility Management",
    ],
    slug: "facility-management",
  },
  {
    id: 3,
    title: "Maintenance Service",
    description:
      "Layanan perawatan rutin dan perbaikan untuk menjaga kondisi properti tetap optimal.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Maintenance",
    price: "Mulai dari Rp 25 ribu/m²/bulan",
    features: [
      "Preventive Maintenance",
      "Emergency Repair",
      "Quality Materials",
      "Skilled Technicians",
    ],
    slug: "maintenance-service",
  },
  {
    id: 4,
    title: "Rental Management",
    description:
      "Pengelolaan properti sewa yang profesional untuk mengoptimalkan okupansi dan pendapatan.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Rental",
    price: "Mulai dari 8% dari rental income",
    features: [
      "Tenant Screening",
      "Marketing Strategy",
      "Legal Compliance",
      "Rent Optimization",
    ],
    slug: "rental-management",
  },
  {
    id: 5,
    title: "Investment Advisory",
    description:
      "Konsultasi investasi properti untuk membantu Anda membuat keputusan investasi yang tepat.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Investment",
    price: "Mulai dari Rp 2 juta/konsultasi",
    features: [
      "Market Analysis",
      "ROI Calculation",
      "Risk Assessment",
      "Portfolio Strategy",
    ],
    slug: "investment-advisory",
  },
  {
    id: 6,
    title: "Property Valuation",
    description:
      "Layanan penilaian properti yang akurat untuk keperluan jual beli, kredit, atau investasi.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Valuation",
    price: "Mulai dari Rp 1.5 juta/properti",
    features: [
      "Certified Appraiser",
      "Market Comparison",
      "Detailed Report",
      "Legal Compliance",
    ],
    slug: "property-valuation",
  },
];

export default function KelolaPropertiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageLayout
        title="Layanan Kelola Properti"
        description="Solusi pengelolaan properti terpadu untuk memaksimalkan nilai investasi Anda"
        icon={Home}
        services={kelolaPropertiServices}
        serviceType="kelola-properti"
      />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
