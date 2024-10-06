import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, DollarSign, Users } from 'lucide-react'

interface StreamInfoProps {
  streamData: {
    title: string
    creator: string
    viewers: number
    likes: number
  }
}

export default function StreamInfo({ streamData }: StreamInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{streamData.title}</CardTitle>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-creator.jpg" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{streamData.creator}</p>
            <p className="text-sm text-gray-500">En direct maintenant</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-gray-500" />
              <span>{streamData.viewers}</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-gray-500" />
              <span>{streamData.likes}</span>
            </div>
          </div>
          <div className="space-x-2">
            <Button>
              <Heart className="mr-2 h-4 w-4" /> J'aime
            </Button>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" /> Faire un don
            </Button>
            <Button variant="secondary">S'abonner</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}