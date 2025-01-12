"use client"

import { Header } from './header'
import { Hero } from './hero'
import { RoleColumns } from './role-columns'
import { EmploymentHistory } from './employment-history'
import { Skills } from './skills'
import { NotableProjects } from './notable-projects'
import { References } from './references'
import { ActionButtons } from './action-buttons'
import { Footer } from './footer'
import { AnimatedSection } from './animated-section'
import { CareerHighlights } from './career-highlights'
import { SectionNav } from './section-nav'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'

function LoadingCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-[200px]" />
      <Skeleton className="h-32 w-full" />
    </div>
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <SectionNav />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="about">
            <Hero />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="roles">
            <RoleColumns />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="skills">
            <Skills />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="employment">
            <EmploymentHistory />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="highlights">
            <CareerHighlights />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="projects">
            <NotableProjects />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection id="references">
            <References />
          </AnimatedSection>
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <AnimatedSection>
            <ActionButtons />
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

