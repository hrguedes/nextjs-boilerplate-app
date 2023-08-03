import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            login: { label: "login", type: "text", placeholder: "taking.user" },
            senha: { label: "senha", type: "password" }
        },
        authorize: async (credentials: any) => {
            try {
                const { data } = await axios.post(process.env.API_BASE_URL + '/api/v1/Autenticacao/login', {
                    login: credentials.login,
                    senha: credentials.senha
                });
                if (data.ok) {
                    return data;
                }
                return null;
            } catch (e: any) {
                throw new Error(e);
            }
        }
    })
]

const callbacks = {
    jwt: async ({ token, user }: any) => {
        if (user) {
            token.accessToken = user.token;
            token.accessTokenExpiry = user.validoAte;
            token.data = user;
        }
        return Promise.resolve(token);
    },
    redirect: async ({ url, baseUrl }: any) => {
        console.log('URL: ', url);
        console.log('baseUrl: ', baseUrl);
        if (url.startsWith("/")) return `${baseUrl}${url}`
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
    },
    session: async ({ session, token }: any): Promise<any> => {
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.usuario = token.data;
        return Promise.resolve(session);
    },
}

export const options = {
    providers,
    callbacks,
    pages: {
        signIn: "/auth/login",
    },
    secret: process.env.JWT_SECRET
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
export default Auth;