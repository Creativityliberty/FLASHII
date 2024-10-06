import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send } from 'lucide-react'

interface ChatMessage {
  id: number
  user: string
  message: string
}

interface ChatBoxProps {
  messages: ChatMessage[]
  message: string
  setMessage: (message: string) => void
  handleSendMessage: (e: React.FormEvent) => void
}

export default function ChatBox({ messages, message, setMessage, handleSendMessage }: ChatBoxProps) {
  return (
    <Card className="h-[calc(100vh-2rem)]">
      <CardHeader>
        <CardTitle>Chat en direct</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 h-[calc(100vh-15rem)] overflow-y-auto mb-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{msg.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{msg.user}</p>
                <p className="text-sm">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            placeholder="Écrivez un message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}