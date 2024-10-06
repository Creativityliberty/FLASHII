import React, { useState } from 'react'
import LeaderboardFilters from '@/components/leaderboard/LeaderboardFilters'
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable'

const creators = [
  { id: 1, name: "Aminata Diallo", category: "Musique", followers: 100000, revenue: 50000, avatar: "/placeholder-user-1.jpg" },
  { id: 2, name: "Kofi Anan", category: "Art", followers: 75000, revenue: 35000, avatar: "/placeholder-user-2.jpg" },
  { id: 3, name: "Fatou Ndiaye", category: "Vidéo", followers: 120000, revenue: 60000, avatar: "/placeholder-user-3.jpg" },
  { id: 4, name: "Moussa Touré", category: "Cuisine", followers: 50000, revenue: 25000, avatar: "/placeholder-user-4.jpg" },
  { id: 5, name: "Aïcha Kamara", category: "Mode", followers: 80000, revenue: 40000, avatar: "/placeholder-user-5.jpg" },
]

const categories = ["Toutes", "Musique", "Art", "Vidéo", "Cuisine", "Mode"]
const periods = ["Cette semaine", "Ce mois", "Cette année"]

export default function LeaderboardPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes")
  const [selectedPeriod, setSelectedPeriod] = useState("Cette semaine")

  const filteredCreators = creators.filter(creator => 
    selectedCategory === "Toutes" || creator.category === selectedCategory
  ).sort((a, b) => b.followers - a.followers)

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Classement des Créateurs</h1>

        <LeaderboardFilters
          categories={categories}
          periods={periods}
          selectedCategory={selectedCategory}
          selectedPeriod={selectedPeriod}
          onCategoryChange={setSelectedCategory}
          onPeriodChange={setSelectedPeriod}
        />

        <LeaderboardTable
          creators={filteredCreators}
          selectedCategory={selectedCategory}
          selectedPeriod={selectedPeriod}
        />
      </main>
    </div>
  )
}