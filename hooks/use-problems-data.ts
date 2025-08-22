"use client"

import { AlertTriangle, Clock, DollarSign, Home, Users, Eye, Palette, Calculator, Shield } from "lucide-react"

export interface Problem {
  icon: any
  text: string
}

export function useProblemsData() {
  const problems: Problem[] = [
    {
      icon: AlertTriangle,
      text: "Bingung harus mulai dari mana?",
    },
    {
      icon: DollarSign,
      text: "Takut biaya membengkak dan pembayaran terasa memberatkan?",
    },
    {
      icon: Home,
      text: "Rumah jadi panas, gelap, dan tidak nyaman setelah dibangun?",
    },
    {
      icon: Clock,
      text: "Khawatir proyek molor dari jadwal?",
    },
    {
      icon: Users,
      text: "Capek mengurus semua detail sendiri?",
    },
    {
      icon: Shield,
      text: "Takut ditipu atau ditinggal kontraktor di tengah jalan?",
    },
    {
      icon: Palette,
      text: "Desain tidak sesuai harapan?",
    },
    {
      icon: Calculator,
      text: "Budget tidak bisa menyesuaikan kebutuhan?",
    },
    {
      icon: Eye,
      text: "Tidak punya waktu untuk mengawasi proyek?",
    },
  ]

  return { problems }
}
