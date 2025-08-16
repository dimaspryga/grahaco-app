import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectsPageContent } from "@/components/projects-page-content"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsPageContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
