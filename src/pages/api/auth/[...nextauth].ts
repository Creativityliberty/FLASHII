import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Ici, vous devriez normalement vérifier les identifiants dans votre base de données
        // Pour cet exemple, nous utilisons des identifiants codés en dur
        if (credentials.username === "user" && credentials.password === "password") {
          return { id: 1, name: "J Smith", email: "jsmith@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
})