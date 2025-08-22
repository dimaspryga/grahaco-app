import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ProblemsSection } from "@/components/problems-section";
import { WhyGrahacoSection } from "@/components/why-grahaco-section";
import { GrahacoSolutionsSection } from "@/components/grahaco-solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PackagesSection } from "@/components/packages-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProblemsSection />
      <WhyGrahacoSection />
      <GrahacoSolutionsSection />
      <TestimonialsSection />
      <PackagesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
