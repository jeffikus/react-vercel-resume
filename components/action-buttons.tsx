import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"
import { SocialIcons } from "./social-icons"

export function ActionButtons() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="default">
              <a 
                href={siteConfig.contact.website}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit My Website
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a 
                href={siteConfig.contact.contactPage}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
          <SocialIcons />
        </div>
      </CardContent>
    </Card>
  )
}

