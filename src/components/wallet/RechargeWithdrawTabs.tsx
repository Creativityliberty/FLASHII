import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RechargeForm from './RechargeForm'
import WithdrawForm from './WithdrawForm'

interface RechargeWithdrawTabsProps {
  onRecharge: (amount: number) => void
  onWithdraw: (amount: number) => void
}

export default function RechargeWithdrawTabs({ onRecharge, onWithdraw }: RechargeWithdrawTabsProps) {
  return (
    <Tabs defaultValue="recharge">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="recharge">Recharger</TabsTrigger>
        <TabsTrigger value="withdraw">Retirer</TabsTrigger>
      </TabsList>
      <TabsContent value="recharge">
        <RechargeForm onRecharge={onRecharge} />
      </TabsContent>
      <TabsContent value="withdraw">
        <WithdrawForm onWithdraw={onWithdraw} />
      </TabsContent>
    </Tabs>
  )
}