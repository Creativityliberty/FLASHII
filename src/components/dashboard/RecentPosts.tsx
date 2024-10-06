import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle } from 'lucide-react'

interface Post {
  id: number
  creator: string
  avatar: string
  content: string
  likes: number
  comments: number
}

interface RecentPostsProps {
  posts: Post[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Publications Récentes</CardTitle>
      </CardHeader>
      <CardContent>
        {posts.map((post) => (
          <div key={post.id} className="mb-6 last:mb-0">
            <div className="flex items-center mb-2">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.avatar} alt={post.creator} />
                <AvatarFallback>{post.creator[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{post.creator}</h3>
                <p className="text-sm text-gray-500">Il y a 2 heures</p>
              </div>
            </div>
            <p className="mb-2">{post.content}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Heart className="h-4 w-4 mr-1" /> {post.likes}
              </span>
              <span className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}