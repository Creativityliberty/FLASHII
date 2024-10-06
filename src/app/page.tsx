import Link from 'next/link';
import { Music, Palette, Video, Coffee, Shirt } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: "Musique", icon: Music },
    { name: "Art", icon: Palette },
    { name: "Vidéo", icon: Video },
    { name: "Cuisine", icon: Coffee },
    { name: "Mode", icon: Shirt },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur <span className="text-blue-600">FA</span></h1>
      <p className="text-xl mb-8">Découvrez et soutenez les créateurs africains</p>
      <div className="space-x-4 mb-8">
        <Link href="/auth/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
          Devenir Créateur
        </Link>
        <Link href="/discover" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg">
          Explorer les Créateurs
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <category.icon className="h-12 w-12 text-gray-600 mb-2" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}