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
  
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-x-auto">
        <ul className="flex items-center h-14 gap-4 min-w-max">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  activeSection === section.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
} 