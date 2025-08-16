export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  location: string
  year: string
  client: string
  area: string
  duration: string
  status: string
  slug: string
  gallery: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Villa Modern Minimalis",
    description: "Desain villa modern minimalis dengan konsep open space dan integrasi dengan alam sekitar.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residential",
    location: "Bandung, Jawa Barat",
    year: "2024",
    client: "PT. Properti Indah",
    area: "450 m²",
    duration: "8 bulan",
    status: "Completed",
    slug: "villa-modern-minimalis",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Desain arsitektur modern minimalis",
      "Material berkualitas tinggi",
      "Smart home system",
      "Taman landscape terintegrasi",
      "Kolam renang infinity",
    ],
    challenges: [
      "Kontur tanah yang menantang",
      "Integrasi dengan lingkungan sekitar",
      "Optimalisasi pencahayaan alami",
    ],
    solutions: ["Desain bertingkat mengikuti kontur", "Penggunaan material lokal", "Skylight dan jendela besar"],
  },
  {
    id: 2,
    title: "Kantor Corporate Modern",
    description: "Pembangunan kantor corporate dengan desain modern dan fasilitas lengkap untuk 500 karyawan.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
    location: "Jakarta Selatan",
    year: "2023",
    client: "PT. Teknologi Maju",
    area: "2,500 m²",
    duration: "12 bulan",
    status: "Completed",
    slug: "kantor-corporate-modern",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Fasad kaca modern",
      "Sistem HVAC efisien",
      "Ruang meeting berteknologi tinggi",
      "Cafeteria dan area rekreasi",
      "Parking basement 3 lantai",
    ],
    challenges: ["Lahan terbatas di area CBD", "Regulasi bangunan tinggi", "Akses transportasi publik"],
    solutions: ["Desain vertikal optimal", "Koordinasi dengan pemerintah", "Integrasi dengan stasiun MRT"],
  },
  {
    id: 3,
    title: "Pabrik Manufaktur Ramah Lingkungan",
    description: "Konstruksi pabrik manufaktur dengan standar green building dan teknologi ramah lingkungan.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industrial",
    location: "Karawang, Jawa Barat",
    year: "2023",
    client: "PT. Industri Hijau",
    area: "5,000 m²",
    duration: "18 bulan",
    status: "Completed",
    slug: "pabrik-manufaktur-ramah-lingkungan",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Sertifikasi green building",
      "Panel surya 500 kW",
      "Sistem pengolahan limbah",
      "Ventilasi alami optimal",
      "Material ramah lingkungan",
    ],
    challenges: ["Standar lingkungan ketat", "Integrasi teknologi hijau", "Efisiensi energi maksimal"],
    solutions: ["Konsultasi ahli lingkungan", "Teknologi terdepan", "Monitoring sistem otomatis"],
  },
  {
    id: 4,
    title: "Jembatan Penghubung Kota",
    description: "Pembangunan jembatan penghubung antar kota dengan desain ikonik dan teknologi konstruksi modern.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Infrastructure",
    location: "Surabaya, Jawa Timur",
    year: "2024",
    client: "Pemerintah Kota Surabaya",
    area: "1,200 m panjang",
    duration: "24 bulan",
    status: "In Progress",
    slug: "jembatan-penghubung-kota",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Desain cable-stayed modern",
      "Kapasitas 4 lajur kendaraan",
      "Jalur pejalan kaki dan sepeda",
      "Sistem pencahayaan LED",
      "Monitoring struktur real-time",
    ],
    challenges: ["Kondisi tanah lunak", "Lalu lintas sungai aktif", "Cuaca ekstrem"],
    solutions: ["Fondasi tiang pancang dalam", "Konstruksi bertahap", "Penjadwalan cuaca optimal"],
  },
  {
    id: 5,
    title: "Apartemen Luxury Waterfront",
    description: "Pembangunan apartemen mewah di tepi pantai dengan pemandangan laut dan fasilitas resort.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residential",
    location: "Bali",
    year: "2024",
    client: "PT. Resort Development",
    area: "15,000 m²",
    duration: "30 bulan",
    status: "In Progress",
    slug: "apartemen-luxury-waterfront",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "200 unit apartemen mewah",
      "Infinity pool menghadap laut",
      "Private beach access",
      "Spa dan fitness center",
      "Concierge service 24/7",
    ],
    challenges: ["Konstruksi di area pantai", "Perlindungan dari korosi", "Regulasi lingkungan ketat"],
    solutions: ["Material tahan korosi", "Sistem drainase khusus", "Koordinasi dengan KLHK"],
  },
  {
    id: 6,
    title: "Mall Entertainment Center",
    description: "Pembangunan pusat perbelanjaan dan hiburan dengan konsep family entertainment center.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
    location: "Medan, Sumatera Utara",
    year: "2023",
    client: "PT. Retail Nusantara",
    area: "8,000 m²",
    duration: "20 bulan",
    status: "Completed",
    slug: "mall-entertainment-center",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "150 tenant retail dan F&B",
      "Cinema dengan 8 studio",
      "Kids playground indoor",
      "Food court dengan 30 tenant",
      "Parking 1,000 kendaraan",
    ],
    challenges: ["Integrasi berbagai fungsi", "Sistem keamanan kompleks", "Manajemen crowd control"],
    solutions: ["Zoning yang efektif", "CCTV dan access control", "Desain sirkulasi optimal"],
  },
]
