import NextAuth from "next-auth"
import { UsuarioResponse } from "./src/models/Autenticacao/response/UsuarioResponse"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    usuario: UsuarioResponse,
    user: {
      name: string
    }
  }
}