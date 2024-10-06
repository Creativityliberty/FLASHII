import React from 'react'
import CreatorCard from './CreatorCard'

const creators = [
  { id: 1, name: "Aminata Diallo", category: "Musique", image: "/placeholder.jpg", followers: 10000 },
  { id: 2, name: "Kofi Anan", category: "Art", image: "/placeholder.jpg", followers: 5000 },
  { id: 3, name: "Fatou Ndiaye", category: "Vidéo", image: "/placeholder.jpg", followers: 15000 },
  // Ajoutez plus de créateurs ici
]

export default function CreatorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  )
}