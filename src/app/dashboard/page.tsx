"use client";

import React from 'react'
import StatisticsCards from '@/components/dashboard/StatisticsCards'
import RecentPosts from '@/components/dashboard/RecentPosts'
import SidePanel from '@/components/dashboard/SidePanel'

const userStats = [
  { title: "Abonnements", value: 24, icon: Users, change: "+2 ce mois-ci" },
  { title: "Dépenses Totales", value: "150 €", icon: DollarSign, change: "+30 € ce mois-ci" },
  { title: "Interactions", value: 621, icon: Heart, change: "+48 cette semaine" },
]

const recentPosts = [
  { id: 1, creator: "Aminata Diallo", avatar: "/placeholder-avatar-1.jpg", content: "Nouveau single en préparation ! Restez à l'écoute 🎵", likes: 1520, comments: 89 },
  { id: 2, creator: "Kofi Anan", avatar: "/placeholder-avatar-2.jpg", content: "Vernissage de ma nouvelle exposition ce week-end. Vous êtes tous invités ! 🎨", likes: 872, comments: 54 },
  { id: 3, creator: "Fatou Ndiaye", avatar: "/placeholder-avatar-3.jpg", content: "Nouvelle vidéo en ligne : '10 astuces pour un maquillage parfait' 💄", likes: 2103, comments: 176 },
]

const recommendedCreators = [
  { id: 1, name: "Yannick Nkurunziza", category: "Danse", avatar: "/placeholder-avatar-6.jpg" },
  { id: 2, name: "Aïcha Kamara", category: "Mode", avatar: "/placeholder-avatar-5.jpg" },
  { id: 3, name: "Moussa Touré", category: "Cuisine", avatar: "/placeholder-avatar-4.jpg" },
]

const notifications = [
  { id: 1, content: "Aminata Diallo a publié un nouveau post", time: "Il y a 5 minutes" },
  { id: 2, content: "Vous avez reçu un nouveau message de Kofi Anan", time: "Il y a 1 heure" },
  { id: 3, content: "Votre abonnement à Fatou Ndiaye va bientôt expirer", time: "Il y a 3 heures" },
]

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Tableau de Bord</h1>

        <StatisticsCards stats={userStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentPosts posts={recentPosts} />
          </div>
          <div>
            <SidePanel recommendedCreators={recommendedCreators} notifications={notifications} />
          </div>
        </div>
      </main>
    </div>
  )
}