import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { siteConfig } from "@/config/site"

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Twitter className="h-6 w-6" />
        <span className="sr-only">Twitter</span>
      </a>
      <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Facebook className="h-6 w-6" />
        <span className="sr-only">Facebook</span>
      </a>
      <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
      </a>
    </div>
  )
} 