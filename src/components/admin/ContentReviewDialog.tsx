import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContentReviewDialogProps {
  selectedContent: any
  onClose: () => void
  onModerateContent: (action: string) => void
}

export default function ContentReviewDialog({ selectedContent, onClose, onModerateContent }: ContentReviewDialogProps) {
  const [moderationAction, setModerationAction] = useState("warning")
  const [moderationComment, setModerationComment] = useState("")

  if (!selectedContent) return null

  const handleModerate = () => {
    onModerateContent(moderationAction)
    setModerationAction("warning")
    setModerationComment("")
  }

  return (
    <Dialog open={selectedContent !== null} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Examiner le contenu</DialogTitle>
          <DialogDescription>
            ID: {selectedContent.id} - Type: {selectedContent.type} - Créateur: {selectedContent.creator}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="reason">Raison du signalement</Label>
            <p id="reason">{selectedContent.reason}</p>
          </div>
          <div>
            <Label htmlFor="content">Contenu signalé</Label>
            <Textarea id="content" placeholder="Le contenu signalé apparaîtrait ici" readOnly />
          </div>
          <div>
            <Label htmlFor="action">Action de modération</Label>
            <Select value={moderationAction} onValueChange={setModerationAction}>
              <SelectTrigger id="action">
                <SelectValue placeholder="Choisir une action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="approved">Approuver</SelectItem>
                <SelectItem value="warning">Avertir l'utilisateur</SelectItem>
                <SelectItem value="deleted">Supprimer le contenu</SelectItem>
                <SelectItem value="ban">Bannir l'utilisateur</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="comment">Commentaire de modération</Label>
            <Textarea 
              id="comment" 
              placeholder="Ajoutez un commentaire sur votre décision de modération"
              value={moderationComment}
              onChange={(e) => setModerationComment(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Annuler</Button>
          <Button onClick={handleModerate}>Appliquer la modération</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}