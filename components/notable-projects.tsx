"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NotableProjects() {
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(siteConfig.projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = siteConfig.projects.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Notable Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentProjects.map((project, index) => (
            <Card 
              key={startIndex + index}
              className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800"
            >
              <CardContent className="pt-6">
                <div className="mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between items-start gap-4">
                    <div className="font-semibold">{project.name}</div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{project.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

