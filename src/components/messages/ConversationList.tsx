import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface Conversation {
  id: number
  name: string
  lastMessage: string
  unread: number
  avatar: string
}

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversation: Conversation
  onSelectConversation: (conversation: Conversation) => void
}

export default function ConversationList({ conversations, selectedConversation, onSelectConversation }: ConversationListProps) {
  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Conversations
          <Button size="sm" variant="ghost">
            <Plus className="h-5 w-5" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-250px)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer ${
                selectedConversation.id === conversation.id ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => onSelectConversation(conversation)}
            >
              <Avatar>
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold">{conversation.name}</p>
                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {conversation.unread}
                </span>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}