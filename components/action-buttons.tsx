import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"
import { SocialIcons } from "./social-icons"

export function ActionButtons() {
  return (
    <Card className="mt-8 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-200 bg-neutral-50 dark:bg-neutral-900 shadow-md">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild variant="default" className="w-full sm:w-auto">
              <a 
                href={siteConfig.contact.website}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit My Website
              </a>
            </Button>
            <Button asChild variant="default" className="w-full sm:w-auto">
              <a href={siteConfig.contact.contactPage}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
          <div className="mt-4 sm:mt-0">
            <SocialIcons />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

