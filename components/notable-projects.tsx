import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { siteConfig } from "@/config/site"

export function NotableProjects() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Notable Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteConfig.projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.details}</p>
                <Button asChild variant="secondary" size="sm" className="w-full mt-auto">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

