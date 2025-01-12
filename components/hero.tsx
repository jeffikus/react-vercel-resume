"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { SocialIcons } from "./social-icons"

export function Hero() {
  return (
    <Card className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-200 bg-neutral-50 dark:bg-neutral-900 shadow-md">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="mb-4">
            {siteConfig.bio}
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
              <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

