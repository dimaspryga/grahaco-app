import { Navbar } from "@/components/navbar"
import { ContactPageContent } from "@/components/contact-page-content"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactPageContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
