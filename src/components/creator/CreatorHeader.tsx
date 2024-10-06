import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CreatorHeaderProps {
  creator: {
    name: string
    username: string
    bio: string
    followers: number
    posts: number
    likes: number
    avatar: string
    banner: string
  }
}

export default function CreatorHeader({ creator }: CreatorHeaderProps) {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (
    <header>
      <div className="relative h-64 bg-gray-300">
        <Image src={creator.banner} alt="Banner" layout="fill" objectFit="cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback>{creator.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 text-white">
              <h1 className="text-3xl font-bold">{creator.name}</h1>
              <p className="text-xl">{creator.username}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button onClick={handleSubscribe} size="lg">
              {isSubscribed ? "Se désabonner" : "S'abonner"}
            </Button>
          </div>
        </div>
        <p className="mt-4 text-lg text-white">{creator.bio}</p>
        <div className="mt-6 flex space-x-8">
          <div>
            <span className="text-2xl font-bold text-white">{creator.followers.toLocaleString()}</span>
            <span className="ml-1 text-gray-300">Abonnés</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">{creator.posts.toLocaleString()}</span>
            <span className="ml-1 text-gray-300">Posts</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">{creator.likes.toLocaleString()}</span>
            <span className="ml-1 text-gray-300">Likes</span>
          </div>
        </div>
      </div>
    </header>
  )
}