"use client"

import { useState, useEffect } from "react"

export interface Package {
  id: string
  title: string
  price: string
  features: string[]
}

export function usePackagesData() {
  const packages: Package[] = [
    {
      id: "basic",
      title: "Paket Basic",
      price: "4 Juta/m²",
      features: [
        "Struktur beton bertulang besi polos 10, begel polos 6",
        "Pondasi batu kali/ kumbung",
        "Dinding bata ringan, eg Blesscon",
        "Lantai utama keramik 50x50, eg Milan",
        "Lantai kamar mandi keramik 40 x 40, eg Milan",
        "Dinding kamar mandi keramik 20 x 40, eg Milan",
        "Plafon gypsum 9mm, eg Aplus, rangka hollow 20x40",
        "Rangka atap galvalum C.75.75, eg Kencana",
        "Penutup atap genteng beton",
        "Kusen aluminium 3 inch, eg Dacon",
        "Daun pintu baja urban, eg Fortress/ Pintu multiplek finish duco",
        "Pintu kamar mandi PVC, eg Optimus",
        "Closet, eg Tidal",
        "Hand shower, eg Tidy",
        "Cat interior, eg Nippon",
        "Cat exterior & waterproof, eg Nippon & AM",
        "Lampu, eg In Lite",
        "Saklar, eg Broco",
      ],
    },
    {
      id: "standard",
      title: "Paket Standard",
      price: "4,5 Juta/m²",
      features: [
        "Struktur beton bertulang besi polos 10, begel polos 6",
        "Pondasi batu kumbung & cakar ayam 60x60",
        "Dinding bata ringan, eg Bricon",
        "Lantai utama keramik 60x60, eg Milan",
        "Lantai kamar mandi keramik 50x50, eg Milan",
        "Dinding kamar mandi keramik 25x50, eg Milan",
        "Plafon gypsum 9mm, eg Aplus, rangka hollow 20x40",
        "Rangka atap galvalum C.75.75, eg Kencana",
        "Penutup atap genteng, eg Good Year/ UPVC single layer",
        "Kusen aluminium 4 inch, eg Dacon",
        "Daun pintu baja urban, eg Fortress/ Pintu HMR finish duco",
        "Pintu kamar mandi PVC, eg Eden",
        "Closet, eg American Standard",
        "Hand shower, eg Oulu",
        "Cat interior, eg Catylac",
        "Cat exterior & waterproof, eg Catylac & AM",
        "Lampu, eg In Lite",
        "Saklar, eg Broco",
      ],
    },
    {
      id: "premium",
      title: "Paket Premium",
      price: "5 Juta/m²",
      features: [
        "Struktur beton bertulang besi polos 12, begel polos 6",
        "Pondasi batu kali & cakar ayam",
        "Dinding bata ringan, eg Citicon",
        "Lantai utama granit 60x60, eg Durafloor",
        "Lantai kamar mandi granit 60x60, eg DBS",
        "Dinding kamar mandi granit 60x60, eg DBS",
        "Plafon gypsum 9mm, eg Knauf, rangka hollow 20x40",
        "Rangka atap galvalum C.75.85, eg Kencana",
        "Penutup atap genteng, eg Good Year/ UPVC single layer",
        "Kusen aluminium 4 inch, eg Dacon",
        "Daun pintu baja urban, eg Fortress/ Pintu mahoni solid finish duco",
        "Pintu kamar mandi PVC, eg Tidy",
        "Closet, eg American Standard",
        "Hand shower, eg American Standard",
        "Cat interior, eg Catylac",
        "Cat exterior & waterproof, eg Catylac & AM",
        "Lampu, eg In Lite",
        "Saklar, eg Panasonic",
      ],
    },
    {
      id: "luxury",
      title: "Paket Luxury",
      price: "up to 6 Juta/m²",
      features: [
        "Struktur beton bertulang besi ulir 13, begel polos 8",
        "Pondasi batu kali & cakar ayam & strauss",
        "Dinding bata ringan, eg Citicon",
        "Lantai utama granit 60x60, eg DBS",
        "Lantai kamar mandi granit 60x60, eg DBS",
        "Dinding kamar mandi granit 60x60, eg DBS",
        "Plafon gypsum 9mm, eg Knauf, rangka hollow 40x40 & 20X40",
        "Rangka atap galvalum C.80.75, eg Kencana",
        "Penutup atap genteng, eg Kanmuri",
        "Kusen aluminium 4 inch, eg Alexindo",
        "Daun pintu baja prime, eg Fortress/ Pintu jati solid finish duco",
        "Pintu kamar mandi aluminium, eg SPlus",
        "Closet, eg Toto",
        "Hand shower, eg Toto",
        "Cat interior, eg Jotun",
        "Cat exterior & waterproof, eg Jotun & AM",
        "Lampu, eg Philips",
        "Saklar, eg Schneider",
      ],
    },
  ]

  return { packages }
}

export function usePackageNavigation(packages: Package[]) {
  const [activePackage, setActivePackage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = packages.map((_, index) => document.getElementById(`package-${index}`))

      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActivePackage(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [packages])

  const scrollToPackage = (index: number) => {
    setActivePackage(index)
    document.getElementById(`package-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return {
    activePackage,
    setActivePackage,
    scrollToPackage,
  }
}
