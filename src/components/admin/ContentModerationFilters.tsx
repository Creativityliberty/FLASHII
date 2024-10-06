import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContentModerationFiltersProps {
  reportTypes: string[]
  reportStatuses: string[]
  selectedType: string
  selectedStatus: string
  onTypeChange: (type: string) => void
  onStatusChange: (status: string) => void
}

export default function ContentModerationFilters({
  reportTypes,
  reportStatuses,
  selectedType,
  selectedStatus,
  onTypeChange,
  onStatusChange
}: ContentModerationFiltersProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <Select value={selectedType} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type de contenu" />
        </SelectTrigger>
        <SelectContent>
          {reportTypes.map(type => (
            <SelectItem key={type} value={type}>{type}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedStatus} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Statut" />
        </SelectTrigger>
        <SelectContent>
          {reportStatuses.map(status => (
            <SelectItem key={status} value={status}>{status}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}