import { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'

export const metadata: Metadata = {
  title: 'Jeffrey Pearce - Engineering Manager & Frontend Developer',
  description: 'Professional portfolio of Jeffrey Pearce, experienced Engineering Manager and Frontend Developer based in Charlotte, NC.',
}

export default function Page() {
  return <LandingPage />
}

