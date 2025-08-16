import { Navbar } from "@/components/navbar"
import { AboutPageContent } from "@/components/about-page-content"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutPageContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
