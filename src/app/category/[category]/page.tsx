import React from 'react'
import { useParams } from 'next/navigation'
import CreatorGrid from '@/components/creator/CreatorGrid'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Créateurs en {category}</h1>
      <CreatorGrid />
    </div>
  )
}