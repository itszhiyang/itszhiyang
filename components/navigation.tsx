"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPermanentlyOpen, setIsPermanentlyOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMouseEnter = () => {
    if (!isPermanentlyOpen) {
      setIsMenuOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isPermanentlyOpen) {
      setIsMenuOpen(false)
    }
  }

  const handleClick = () => {
    setIsPermanentlyOpen(!isPermanentlyOpen)
    setIsMenuOpen(!isPermanentlyOpen)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          onClick={handleClick}
          className="w-12 h-12 bg-navy-900/20 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-navy-900/30 transition-all duration-200"
        >
          <div className="flex flex-col space-y-1">
            <div className="w-5 h-1 bg-white rounded-full"></div>
            <div className="w-5 h-1 bg-white rounded-full"></div>
            <div className="w-5 h-1 bg-white rounded-full"></div>
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-14 right-0 w-48 bg-navy-900/90 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-xl">
            <div className="font-work-sans font-bold text-sm text-gold-400 mb-3">Portfolio</div>

            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`justify-start text-left font-medium py-2 px-3 text-sm hover:bg-white/10 ${
                    activeSection === item.href.substring(1)
                      ? "text-gold-400 bg-white/5"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
