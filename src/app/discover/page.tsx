import React from 'react';
import CreatorGrid from '@/components/creator/CreatorGrid';
import FilterBar from '@/components/discover/FilterBar';

const categories = ["Toutes", "Musique", "Art", "Vidéo", "Cuisine", "Mode"];

export default function Discover() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Découvrez nos créateurs</h1>
      <FilterBar categories={categories} />
      <CreatorGrid />
    </div>
  );
}