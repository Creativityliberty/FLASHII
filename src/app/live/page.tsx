import React, { useState } from 'react'
import LiveVideoPlayer from '@/components/live/LiveVideoPlayer'
import StreamInfo from '@/components/live/StreamInfo'
import ChatBox from '@/components/live/ChatBox'
import ViewersList from '@/components/live/ViewersList'
import { Card } from "@/components/ui/card"

const liveStreamData = {
  title: "Concert acoustique en direct",
  creator: "Aminata Diallo",
  viewers: 1234,
  likes: 567,
}

const chatMessages = [
  { id: 1, user: "Fan1", message: "Incroyable performance !" },
  { id: 2, user: "MusicLover", message: "J'adore cette chanson !" },
  { id: 3, user: "NewFollower", message: "Première fois que je te vois en live, c'est génial !" },
]

const viewers = [
  { id: 1, name: "Sophie", image: "/placeholder-user-1.jpg" },
  { id: 2, name: "Amadou", image: "/placeholder-user-2.jpg" },
  { id: 3, name: "Fatima", image: "/placeholder-user-3.jpg" },
  { id: 4, name: "Omar", image: "/placeholder-user-4.jpg" },
]

export default function LiveStreamPage() {
  const [message, setMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement send message logic here
    console.log("Message sent:", message)
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LiveVideoPlayer />
            <StreamInfo streamData={liveStreamData} />
          </div>

          <div>
            <ChatBox 
              messages={chatMessages} 
              message={message} 
              setMessage={setMessage} 
              handleSendMessage={handleSendMessage} 
            />
          </div>
        </div>

        <Card className="mt-8">
          <ViewersList viewers={viewers} totalViewers={liveStreamData.viewers} />
        </Card>
      </main>
    </div>
  )
}