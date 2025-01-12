import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <p className="text-xs text-center text-secondary-foreground">
          {siteConfig.footer.credits}
        </p>
      </div>
    </footer>
  )
}

