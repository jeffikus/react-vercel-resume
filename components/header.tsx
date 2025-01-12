import { ThemeToggle } from './theme-toggle'
import { siteConfig } from '@/config/site'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-poppins">{siteConfig.name}</h1>
          <p className="text-lg font-poppins">{siteConfig.location}</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

