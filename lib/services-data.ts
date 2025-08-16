export interface ServiceDetail {
  id: number
  title: string
  description: string
  image: string
  category: string
  price: string
  features: string[]
  slug: string
  detailedDescription: string
  process: string[]
  benefits: string[]
  duration: string
  warranty: string
  gallery: string[]
  testimonials: {
    name: string
    role: string
    content: string
    rating: number
  }[]
}

const kontraktorkServices: ServiceDetail[] = [
  {
    id: 1,
    title: "Konstruksi Rumah Tinggal",
    description:
      "Pembangunan rumah tinggal dengan standar kualitas tinggi dan desain sesuai kebutuhan keluarga modern.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Residential",
    price: "Mulai dari Rp 15 juta/m²",
    features: ["Struktur Beton Bertulang", "Material Berkualitas", "Garansi 5 Tahun", "Project Management"],
    slug: "konstruksi-rumah-tinggal",
    detailedDescription:
      "Layanan konstruksi rumah tinggal kami menghadirkan solusi pembangunan yang komprehensif dengan standar kualitas internasional. Kami menggunakan teknologi konstruksi terdepan dan material berkualitas tinggi untuk memastikan rumah impian Anda terwujud dengan sempurna. Tim ahli kami berpengalaman dalam menangani berbagai jenis proyek residensial, mulai dari rumah minimalis modern hingga rumah klasik dengan detail arsitektur yang rumit.",
    process: [
      "Konsultasi dan Survey Lokasi",
      "Desain dan Perencanaan Detail",
      "Persiapan Dokumen dan Izin",
      "Pelaksanaan Konstruksi",
      "Quality Control dan Inspeksi",
      "Finishing dan Handover",
    ],
    benefits: [
      "Kualitas konstruksi terjamin dengan standar SNI",
      "Garansi struktur hingga 5 tahun",
      "Project management profesional",
      "Material berkualitas tinggi dan terpilih",
      "Timeline yang jelas dan terpantau",
      "After sales service yang responsif",
    ],
    duration: "6-12 bulan (tergantung luas bangunan)",
    warranty: "Garansi struktur 5 tahun, finishing 1 tahun",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Pemilik Rumah di Jakarta Selatan",
        content:
          "Sangat puas dengan hasil konstruksi rumah dari Grahaco. Kualitas bangunan sangat baik dan selesai tepat waktu.",
        rating: 5,
      },
      {
        name: "Sari Dewi",
        role: "Pemilik Rumah di Tangerang",
        content: "Tim Grahaco sangat profesional dan komunikatif. Hasil akhir melebihi ekspektasi kami.",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Renovasi & Remodeling",
    description: "Layanan renovasi dan remodeling untuk meningkatkan fungsi dan estetika bangunan existing.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Renovation",
    price: "Mulai dari Rp 8 juta/m²",
    features: ["Konsultasi Gratis", "3D Visualization", "Izin Renovasi", "Cleanup Service"],
    slug: "renovasi-remodeling",
    detailedDescription:
      "Transformasikan rumah lama Anda menjadi hunian modern yang fungsional dan estetis. Layanan renovasi dan remodeling kami mencakup perubahan layout, upgrade sistem MEP, modernisasi fasad, dan peningkatan efisiensi energi. Kami memahami bahwa setiap renovasi memiliki tantangan unik, oleh karena itu tim ahli kami akan melakukan assessment menyeluruh untuk memberikan solusi terbaik sesuai budget dan kebutuhan Anda.",
    process: [
      "Assessment dan Evaluasi Kondisi Existing",
      "Konsultasi Kebutuhan dan Budget",
      "Desain Renovasi dan 3D Visualization",
      "Persiapan Izin dan Dokumen",
      "Pelaksanaan Renovasi Bertahap",
      "Final Inspection dan Cleanup",
    ],
    benefits: [
      "Meningkatkan nilai properti secara signifikan",
      "Optimalisasi fungsi ruang existing",
      "Upgrade sistem keamanan dan kenyamanan",
      "Efisiensi energi yang lebih baik",
      "Desain modern sesuai tren terkini",
      "Minimal disruption selama proses renovasi",
    ],
    duration: "2-6 bulan (tergantung scope renovasi)",
    warranty: "Garansi renovasi 2 tahun",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    testimonials: [
      {
        name: "Ahmad Rizki",
        role: "Pemilik Rumah di Bekasi",
        content: "Renovasi rumah tua kami menjadi sangat modern dan fungsional. Hasilnya luar biasa!",
        rating: 5,
      },
    ],
  },
  // Add more services...
]

const desainServices: ServiceDetail[] = [
  {
    id: 1,
    title: "Desain Arsitektur Rumah",
    description: "Desain arsitektur rumah tinggal yang menggabungkan estetika modern dengan fungsionalitas optimal.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Residential",
    price: "Mulai dari Rp 150 ribu/m²",
    features: ["Gambar Kerja Lengkap", "3D Rendering", "Konsultasi Design", "Revisi Unlimited"],
    slug: "desain-arsitektur-rumah",
    detailedDescription:
      "Ciptakan rumah impian Anda dengan desain arsitektur yang memadukan keindahan estetika dan fungsionalitas optimal. Tim arsitek berpengalaman kami akan mentransformasi visi Anda menjadi desain yang detail dan komprehensif. Kami mengutamakan pendekatan holistik yang mempertimbangkan aspek lingkungan, iklim tropis Indonesia, dan gaya hidup modern untuk menciptakan hunian yang nyaman dan berkelanjutan.",
    process: [
      "Briefing dan Analisis Kebutuhan",
      "Site Analysis dan Studi Kelayakan",
      "Konsep Desain dan Sketsa Awal",
      "Pengembangan Desain Detail",
      "3D Visualization dan Presentasi",
      "Finalisasi Gambar Kerja",
    ],
    benefits: [
      "Desain yang sesuai dengan karakter dan kebutuhan",
      "Optimalisasi pencahayaan dan ventilasi alami",
      "Efisiensi ruang dan sirkulasi yang baik",
      "Integrasi teknologi smart home",
      "Konsep sustainable dan eco-friendly",
      "Nilai investasi properti yang meningkat",
    ],
    duration: "4-8 minggu (tergantung kompleksitas)",
    warranty: "Garansi desain dan revisi 6 bulan",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    testimonials: [
      {
        name: "Lisa Permata",
        role: "Pemilik Rumah di BSD",
        content: "Desain rumah dari Grahaco sangat detail dan sesuai dengan keinginan kami. Sangat profesional!",
        rating: 5,
      },
    ],
  },
  // Add more services...
]

const kelolaPropertiServices: ServiceDetail[] = [
  {
    id: 1,
    title: "Property Management",
    description: "Layanan pengelolaan properti komprehensif untuk memaksimalkan nilai investasi dan ROI Anda.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Management",
    price: "Mulai dari Rp 50 ribu/unit/bulan",
    features: ["Tenant Management", "Rent Collection", "Maintenance Service", "Financial Reporting"],
    slug: "property-management",
    detailedDescription:
      "Maksimalkan potensi investasi properti Anda dengan layanan property management profesional dari Grahaco. Kami menyediakan solusi pengelolaan properti yang komprehensif, mulai dari tenant management, maintenance, hingga financial reporting yang detail. Tim berpengalaman kami akan memastikan properti Anda selalu dalam kondisi optimal dan menghasilkan return yang maksimal dengan risiko minimal.",
    process: [
      "Property Assessment dan Valuation",
      "Marketing Strategy dan Tenant Acquisition",
      "Tenant Screening dan Contract Management",
      "Regular Maintenance dan Inspection",
      "Financial Management dan Reporting",
      "Performance Review dan Optimization",
    ],
    benefits: [
      "Okupansi rate yang tinggi dan stabil",
      "Maintenance cost yang efisien",
      "Tenant retention yang baik",
      "Transparent financial reporting",
      "Professional tenant relations",
      "Increased property value over time",
    ],
    duration: "Kontrak minimum 1 tahun",
    warranty: "Service guarantee dan performance monitoring",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    testimonials: [
      {
        name: "Robert Tanoto",
        role: "Investor Properti",
        content: "Sejak menggunakan jasa Grahaco, ROI apartemen saya meningkat 25%. Sangat puas dengan layanannya.",
        rating: 5,
      },
    ],
  },
  // Add more services...
]

export function getKontraktorkServiceBySlug(slug: string): ServiceDetail | null {
  return kontraktorkServices.find((service) => service.slug === slug) || null
}

export function getDesainServiceBySlug(slug: string): ServiceDetail | null {
  return desainServices.find((service) => service.slug === slug) || null
}

export function getKelolaPropertiServiceBySlug(slug: string): ServiceDetail | null {
  return kelolaPropertiServices.find((service) => service.slug === slug) || null
}

export function getAllKontraktorkServices(): ServiceDetail[] {
  return kontraktorkServices
}

export function getAllDesainServices(): ServiceDetail[] {
  return desainServices
}

export function getAllKelolaPropertiServices(): ServiceDetail[] {
  return kelolaPropertiServices
}
