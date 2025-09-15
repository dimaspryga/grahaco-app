"use client";

import { useState } from "react";

export interface GalleryProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  location?: string;
  year?: string;
  slug?: string;
}

export function useGalleryData() {
  const projects: GalleryProject[] = [
    {
      id: 1,
      title: "Rumah Modern",
      category: "Design",
      image: "/desain rumah/rumah modern 2.png",
      description: "Desain rumah modern dengan konsep minimalis yang elegan",
      location: "Jakarta Selatan",
      year: "2024",
      slug: "rumah-modern-minimalis",
    },
    {
      id: 2,
      title: "Rumah Tropis",
      category: "Design",
      image: "/desain rumah/rumah tropis 2.png",
      description: "Desain rumah tropis dengan konsep terbuka dan asri",
      location: "Bandung",
      year: "2024",
      slug: "rumah-tropis",
    },
    {
      id: 3,
      title: "Renovasi Rumah",
      category: "Kontraktor",
      image: "/proses pembangunan/renovasi rumah surabaya.png",
      description: "Renovasi rumah dengan sentuhan modern",
      location: "Surabaya",
      year: "2023",
      slug: "renovasi-rumah",
    },
    {
      id: 4,
      title: "Kontruksi Rumah",
      category: "Kontraktor",
      image: "/proses pembangunan/pembangunan rumah surabaya.png",
      description: "Konstruksi rumah baru dengan standar kualitas tinggi",
      location: "Surabaya",
      year: "2024",
      slug: "kontruksi-rumah",
    },
    {
      id: 5,
      title: "Rumah Industrial",
      category: "Design",
      image: "/desain rumah/rumah industrial 2.png",
      description: "Desain rumah dengan gaya industrial yang unik dan modern",
      location: "Depok",
      year: "2023",
      slug: "rumah-industrial",
    },
    {
      id: 6,
      title: "Rumah Skandinavia",
      category: "Design",
      image: "/desain rumah/rumah skandinavia 1.png",
      description:
        "Desain rumah dengan konsep Skandinavia yang hangat dan fungsional",
      location: "Jakarta Pusat",
      year: "2024",
      slug: "rumah-skandinavia",
    },
    {
      id: 7,
      title: "Renovasi Kantor",
      category: "Kontraktor",
      image: "/proses pembangunan/renovasi kantor jakarta.png",
      description: "Renovasi kantor dengan desain modern dan efisien",
      location: "Jakarta Barat",
      year: "2023",
      slug: "renovasi-kantor",
    },
    {
      id: 8,
      title: "Konstruksi Ruko",
      category: "Kontraktor",
      image: "/proses pembangunan/pembangunan ruko jakarta.png",
      description: "Konstruksi ruko dengan desain komersial yang menarik",
      location: "Jakarta Timur",
      year: "2024",
      slug: "konstruksi-ruko",
    },
    {
      id: 9,
      title: "Rumah Kontemporer",
      category: "Design",
      image: "/desain rumah/rumah kontemporer 1.png",
      description:
        "Desain rumah kontemporer dengan elemen modern dan fungsional",
      location: "Tangerang",
      year: "2023",
      slug: "rumah-kontemporer",
    },
    {
      id: 10,
      title: "Rumah Klasik",
      category: "Design",
      image: "/desain rumah/rumah klasik 1.png",
      description: "Desain rumah klasik dengan sentuhan elegan dan mewah",
      location: "Yogyakarta",
      year: "2024",
      slug: "rumah-klasik",
    },
    {
      id: 11,
      title: "Renovasi Toko",
      category: "Kontraktor",
      image: "/proses pembangunan/renovasi toko bandung.png",
      description: "Renovasi toko dengan desain yang menarik dan fungsional",
      location: "Bandung",
      year: "2023",
      slug: "renovasi-toko",
    },
  ];

  return { projects };
}

export function useProjectFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Kontraktor",
    "Design",
    "Renovasi",
    "Kelola Properti",
  ];

  const filterProjects = (projects: GalleryProject[], itemsPerPage = 9) => {
    const filteredProjects = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filteredProjects.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return {
      filteredProjects,
      currentProjects,
      totalPages,
      currentPage,
    };
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    categories,
    filterProjects,
  };
}
