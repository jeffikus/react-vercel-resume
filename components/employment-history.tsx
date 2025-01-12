import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

function calculateDuration(roles: typeof siteConfig.employmentHistory[0]['roles']) {
  // Sort roles by start date to get the earliest and latest dates
  const periods = roles.map(role => {
    const [start, end] = role.period.split(" - ").map(date => new Date(date))
    return { start, end }
  }).sort((a, b) => a.start.getTime() - b.start.getTime())

  if (periods.length === 0) return { duration: "", yearRange: "" }

  const earliestStart = periods[0].start
  const latestEnd = periods[periods.length - 1].end

  const years = latestEnd.getFullYear() - earliestStart.getFullYear()
  const months = latestEnd.getMonth() - earliestStart.getMonth()
  
  let duration = ""
  if (years > 0) {
    duration += `${years} year${years > 1 ? 's' : ''}`
  }
  if (months > 0) {
    if (duration) duration += " "
    duration += `${months} month${months > 1 ? 's' : ''}`
  }

  const yearRange = `${earliestStart.getFullYear()}–${latestEnd.getFullYear()}`

  return {
    duration: duration ? `(${duration})` : "",
    yearRange
  }
}

export function EmploymentHistory() {
  const { employmentHistory } = siteConfig
  
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Employment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {employmentHistory.map((company, index) => (
            <Card 
              key={index} 
              className="rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800"
            >
              <CardContent className="pt-6">
                <div className="mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between items-center gap-4">
                    <div className="font-semibold text-lg">{company.company}</div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{calculateDuration(company.roles).yearRange}</div>
                      <div>{calculateDuration(company.roles).duration}</div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {company.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm">
                      <div className="font-medium">{role.title}</div>
                      <div className="text-muted-foreground">{role.period}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

