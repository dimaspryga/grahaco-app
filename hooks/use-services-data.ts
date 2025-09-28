"use client";

import { Building2, Compass, Home } from "lucide-react";

export interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  href: string;
  color: string;
  bgColor: string;
}

export function useServicesData() {
  const services: Service[] = [
    {
      icon: Building2,
      title: "Kontraktor",
      description:
        "Layanan konstruksi profesional dengan standar kualitas tinggi dan tepat waktu.",
      features: [
        "Konstruksi Bangunan",
        "Renovasi & Remodeling",
        "Project Management",
        "Quality Control",
      ],
      href: "/services/kontraktor",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Compass,
      title: "Desain",
      description:
        "Desain arsitektur inovatif yang menggabungkan estetika modern dengan fungsionalitas.",
      features: [
        "Desain Arsitektur",
        "Interior Design",
        "3D Visualization",
        "Konsultasi Desain",
      ],
      href: "/services/desain",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Home,
      title: "Kelola Properti",
      description:
        "Manajemen properti terpadu untuk memaksimalkan nilai investasi Anda.",
      features: [
        "Property Management",
        "Maintenance Service",
        "Tenant Management",
        "Investment Advisory",
      ],
      href: "#",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const handleWhatsAppContact = (service: string) => {
    window.open(
      `https://wa.me/6281234567890?text=Halo%20Grahaco,%20saya%20tertarik%20dengan%20layanan%20${service}`,
      "_blank"
    );
  };

  return { services, handleWhatsAppContact };
}
