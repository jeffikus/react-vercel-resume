"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const sections = [
  { id: "about", label: "About" },
  { id: "roles", label: "Roles" },
  { id: "skills", label: "Skills" },
  { id: "employment", label: "Employment" },
  { id: "highlights", label: "Highlights" },
  { id: "projects", label: "Projects" },
  { id: "references", label: "References" }
]

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px"
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    const navHeight = 80 // Approximate height of the nav bar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex gap-4 overflow-x-auto py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
              activeSection === id ? "text-primary" : "text-muted-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
} 