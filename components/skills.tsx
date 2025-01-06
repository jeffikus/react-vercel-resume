import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Engineering Leadership",
  "Communication",
  "Frontend Design Systems",
  "Agile Project Management",
  "SDLC",
  "Product Management",
  "Web Development",
  "JavaScript",
  "React",
  "Computer Science",
  "Cross-Functional Coordination",
  "Strategic Planning",
  "Code Review",
  "Professional Development",
  "MySQL",
  "REST API Integration",
  "PHP",
  "CSS",
  "HTML",
  "WordPress",
  "eCommerce",
  "AI Integration",
  "GitHub",
  "Continuous Integration (CI/CD)",
  "Docker",
  "Figma",
]

export function Skills() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

