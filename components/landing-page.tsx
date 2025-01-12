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

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <RoleColumns />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <EmploymentHistory />
        </AnimatedSection>
        <AnimatedSection>
          <CareerHighlights />
        </AnimatedSection>
        <AnimatedSection>
          <NotableProjects />
        </AnimatedSection>
        <AnimatedSection>
          <References />
        </AnimatedSection>
        <AnimatedSection>
          <ActionButtons />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

