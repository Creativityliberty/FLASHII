import React, { useState } from 'react'
import ConversationList from '@/components/messages/ConversationList'
import ChatWindow from '@/components/messages/ChatWindow'

const conversations = [
  { id: 1, name: "Aminata Diallo", lastMessage: "Merci pour votre soutien !", unread: 2, avatar: "/placeholder-user-1.jpg" },
  { id: 2, name: "Kofi Anan", lastMessage: "Quand sera votre prochain live ?", unread: 0, avatar: "/placeholder-user-2.jpg" },
  { id: 3, name: "Fatou Ndiaye", lastMessage: "J'adore votre dernier post !", unread: 1, avatar: "/placeholder-user-3.jpg" },
]

const messages = [
  { id: 1, sender: "Aminata Diallo", content: "Bonjour ! Comment allez-vous aujourd'hui ?", timestamp: "10:30" },
  { id: 2, sender: "Vous", content: "Bonjour Aminata ! Je vais bien, merci. J'ai adoré votre dernier concert !", timestamp: "10:32" },
  { id: 3, sender: "Aminata Diallo", content: "Je suis ravie que vous ayez apprécié ! Avez-vous une chanson préférée ?", timestamp: "10:35" },
  { id: 4, sender: "Vous", content: "Oui, j'ai particulièrement aimé 'Soleil d'Afrique'. C'était magnifique !", timestamp: "10:37" },
  { id: 5, sender: "Aminata Diallo", content: "Merci beaucoup ! C'est aussi l'une de mes préférées. Je travaille sur de nouvelles chansons en ce moment.", timestamp: "10:40" },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ConversationList 
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
          />
          <ChatWindow 
            conversation={selectedConversation}
            messages={messages}
          />
        </div>
      </main>
    </div>
  )
}