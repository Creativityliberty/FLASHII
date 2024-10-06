import React from 'react'
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Viewer {
  id: number
  name: string
  image: string
}

interface ViewersListProps {
  viewers: Viewer[]
  totalViewers: number
}

export default function ViewersList({ viewers, totalViewers }: ViewersListProps) {
  return (
    <>
      <CardHeader>
        <CardTitle>Spectateurs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          {viewers.map((viewer) => (
            <Avatar key={viewer.id} className="h-10 w-10">
              <AvatarImage src={viewer.image} />
              <AvatarFallback>{viewer.name[0]}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="h-10 w-10">
            <AvatarFallback>+{totalViewers - viewers.length}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </>
  )
}