import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Créer un nouveau compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              label="Nom complet"
            />

            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              label="Adresse e-mail"
            />

            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              label="Mot de passe"
            />

            <div>
              <Button type="submit" className="w-full">
                S'inscrire
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}