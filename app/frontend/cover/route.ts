import { redirect } from 'next/navigation'
import { siteConfig } from '@/config/site'

export async function GET() {
  console.log('Redirecting to:', siteConfig.roles.secondary.coverLetterUrl)
  redirect(siteConfig.roles.secondary.coverLetterUrl)
} 