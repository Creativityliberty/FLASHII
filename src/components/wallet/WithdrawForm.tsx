import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WithdrawFormProps {
  onWithdraw: (amount: number) => void
}

export default function WithdrawForm({ onWithdraw }: WithdrawFormProps) {
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    onWithdraw(Number(withdrawAmount))
    setWithdrawAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Retirer des fonds</CardTitle>
        <CardDescription>Choisissez un montant et une méthode de retrait</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleWithdraw}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="withdraw-amount">Montant</Label>
              <Input
                id="withdraw-amount"
                placeholder="0.00"
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="withdraw-method">Méthode de retrait</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une méthode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Virement bancaire</SelectItem>
                  <SelectItem value="mobile-money">Mobile Money</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full mt-4" type="submit">Retirer</Button>
        </form>
      </CardContent>
    </Card>
  )
}