import { redirect } from 'next/navigation'
import { siteConfig } from '@/config/site'

export async function GET() {
  console.log('Redirecting to:', siteConfig.roles.primary.resumeUrl)
  redirect(siteConfig.roles.primary.resumeUrl)
} 