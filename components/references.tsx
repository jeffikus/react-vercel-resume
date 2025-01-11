import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site"

export function References() {
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>References</CardTitle>
        <a 
          href="https://www.linkedin.com/in/jeffikus/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
        >
          Read more on LinkedIn
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.references.map((reference, index) => (
            <Card 
              key={index} 
              className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800"
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="font-semibold">{reference.name}</div>
                  <div className="text-sm text-muted-foreground">{reference.title}</div>
                </div>
                <blockquote className="text-muted-foreground whitespace-pre-line flex-grow">
                  "{reference.message}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

