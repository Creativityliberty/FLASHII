import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RechargeFormProps {
  onRecharge: (amount: number) => void
}

export default function RechargeForm({ onRecharge }: RechargeFormProps) {
  const [rechargeAmount, setRechargeAmount] = useState("")

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault()
    onRecharge(Number(rechargeAmount))
    setRechargeAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recharger mon compte</CardTitle>
        <CardDescription>Choisissez un montant et une méthode de paiement</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRecharge}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recharge-amount">Montant</Label>
              <Input
                id="recharge-amount"
                placeholder="0.00"
                type="number"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment-method">Méthode de paiement</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une méthode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile-money">Mobile Money</SelectItem>
                  <SelectItem value="credit-card">Carte bancaire</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full mt-4" type="submit">Recharger</Button>
        </form>
      </CardContent>
    </Card>
  )
}