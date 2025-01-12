import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function RoleColumns() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      <Card className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
        <CardHeader>
          <CardTitle>{siteConfig.roles.primary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {siteConfig.roles.primary.description}
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <a href={siteConfig.roles.primary.resumeUrl} download>Download Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.roles.primary.coverLetterUrl} download>Download Cover Letter</a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
        <CardHeader>
          <CardTitle>{siteConfig.roles.secondary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {siteConfig.roles.secondary.description}
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <a href={siteConfig.roles.secondary.resumeUrl} download>Download Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.roles.secondary.coverLetterUrl} download>Download Cover Letter</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

