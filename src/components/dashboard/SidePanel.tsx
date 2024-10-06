import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell } from 'lucide-react'

interface Creator {
  id: number
  name: string
  category: string
  avatar: string
}

interface Notification {
  id: number
  content: string
  time: string
}

interface SidePanelProps {
  recommendedCreators: Creator[]
  notifications: Notification[]
}

export default function SidePanel({ recommendedCreators, notifications }: SidePanelProps) {
  return (
    <Tabs defaultValue="recommendations">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="recommendations">
        <Card>
          <CardHeader>
            <CardTitle>Créateurs Recommandés</CardTitle>
          </CardHeader>
          <CardContent>
            {recommendedCreators.map((creator) => (
              <div key={creator.id} className="flex items-center justify-between mb-4 last:mb-0">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                    <AvatarFallback>{creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{creator.name}</h3>
                    <p className="text-sm text-gray-500">{creator.category}</p>
                  </div>
                </div>
                <Button size="sm">Suivre</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications Récentes</CardTitle>
          </CardHeader>
          <CardContent>
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start mb-4 last:mb-0">
                <Bell className="h-5 w-5 mr-3 mt-1 text-blue-500" />
                <div>
                  <p className="text-sm">{notification.content}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}