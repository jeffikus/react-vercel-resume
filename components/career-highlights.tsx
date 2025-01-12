import { siteConfig } from "@/config/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CareerHighlights() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Career Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {siteConfig.careerHighlights.map((highlight, index) => (
            <Card 
              key={index} 
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
      </CardContent>
    </Card>
  )
} 