import NextAuth from "next-auth"
import { UsuarioLogadoResponse } from "./src/models/Autenticacao/response/UsuarioLogadoResponse"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    usuario: UsuarioLogadoResponse,
    user: {
      name: string
    }
  }
}