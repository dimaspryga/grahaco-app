"use client"

import {
  Palette,
  MessageCircle,
  Users,
  FileText,
  Package,
  Calculator,
  DollarSign,
  Shield,
  CreditCard,
  Camera,
  Cable as Cube,
} from "lucide-react"

export interface Solution {
  icon: any
  title: string
  description: string
}

export function useSolutionsData() {
  const solutions: Solution[] = [
    {
      icon: Palette,
      title: "Pendampingan Material",
      description: "Konsultasi pemilihan material finishing hingga custom furnitur sesuai desain dan ukuran rumah.",
    },
    {
      icon: MessageCircle,
      title: "Free Konsultasi",
      description: "Konsultasi gratis, online maupun offline, sampai desain rumah sesuai dengan keinginan Anda.",
    },
    {
      icon: Users,
      title: "Tenaga Profesional Berpengalaman",
      description: "Tim ahli siap memberikan solusi terbaik di setiap tahap pembangunan.",
    },
    {
      icon: FileText,
      title: "Report Progres Rutin",
      description: "Update laporan mingguan hingga proyek selesai, transparan dan terukur.",
    },
    {
      icon: Package,
      title: "Katalog Spesifikasi Material",
      description: "Detail material yang digunakan jelas dan transparan untuk menjamin kualitas.",
    },
    {
      icon: Calculator,
      title: "Rencana Anggaran Biaya (RAB)",
      description: "Estimasi biaya pembangunan disusun secara detail dan akurat.",
    },
    {
      icon: DollarSign,
      title: "Harga All In",
      description: "Harga sudah termasuk material, tenaga kerja, hingga bantuan pemindahan barang.",
    },
    {
      icon: Shield,
      title: "Biaya Transparan",
      description: "Semua biaya dijelaskan sejak awal, tanpa ada biaya tersembunyi.",
    },
    {
      icon: Shield,
      title: "Garansi Pekerjaan",
      description: "Tersedia garansi pemeliharaan setelah proyek selesai.",
    },
    {
      icon: CreditCard,
      title: "Pembayaran Fleksibel",
      description: "Skema pembayaran bisa dengan termin progres atau cicilan bulanan.",
    },
    {
      icon: Camera,
      title: "CCTV Proyek 24 Jam",
      description: "Pengawasan proyek real-time yang bisa diakses langsung oleh klien.",
    },
    {
      icon: Cube,
      title: "3D Render Desain",
      description: "Visualisasi desain rumah secara realistis sebelum pembangunan dimulai.",
    },
  ]

  return { solutions }
}
