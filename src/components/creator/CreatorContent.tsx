import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Post {
  id: number
  type: string
  title: string
  image?: string
  thumbnail?: string
  content?: string
  likes: number
  comments: number
}

interface CreatorContentProps {
  creator: {
    name: string
  }
  posts: Post[]
}

export default function CreatorContent({ creator, posts }: CreatorContentProps) {
  return (
    <Tabs defaultValue="posts">
      <TabsList>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="videos">Vidéos</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="mt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id}>
              {post.image && (
                <Image src={post.image} alt={post.title} width={400} height={200} className="rounded-t-lg" />
              )}
              {post.thumbnail && (
                <div className="relative">
                  <Image src={post.thumbnail} alt={post.title} width={400} height={200} className="rounded-t-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.5 5.5L13.5 10L6.5 14.5V5.5Z" />
                    </svg>
                  </div>
                </div>
              )}
              <CardContent>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                {post.content && <p className="mt-2 text-gray-600">{post.content}</p>}
              </CardContent>
              <CardFooter className="flex justify-between">
                <span>{post.likes.toLocaleString()} likes</span>
                <span>{post.comments.toLocaleString()} commentaires</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="photos">
        <p>Contenu des photos à venir...</p>
      </TabsContent>
      <TabsContent value="videos">
        <p>Contenu des vidéos à venir...</p>
      </TabsContent>
    </Tabs>
  )
}