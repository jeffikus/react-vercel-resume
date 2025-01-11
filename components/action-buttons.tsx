import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import { siteConfig } from "@/config/site"

export function ActionButtons() {
  return (
    <Card className="mt-8 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <a href={siteConfig.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Visit My Website
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={siteConfig.contact.contactPage} target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

