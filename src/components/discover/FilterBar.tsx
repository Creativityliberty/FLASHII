import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Music, Palette, Video, Coffee, Shirt } from 'lucide-react'

interface FilterBarProps {
  categories: string[]
}

const categoryIcons = {
  "Musique": Music,
  "Art": Palette,
  "Vidéo": Video,
  "Cuisine": Coffee,
  "Mode": Shirt,
}

export default function FilterBar({ categories }: FilterBarProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Catégorie" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(category => {
            const Icon = categoryIcons[category] || null
            return (
              <SelectItem key={category} value={category}>
                <div className="flex items-center">
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  {category}
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popularity">Popularité</SelectItem>
          <SelectItem value="recent">Plus récent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}