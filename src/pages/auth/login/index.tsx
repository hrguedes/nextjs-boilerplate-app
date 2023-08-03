import Image from "next/image"
import { ChangeEvent, FormEvent, use, useState } from "react"

// images
import logoNome from '@/public/assets/image/mark.svg'
import { signIn } from "next-auth/react";

const Login = () => {
    // states
    const [usuario, setUsuario] = useState("");
    const [usuarioAviso, setUsuarioAviso] = useState(false);
    const [senha, setSenha] = useState("");
    const [senhaAviso, setSenhaAviso] = useState(false);
    const [avisos, setAvisos] = useState("");

    // functions
    const handleOnSubimit = async (event: FormEvent) => {
        event.preventDefault();
        if (usuario === "") {
            setUsuarioAviso(true);
            return;
        }
        if (senha === "") {
            setSenhaAviso(true);
            return;
        }

        let response = await signIn('credentials', { login: 'taking.iobA03', senha: 'IOBSUP3R', callbackUrl: "/" });

        if (response?.status === 401) {
            setAvisos("Fora do Ar, por favor entre em contato com o administrador.");
        }

        // validar response
        console.log(response);
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image className="mx-auto w-auto" src={logoNome} alt="Your Company" height={240} />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Portal</h2>
                <hr></hr>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Boilerplate - NEXTJS</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleOnSubimit}>
                    <div>
                        <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">Usuário</label>
                        <div className="mt-2">
                            <input
                                id="usuario"
                                value={usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value)}
                                name="usuario"
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {usuarioAviso && (
                                <span className="text-sm text-red-500"> Por favor, preencha usuário </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {senhaAviso && (
                                <span className="text-sm text-red-500"> Por favor, preencha a senha </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Entrar
                        </button>
                    </div>
                    <div className="text-center align-middle">
                        {avisos && (
                            <span className="text-sm text-red-500"> {avisos} </span>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;