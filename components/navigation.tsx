
"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <>
      {/* Right navigation replacing scrollbar */}
      <div className="fixed top-1/4 right-4 z-50 h-1/2">
        <div 
          className="relative h-full" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation dots */}
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                  activeSection === section.id
                    ? "bg-primary border-primary"
                    : "bg-background border-primary hover:bg-primary/20"
                }`}
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Label */}
                <div 
                  className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                  }`}
                >
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                    {section.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
