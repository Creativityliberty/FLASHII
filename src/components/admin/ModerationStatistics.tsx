import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ModerationStatisticsProps {
  stats: {
    approved: number
    deleted: number
    pending: number
  }
}

export default function ModerationStatistics({ stats }: ModerationStatisticsProps) {
  const total = stats.approved + stats.deleted + stats.pending

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Statistiques de modération</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-2xl font-bold">{((stats.approved / total) * 100).toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Contenu approuvé</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="text-2xl font-bold">{((stats.deleted / total) * 100).toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Contenu supprimé</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-2xl font-bold">{((stats.pending / total) * 100).toFixed(1)}%</p>
            <p className="text-sm text-gray-600">En attente de révision</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}