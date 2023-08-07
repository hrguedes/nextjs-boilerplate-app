import { MenuResponse } from "./MenuResponse";
import { RegraResponse } from "./RegraResponse";

export interface UsuarioLogadoResponse {
    id: string;
    nome: string;
    email: string;
    usuarioWindows: string;
    token: string;
    validoAte: string;
    sessaoId: string;
    regras: RegraResponse[];
    menus: MenuResponse[];
}