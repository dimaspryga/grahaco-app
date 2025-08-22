"use client"

export interface Stat {
  key: string
  target: number
  label: string
  description: string
}

export function useStatsData() {
  const stats: Stat[] = [
    {
      key: "clients",
      target: 51,
      label: "Klien Konsultan",
      description: "Lebih dari 50 klien telah mempercayakan konsultasi hunian mereka kepada Grahaco.",
    },
    {
      key: "designs",
      target: 12,
      label: "Desain Rumah",
      description:
        "Kami telah menyelesaikan lebih dari 12 desain rumah yang disesuaikan dengan kebutuhan dan gaya hidup klien.",
    },
    {
      key: "projects",
      target: 100,
      label: "Proyek Konstruksi",
      description:
        "Grahaco berhasil menuntaskan lebih dari 100 proyek konstruksi dengan berbagai skala, tepat waktu, dan sesuai harapan.",
    },
  ]

  return { stats }
}
