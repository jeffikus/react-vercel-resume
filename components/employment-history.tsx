import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function EmploymentHistory() {
  const { employmentHistory } = siteConfig
  
  return (
    <Card className="mt-8 rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-neutral-800">
      <CardHeader>
        <CardTitle>Employment History</CardTitle>
      </CardHeader>
      <CardContent>
        {employmentHistory.map((company, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{company.company}</h3>
            <ul className="list-disc list-inside">
              {company.roles.map((role, roleIndex) => (
                <li key={roleIndex}>
                  {role.title} | {role.period}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

