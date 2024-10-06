import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function UserSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Paramètres du compte</h1>

        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informations du profil</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="bio">Biographie</Label>
                    <Input id="bio" defaultValue="Créateur passionné" />
                  </div>
                  <div>
                    <Label htmlFor="website">Site web</Label>
                    <Input id="website" defaultValue="https://monsite.com" />
                  </div>
                  <Button>Sauvegarder les modifications</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du compte</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="password">Nouveau mot de passe</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Mettre à jour le compte</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Préférences de notification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailNotifs">Notifications par e-mail</Label>
                    <Switch id="emailNotifs" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="pushNotifs">Notifications push</Label>
                    <Switch id="pushNotifs" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newFollowers">Nouveaux abonnés</Label>
                    <Switch id="newFollowers" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newPosts">Nouveaux posts des créateurs suivis</Label>
                    <Switch id="newPosts" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}