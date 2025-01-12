"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Skills() {
  const categories = ['Languages', 'Frontend', 'Backend', 'Tools & Platforms', 'WordPress', 'Leadership']
  
  // Split categories into two arrays
  const midpoint = Math.ceil(categories.length / 2)
  const leftCategories = categories.slice(0, midpoint)
  const rightCategories = categories.slice(midpoint)

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <Accordion type="single" collapsible defaultValue={categories[0]} className="space-y-4">
              {leftCategories.map((category) => (
                <AccordionItem 
                  key={category} 
                  value={category}
                  className="border border-neutral-200 dark:border-neutral-700 rounded-lg px-6 transition-all duration-200
                    [&[data-state=open]]:bg-neutral-50 
                    [&[data-state=open]]:dark:bg-neutral-900
                    [&[data-state=open]]:shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:border-b [&[data-state=open]>div]:pb-4 [&[data-state=open]>div]:mb-4">
                    <div className="flex justify-between items-center w-full pr-4 border-neutral-200 dark:border-neutral-700">
                      <div className="font-semibold text-lg">{category}</div>
                      <div className="text-sm text-muted-foreground text-right">
                        {siteConfig.skills[category].length} skills
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {siteConfig.skills[category].map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="transition-all duration-200 ease-in-out hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div>
            <Accordion type="single" collapsible defaultValue={rightCategories[0]} className="space-y-4">
              {rightCategories.map((category) => (
                <AccordionItem 
                  key={category} 
                  value={category}
                  className="border border-neutral-200 dark:border-neutral-700 rounded-lg px-6 transition-all duration-200
                    [&[data-state=open]]:bg-neutral-50 
                    [&[data-state=open]]:dark:bg-neutral-900
                    [&[data-state=open]]:shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:border-b [&[data-state=open]>div]:pb-4 [&[data-state=open]>div]:mb-4">
                    <div className="flex justify-between items-center w-full pr-4 border-neutral-200 dark:border-neutral-700">
                      <div className="font-semibold text-lg">{category}</div>
                      <div className="text-sm text-muted-foreground text-right">
                        {siteConfig.skills[category].length} skills
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      {siteConfig.skills[category].map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="transition-all duration-200 ease-in-out hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

