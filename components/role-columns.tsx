import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RoleColumns() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      <Card className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
        <CardHeader>
          <CardTitle>Engineering Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            With over a decade of experience leading high-performing, distributed teams, I bring a blend of engineering excellence,
            impactful leadership, and a commitment to empowering designers and engineers through scalable and innovative solutions.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <a href="/jeffrey-pearce-resume.pdf" download>Download Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/jeffrey-pearce-cover-letter-em.pdf" download>Download Cover Letter</a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
        <CardHeader>
          <CardTitle>Frontend Developer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            With extensive experience in frontend development, I have led and contributed to widely adopted and highly rated
            products, leveraging customer insights to inform design and implementation, consistently prioritizing user-focused solutions.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <a href="/jeffrey-pearce-resume.pdf" download>Download Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/jeffrey-pearce-cover-letter-fd.pdf" download>Download Cover Letter</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

