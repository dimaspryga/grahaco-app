"use client"

import { Award, Users, Clock, Shield } from "lucide-react"

export interface Value {
  icon: any
  title: string
  description: string
}

export function useValuesData() {
  const values: Value[] = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Standar kualitas tinggi dalam setiap proyek dengan sertifikasi internasional.",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Didukung oleh tim ahli berpengalaman dengan keahlian multidisiplin.",
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Komitmen menyelesaikan proyek sesuai timeline yang telah disepakati.",
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description: "Kepercayaan klien adalah prioritas utama dengan track record yang solid.",
    },
  ]

  return { values }
}
