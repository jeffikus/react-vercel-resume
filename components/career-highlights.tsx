"use client"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CareerHighlights() {
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(siteConfig.careerHighlights.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentHighlights = siteConfig.careerHighlights.slice(startIndex, endIndex)

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Career Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {currentHighlights.map((highlight, index) => (
            <Card 
              key={startIndex + index} 
              className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800"
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="font-semibold">{highlight.title}</div>
                </div>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
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