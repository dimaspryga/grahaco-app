import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { ServiceDetailLayout } from "@/components/service-detail-layout"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getKelolaPropertiServiceBySlug } from "@/lib/services-data"

interface PageProps {
  params: {
    slug: string
  }
}

export default function KelolaPropertiDetailPage({ params }: PageProps) {
  const service = getKelolaPropertiServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceDetailLayout service={service} serviceType="kelola-properti" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
