import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface ReportedContent {
  id: number
  type: string
  creator: string
  reason: string
  status: string
}

interface ReportedContentTableProps {
  filteredContent: ReportedContent[]
  onReviewContent: (content: ReportedContent) => void
}

export default function ReportedContentTable({ filteredContent, onReviewContent }: ReportedContentTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contenu signalé</CardTitle>
        <CardDescription>Examinez et modérez le contenu signalé par les utilisateurs</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Créateur</TableHead>
              <TableHead>Raison</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContent.map((content) => (
              <TableRow key={content.id}>
                <TableCell>{content.id}</TableCell>
                <TableCell>{content.type}</TableCell>
                <TableCell>{content.creator}</TableCell>
                <TableCell>{content.reason}</TableCell>
                <TableCell>
                  <Badge variant={content.status === "Supprimé" ? "destructive" : "outline"}>
                    {content.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button size="sm" onClick={() => onReviewContent(content)}>Examiner</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}