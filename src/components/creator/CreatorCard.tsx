import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Creator {
  id: number
  name: string
  category: string
  image: string
  followers: number
}

interface CreatorCardProps {
  creator: Creator
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Image src={creator.image} alt={creator.name} width={400} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
          <CardTitle className="mb-2">{creator.name}</CardTitle>
          <p className="text-gray-500 mb-2">{creator.category}</p>
          <p className="text-sm text-gray-400 mb-4">{creator.followers.toLocaleString()} abonnés</p>
          <Button className="w-full">Soutenir</Button>
        </div>
      </CardContent>
    </Card>
  )
}