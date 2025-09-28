"use client";

import { Navbar } from "@/components/navbar";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Compass } from "lucide-react";
import { useGalleryData } from "@/hooks/use-gallery-data";

function transformGalleryToServices(galleryProjects: any[]) {
  return galleryProjects
    .filter((project) => project.category === "Design")
    .map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      category: "Design",
      price: "Mulai dari Rp 150 ribu/m²",
      features: [
        "Gambar Kerja Lengkap",
        "3D Rendering",
        "Konsultasi Design",
        "Revisi Unlimited",
      ],
      slug: project.slug || `desain-${project.id}`,
    }));
}

export default function DesainPage() {
  const { projects } = useGalleryData();
  const desainServices = transformGalleryToServices(projects);

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
