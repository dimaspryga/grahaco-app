"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useGalleryData, useProjectFilter } from "@/hooks/use-gallery-data"
import { Breadcrumb } from "@/components/breadcrumb"

export function ProjectsPageContent() {
  const { projects } = useGalleryData()
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    categories,
    filterProjects,
  } = useProjectFilter()

  const itemsPerPage = 9
  const { currentProjects, totalPages } = filterProjects(projects, itemsPerPage)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumb items={[{ label: "Galeri Proyek" }]} />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Galeri Proyek</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lihat berbagai proyek yang telah kami selesaikan dengan standar kualitas tinggi dan kepuasan klien yang
              maksimal.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8 border-b"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                >
                  {category === "All" ? "Semua" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    {project.location && project.year && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2">
                      {project.slug && (
                        <Button asChild className="flex-1" size="sm">
                          <Link href={`/projects/${project.slug}`}>Lihat Detail</Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan proyek ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center mt-12 gap-2"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
