"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function References() {
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(siteConfig.references.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentReferences = siteConfig.references.slice(startIndex, startIndex + itemsPerPage)

  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 pb-6">
        <CardTitle>References</CardTitle>
        <a 
          href={siteConfig.linkedIn.recommendations}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
        >
          Read more on LinkedIn
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentReferences.map((reference, index) => (
            <Card 
              key={startIndex + index}
              className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800"
            >
              <CardContent className="p-6">
                <div className="mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="font-semibold">{reference.name}</div>
                  <div className="text-sm text-muted-foreground">{reference.title}</div>
                </div>
                <blockquote className="text-muted-foreground whitespace-pre-line text-sm">
                  "{reference.message}"
                </blockquote>
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

