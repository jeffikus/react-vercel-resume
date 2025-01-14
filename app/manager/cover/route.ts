import { redirect } from 'next/navigation'
import { siteConfig } from '@/config/site'

export async function GET() {
  console.log('Redirecting to:', siteConfig.roles.primary.coverLetterUrl)
  redirect(siteConfig.roles.primary.coverLetterUrl)
} 