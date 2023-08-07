import userLogged from "@/src/hooks/userLogged";
import { MenuResponse } from "@/src/models/Autenticacao/response/MenuResponse";
import { UsuarioLogadoResponse } from "@/src/models/Autenticacao/response/UsuarioLogadoResponse";
import Link from "next/link"

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}

const MenuBar = () => {
    const user: UsuarioLogadoResponse | undefined = userLogged();
    const menuNavigation: MenuResponse[] | undefined = user?.menus;
    
    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {menuNavigation?.map((item) => (
                    <Link
                        key={item.nome}
                        href={item.url ?? ""}
                        className={classNames(
                            item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.nome}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MenuBar;