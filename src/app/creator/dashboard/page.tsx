import React from 'react';
import { getCurrentUser } from '@/lib/auth';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function CreatorDashboard() {
  const user = await getCurrentUser();

  if (!user) {
    return <div>Veuillez vous connecter pour accéder au tableau de bord du créateur.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord du créateur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
          <p>Abonnés: 1,234</p>
          <p>Vues totales: 56,789</p>
          <p>Revenus ce mois-ci: $1,234.56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
          <div className="space-y-4">
            <Link href="/creator/dashboard/content/new">
              <Button className="w-full">Créer un nouveau contenu</Button>
            </Link>
            <Link href="/creator/dashboard/live">
              <Button className="w-full" variant="outline">Démarrer un live</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Contenu récent</h2>
        {/* Ici, vous pouvez ajouter une liste des contenus récents du créateur */}
      </div>
    </div>
  );
}