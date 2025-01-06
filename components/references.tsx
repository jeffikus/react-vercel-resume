import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const references = [
  {
    name: "John Doe",
    title: "Engineering Director",
    message: "Jeffrey is an exceptional leader who consistently delivers results.",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    message: "Working with Jeffrey was a pleasure. His technical expertise and leadership skills are outstanding.",
    avatar: "/placeholder-avatar.jpg",
  },
  // Add more references as needed
]

export function References() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>References</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {references.map((reference, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={reference.avatar}
                    alt={reference.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold">{reference.name}</h4>
                    <p className="text-sm text-muted-foreground">{reference.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm">&quot;{reference.message}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

