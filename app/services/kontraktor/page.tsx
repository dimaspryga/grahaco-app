"use client";

import { Navbar } from "@/components/navbar";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Building2 } from "lucide-react";
import { useGalleryData } from "@/hooks/use-gallery-data";

function transformGalleryToServices(galleryProjects: any[]) {
  return galleryProjects
    .filter((project) => project.category === "Kontraktor")
    .map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      category: "Construction",
      price: "Hubungi untuk penawaran",
      features: [
        "Kualitas Terjamin",
        "Garansi Konstruksi",
        "Project Management",
        "Material Berkualitas",
      ],
      slug: project.slug || `kontraktor-${project.id}`,
    }));
}

export default function KontraktorPage() {
  const { projects } = useGalleryData();
  const kontraktorkServices = transformGalleryToServices(projects);

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
