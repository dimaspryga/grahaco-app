"use client"

import { useState } from "react"

export interface GalleryProject {
  id: number
  title: string
  category: string
  image: string
  description: string
  location?: string
  year?: string
  slug?: string
}

export function useGalleryData() {
  const projects: GalleryProject[] = [
    {
      id: 1,
      title: "Rumah Modern Minimalis",
      category: "Residential",
      image: "/modern-minimalist-house.png",
      description: "Desain rumah modern dengan konsep minimalis yang elegan",
      location: "Jakarta Selatan",
      year: "2024",
      slug: "rumah-modern-minimalis",
    },
    {
      id: 2,
      title: "Interior Kontemporer",
      category: "Interior",
      image: "/contemporary-living-room.png",
      description: "Interior kontemporer dengan sentuhan hangat dan fungsional",
      location: "Bandung",
      year: "2024",
      slug: "interior-kontemporer",
    },
    {
      id: 3,
      title: "Renovasi Rumah Klasik",
      category: "Renovation",
      image: "/classic-house-renovation-exterior.png",
      description: "Renovasi rumah klasik dengan sentuhan modern",
      location: "Bogor",
      year: "2023",
      slug: "renovasi-rumah-klasik",
    },
    {
      id: 4,
      title: "Desain Taman Landscape",
      category: "Landscape",
      image: "/modern-garden-landscape.png",
      description: "Desain taman dengan konsep landscape modern",
      location: "Tangerang",
      year: "2024",
      slug: "desain-taman-landscape",
    },
    {
      id: 5,
      title: "Rumah Tropis Modern",
      category: "Residential",
      image: "/tropical-modern-house.png",
      description: "Rumah dengan konsep tropis modern yang sejuk",
      location: "Depok",
      year: "2023",
      slug: "rumah-tropis-modern",
    },
    {
      id: 6,
      title: "Office Interior Design",
      category: "Commercial",
      image: "/modern-office-interior.png",
      description: "Desain interior kantor yang produktif dan nyaman",
      location: "Jakarta Pusat",
      year: "2024",
      slug: "office-interior-design",
    },
  ]

  return { projects }
}

export function useProjectFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const categories = ["All", "Residential", "Interior", "Renovation", "Landscape", "Commercial"]

  const filterProjects = (projects: GalleryProject[], itemsPerPage = 9) => {
    const filteredProjects = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

    return {
      filteredProjects,
      currentProjects,
      totalPages,
      currentPage,
    }
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    categories,
    filterProjects,
  }
}
