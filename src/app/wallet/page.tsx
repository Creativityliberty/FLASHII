import React, { useState } from 'react'
import BalanceCard from '@/components/wallet/BalanceCard'
import RechargeWithdrawTabs from '@/components/wallet/RechargeWithdrawTabs'
import TransactionHistory from '@/components/wallet/TransactionHistory'

const transactions = [
  { id: 1, date: "2023-05-01", description: "Abonnement mensuel", amount: -10, type: "debit" },
  { id: 2, date: "2023-05-03", description: "Don reçu de Fan1", amount: 25, type: "credit" },
  { id: 3, date: "2023-05-05", description: "Retrait vers compte bancaire", amount: -50, type: "debit" },
  { id: 4, date: "2023-05-10", description: "Recharge du compte", amount: 100, type: "credit" },
]

export default function WalletPage() {
  const [balance, setBalance] = useState(150)

  const handleRecharge = (amount: number) => {
    setBalance(balance + amount)
  }

  const handleWithdraw = (amount: number) => {
    setBalance(balance - amount)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Mon Portefeuille</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BalanceCard balance={balance} />
          <RechargeWithdrawTabs onRecharge={handleRecharge} onWithdraw={handleWithdraw} />
        </div>

        <TransactionHistory transactions={transactions} />
      </main>
    </div>
  )
}