"use client";

import React from 'react'
import CreatorHeader from '@/components/creator/CreatorHeader'
import CreatorContent from '@/components/creator/CreatorContent'
import SubscriptionTiers from '@/components/creator/SubscriptionTiers'

const creator = {
  id: 1,
  name: "Aminata Diallo",
  username: "@aminata_music",
  bio: "Chanteuse et compositrice sénégalaise | 3x Disque d'Or | Ambassadrice UNICEF",
  followers: 250000,
  posts: 532,
  likes: 1500000,
  avatar: "/placeholder-avatar.jpg",
  banner: "/placeholder-banner.jpg",
}

const posts = [
  { id: 1, type: "photo", title: "Backstage at my latest concert", image: "/placeholder-post-1.jpg", likes: 15000, comments: 230 },
  { id: 2, type: "video", title: "New song teaser - 'African Queen'", thumbnail: "/placeholder-post-2.jpg", likes: 25000, comments: 450 },
  { id: 3, type: "text", title: "Reflecting on my musical journey", content: "It's been an incredible 10 years...", likes: 10000, comments: 180 },
]

const subscriptionTiers = [
  { name: "Fan", price: 5, benefits: ["Accès au contenu exclusif", "Badge spécial sur le profil"] },
  { name: "Super Fan", price: 15, benefits: ["Tout du niveau Fan", "Accès aux livestreams privés", "Contenu en avant-première"] },
  { name: "VIP", price: 30, benefits: ["Tout du niveau Super Fan", "Meet & Greet virtuel mensuel", "Marchandise exclusive"] },
]

export default function CreatorProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <CreatorHeader creator={creator} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <CreatorContent creator={creator} posts={posts} />
          </div>
          <div className="lg:w-1/3">
            <SubscriptionTiers tiers={subscriptionTiers} />
          </div>
        </div>
      </main>
    </div>
  )
}