"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Villa Modern Minimalis",
      location: "Jakarta Selatan",
      year: "2024",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Desain villa modern dengan konsep minimalis yang mengedepankan pencahayaan alami dan ruang terbuka.",
    },
    {
      id: 2,
      title: "Kompleks Perkantoran",
      location: "Tangerang",
      year: "2023",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Pembangunan kompleks perkantoran modern dengan fasilitas lengkap dan teknologi smart building.",
    },
    {
      id: 3,
      title: "Rumah Tropis Contemporary",
      location: "Bogor",
      year: "2024",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Hunian dengan konsep tropis contemporary yang menyatu dengan alam sekitar.",
    },
    {
      id: 4,
      title: "Apartemen Luxury",
      location: "Jakarta Pusat",
      year: "2023",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Desain interior apartemen mewah dengan sentuhan modern dan material premium.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Portofolio Proyek
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lihat berbagai proyek yang telah kami selesaikan dengan standar
            kualitas tinggi dan kepuasan klien yang maksimal.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 text-foreground"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline">
            Lihat Semua Proyek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
