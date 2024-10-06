import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/flash-africa-logo.png" alt="Flash Africa Logo" width={120} height={40} />
          </Link>
          <div className="flex items-center space-x-4">
            {!session && (
              <>
                <button onClick={() => signIn()} className="bg-blue-500 text-white px-4 py-2 rounded">Se connecter</button>
                <Link href="/auth/signup">
                  <button className="bg-green-500 text-white px-4 py-2 rounded">S'inscrire</button>
                </Link>
              </>
            )}
            {session && (
              <>
                <span>Bienvenue, {session.user.name}</span>
                <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">Se déconnecter</button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur Flash Africa</h1>
        <p className="text-xl mb-8">Découvrez et soutenez les créateurs africains</p>
        <div className="space-x-4">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg">Devenir Créateur</button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg">Explorer les Créateurs</button>
        </div>
      </main>
    </div>
  )
}

export default Home