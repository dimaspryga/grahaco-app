import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectDetailContent } from "@/components/project-detail-content"
import { notFound } from "next/navigation"
import { projectsData } from "@/lib/projects-data"

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectDetailContent project={project} />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}
