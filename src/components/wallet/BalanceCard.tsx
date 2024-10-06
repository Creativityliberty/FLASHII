import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BalanceCardProps {
  balance: number
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solde actuel</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{balance.toFixed(2)} €</p>
      </CardContent>
    </Card>
  )
}