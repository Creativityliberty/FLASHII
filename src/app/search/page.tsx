import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const creators = [
  { id: 1, name: "Aminata Diallo", category: "Musique", image: "/placeholder.svg?height=200&width=200", followers: 10000 },
  { id: 2, name: "Kofi Anan", category: "Art", image: "/placeholder.svg?height=200&width=200", followers: 5000 },
]

const posts = [
  { id: 1, title: "Nouveau single en préparation", creator: "Aminata Diallo", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "Vernissage de ma nouvelle exposition", creator: "Kofi Anan", image: "/placeholder.svg?height=300&width=300" },
]

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/flash-africa-logo.png" alt="Flash Africa Logo" width={120} height={40} />
          </Link>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Rechercher..." className="w-64" />
            <Button>Rechercher</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Résultats de recherche</h1>

        <Tabs defaultValue="creators">
          <TabsList>
            <TabsTrigger value="creators">Créateurs</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
          </TabsList>
          <TabsContent value="creators">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator) => (
                <Card key={creator.id}>
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
              ))}
            </div>
          </TabsContent>
          <TabsContent value="posts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-0">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <CardTitle className="mb-2">{post.title}</CardTitle>
                      <p className="text-gray-500 mb-4">Par {post.creator}</p>
                      <Button className="w-full">Voir le post</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}