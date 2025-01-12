"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function calculateDuration(roles: typeof siteConfig.employmentHistory[0]['roles']) {
  try {
    // Sort roles by start date to get the earliest and latest dates
    const periods = roles
      .map(role => {
        const [startStr, endStr] = role.period.split(" - ")
        const start = new Date(startStr)
        // Handle "Present" as end date
        const end = endStr.toLowerCase() === "present" ? new Date() : new Date(endStr)
        
        // Validate dates
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
          throw new Error("Invalid date")
        }
        
        return { start, end }
      })
      .sort((a, b) => a.start.getTime() - b.start.getTime())

    if (periods.length === 0) return { duration: "", yearRange: "" }

    const earliestStart = periods[0].start
    const latestEnd = periods[periods.length - 1].end

    const years = latestEnd.getFullYear() - earliestStart.getFullYear()
    const months = latestEnd.getMonth() - earliestStart.getMonth() + (years * 12)
    
    const finalYears = Math.floor(months / 12)
    const finalMonths = months % 12

    let duration = ""
    if (finalYears > 0) {
      duration += `${finalYears} year${finalYears > 1 ? 's' : ''}`
    }
    if (finalMonths > 0) {
      if (duration) duration += " "
      duration += `${finalMonths} month${finalMonths > 1 ? 's' : ''}`
    }

    const yearRange = `${earliestStart.getFullYear()}–${latestEnd.getFullYear() === new Date().getFullYear() ? 'Present' : latestEnd.getFullYear()}`

    return {
      duration: duration ? `(${duration})` : "",
      yearRange
    }
  } catch (error) {
    console.error("Error calculating duration:", error)
    return {
      duration: "",
      yearRange: ""
    }
  }
}

export function EmploymentHistory() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Employment History</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue={siteConfig.employmentHistory[0].company} className="space-y-4">
          {siteConfig.employmentHistory.map((company) => (
            <AccordionItem 
              key={company.company} 
              value={company.company}
              className="border border-neutral-200 dark:border-neutral-700 rounded-lg px-6 transition-all duration-200
                [&[data-state=open]]:bg-neutral-50 
                [&[data-state=open]]:dark:bg-neutral-900
                [&[data-state=open]]:shadow-md"
            >
              <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:border-b [&[data-state=open]>div]:pb-4 [&[data-state=open]>div]:mb-4">
                <div className="flex justify-between items-center w-full pr-4 border-neutral-200 dark:border-neutral-700">
                  <div className="font-semibold text-lg">{company.company}</div>
                  <div className="text-sm text-muted-foreground text-right">
                    <div>{calculateDuration(company.roles).yearRange}</div>
                    <div>{calculateDuration(company.roles).duration}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {company.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm">
                      <div className="font-medium">{role.title}</div>
                      <div className="text-muted-foreground">{role.period}</div>
                    </li>
                  ))}
                </ul>
                {company.details && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    {company.details}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

