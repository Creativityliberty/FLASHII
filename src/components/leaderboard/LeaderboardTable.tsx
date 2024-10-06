import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Creator {
  id: number
  name: string
  category: string
  followers: number
  revenue: number
  avatar: string
}

interface LeaderboardTableProps {
  creators: Creator[]
  selectedCategory: string
  selectedPeriod: string
}

export default function LeaderboardTable({ creators, selectedCategory, selectedPeriod }: LeaderboardTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Créateurs {selectedCategory !== "Toutes" ? `en ${selectedCategory}` : ""} - {selectedPeriod}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rang</TableHead>
              <TableHead>Créateur</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-right">Abonnés</TableHead>
              <TableHead className="text-right">Revenus</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {creators.map((creator, index) => (
              <TableRow key={creator.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={creator.avatar} />
                      <AvatarFallback>{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{creator.name}</span>
                  </div>
                </TableCell>
                <TableCell>{creator.category}</TableCell>
                <TableCell className="text-right">{creator.followers.toLocaleString()}</TableCell>
                <TableCell className="text-right">{creator.revenue.toLocaleString()} €</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" asChild>
                    <Link href={`/creator/${creator.id}`}>Voir le profil</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}