import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FA
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/discover" className="text-gray-600 hover:text-gray-900">
            Découvrir
          </Link>
          {session ? (
            <>
              <Link href="/user/profile" className="text-gray-600 hover:text-gray-900">
                {session.user.name}
              </Link>
              <Button onClick={() => signOut()} variant="outline">
                Se déconnecter
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">Se connecter</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>S'inscrire</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}