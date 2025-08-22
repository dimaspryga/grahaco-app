"use client"

import { useState, useEffect } from "react"

export function useNavbarScroll() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      const servicesSection = document.getElementById("services")
      const footer = document.querySelector("footer")

      if (servicesSection && footer) {
        const servicesSectionTop = servicesSection.offsetTop
        const footerTop = footer.offsetTop

        if (currentScrollY >= servicesSectionTop && currentScrollY < footerTop) {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
        } else {
          // Always show navbar before services section or at footer
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return { isVisible }
}
