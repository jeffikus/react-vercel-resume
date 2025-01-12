import { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { siteConfig } from '@/config/site'
import { CareerHighlights } from "@/components/career-highlights"

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
}

export default function Page() {
  return <LandingPage />
}

