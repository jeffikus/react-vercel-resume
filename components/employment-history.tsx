import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const employmentHistory = [
  {
    company: "Automattic",
    roles: [
      { title: "Technical Program Manager, Special Projects Team", period: "Oct 2023 - Oct 2024" },
      { title: "Engineering Manager, Theme Development Team", period: "Aug 2020 - Oct 2023" },
      { title: "Engineering Squad Lead, WordPress.com Theme Development Team", period: "Mar 2020 - Aug 2020" },
      { title: "Creative Technologist, Design Division", period: "Nov 2018 - Mar 2020" },
      { title: "Senior Software Developer, Theme Development Team", period: "Jul 2015 - Nov 2018" },
      { title: "Senior Software Developer, WooCommerce", period: "Dec 2009 - Jun 2015" },
    ],
  },
  {
    company: "White Wall Web",
    roles: [
      { title: "Analyst Developer", period: "Jan 2007 - Nov 2009" },
    ],
  },
  {
    company: "FLIXY",
    roles: [
      { title: "Technical Advisor/Consultant", period: "2015 - 2018" },
    ],
  },
]

export function EmploymentHistory() {
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

