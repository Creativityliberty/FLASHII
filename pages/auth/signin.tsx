import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

export default function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    })
    if (result.ok) {
      router.push("/")
    } else {
      // Gérer l'erreur
      alert("Échec de la connexion")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Se connecter</button>
    </form>
  )
}