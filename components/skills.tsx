import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export function Skills() {
  return (
    <Card className="mt-8 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {siteConfig.skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="transition-all duration-200 ease-in-out hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

