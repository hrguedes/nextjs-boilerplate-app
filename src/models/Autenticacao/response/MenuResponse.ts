export interface MenuResponse {
    nome: string;
    url: string;
    icone: string;
    regra: string;
    current: boolean;
    items: MenuResponse[];
}
