import { NextResponse } from 'next/server'

const creators = [
  { id: 1, name: "Aminata Diallo", category: "Musique", image: "/placeholder.jpg", followers: 10000 },
  { id: 2, name: "Kofi Anan", category: "Art", image: "/placeholder.jpg", followers: 5000 },
  { id: 3, name: "Fatou Ndiaye", category: "Vidéo", image: "/placeholder.jpg", followers: 15000 },
  // Ajoutez plus de créateurs ici
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const sortBy = searchParams.get('sortBy')

  let filteredCreators = creators

  if (category && category !== 'Toutes') {
    filteredCreators = filteredCreators.filter(creator => creator.category === category)
  }

  if (sortBy === 'popularity') {
    filteredCreators.sort((a, b) => b.followers - a.followers)
  }

  return NextResponse.json(filteredCreators)
}