import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <Card className="mt-8 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          {siteConfig.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <p><strong>Email:</strong> {siteConfig.contact.email}</p>
          <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
        </div>
      </CardContent>
    </Card>
  )
}

