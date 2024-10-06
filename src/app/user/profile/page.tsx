import React from 'react';
import { getCurrentUser } from '@/lib/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default async function UserProfile() {
  const user = await getCurrentUser();

  if (!user) {
    return <div>Veuillez vous connecter pour voir votre profil.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Profil de {user.name}</h1>
      <form className="max-w-md">
        <Input
          id="name"
          name="name"
          type="text"
          label="Nom"
          defaultValue={user.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          defaultValue={user.email}
          disabled
        />
        <div className="mt-6">
          <Button type="submit">Mettre à jour le profil</Button>
        </div>
      </form>
    </div>
  );
}