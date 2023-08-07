import { useSession } from "next-auth/react";
import { UsuarioLogadoResponse } from "../models/Autenticacao/response/UsuarioLogadoResponse";
import { useEffect, useState } from "react";

export default function userLogged(): UsuarioLogadoResponse | undefined {
    const { data: session } = useSession();
    const [user, setUser] = useState<UsuarioLogadoResponse>();
    useEffect(() => {
        if (session !== undefined) {
            setUser(session?.usuario);
        }
    }, [session]);
    return user;
}