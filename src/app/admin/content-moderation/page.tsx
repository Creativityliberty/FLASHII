"use client";

import React, { useState } from 'react'
import ContentModerationFilters from '@/components/admin/ContentModerationFilters'
import ReportedContentTable from '@/components/admin/ReportedContentTable'
import ContentReviewDialog from '@/components/admin/ContentReviewDialog'
import ModerationStatistics from '@/components/admin/ModerationStatistics'

const reportedContent = [
  { id: 1, type: "Post", creator: "John Doe", reason: "Contenu inapproprié", status: "En attente" },
  { id: 2, type: "Commentaire", creator: "Jane Smith", reason: "Harcèlement", status: "En attente" },
  { id: 3, type: "Vidéo", creator: "Alex Johnson", reason: "Droits d'auteur", status: "Examiné" },
  { id: 4, type: "Post", creator: "Sarah Williams", reason: "Spam", status: "Approuvé" },
  { id: 5, type: "Commentaire", creator: "Mike Brown", reason: "Discours haineux", status: "Supprimé" },
]

const reportTypes = ["Tous", "Post", "Commentaire", "Vidéo"]
const reportStatuses = ["Tous", "En attente", "Examiné", "Approuvé", "Supprimé"]

export default function ContentModerationPage() {
  const [selectedType, setSelectedType] = useState("Tous")
  const [selectedStatus, setSelectedStatus] = useState("Tous")
  const [selectedContent, setSelectedContent] = useState(null)
  const [moderationStats, setModerationStats] = useState({
    approved: 85,
    deleted: 10,
    pending: 5
  })

  const filteredContent = reportedContent.filter(content => 
    (selectedType === "Tous" || content.type === selectedType) &&
    (selectedStatus === "Tous" || content.status === selectedStatus)
  )

  const handleReviewContent = (content) => {
    setSelectedContent(content)
  }

  const handleModerateContent = (action) => {
    // Implement content moderation logic here
    console.log(`Content ${selectedContent.id} ${action}`)
    
    // Update moderation stats
    setModerationStats(prevStats => {
      const newStats = { ...prevStats }
      if (action === "approved") {
        newStats.approved += 1
        newStats.pending -= 1
      } else if (action === "deleted") {
        newStats.deleted += 1
        newStats.pending -= 1
      }
      return newStats
    })

    setSelectedContent(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Modération de contenu</h1>

        <ContentModerationFilters
          reportTypes={reportTypes}
          reportStatuses={reportStatuses}
          selectedType={selectedType}
          selectedStatus={selectedStatus}
          onTypeChange={setSelectedType}
          onStatusChange={setSelectedStatus}
        />

        <ReportedContentTable
          filteredContent={filteredContent}
          onReviewContent={handleReviewContent}
        />

        <ContentReviewDialog
          selectedContent={selectedContent}
          onClose={() => setSelectedContent(null)}
          onModerateContent={handleModerateContent}
        />

        <ModerationStatistics stats={moderationStats} />
      </main>
    </div>
  )
}