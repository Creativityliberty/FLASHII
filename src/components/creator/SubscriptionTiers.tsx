import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SubscriptionTier {
  name: string
  price: number
  benefits: string[]
}

interface SubscriptionTiersProps {
  tiers: SubscriptionTier[]
}

export default function SubscriptionTiers({ tiers }: SubscriptionTiersProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Niveaux d'abonnement</h2>
      <div className="space-y-6">
        {tiers.map((tier) => (
          <Card key={tier.name}>
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.price}€ par mois</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choisir ce niveau</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}