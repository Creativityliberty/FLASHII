import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LeaderboardFiltersProps {
  categories: string[]
  periods: string[]
  selectedCategory: string
  selectedPeriod: string
  onCategoryChange: (category: string) => void
  onPeriodChange: (period: string) => void
}

export default function LeaderboardFilters({
  categories,
  periods,
  selectedCategory,
  selectedPeriod,
  onCategoryChange,
  onPeriodChange
}: LeaderboardFiltersProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Catégorie" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(category => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedPeriod} onValueChange={onPeriodChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Période" />
        </SelectTrigger>
        <SelectContent>
          {periods.map(period => (
            <SelectItem key={period} value={period}>{period}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}