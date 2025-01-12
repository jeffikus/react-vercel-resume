import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-xs text-center text-secondary-foreground">
          {siteConfig.footer.credits}
        </p>
      </div>
    </footer>
  )
}

