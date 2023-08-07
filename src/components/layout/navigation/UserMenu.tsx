import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from "react"

import userImage from '@/public/assets/image/photo-1472099645785-5658abf4ff4e.jpeg'
import { UsuarioLogadoResponse } from '@/src/models/Autenticacao/response/UsuarioLogadoResponse'
import userLogged from '@/src/hooks/userLogged'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: userImage,
}

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}


const UserMenu = () => {
    const user: UsuarioLogadoResponse | undefined = userLogged();

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="relative flex max-w-xs items-center text-white text-sm focus:outline-none">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <span>{user?.nome}</span>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    href={item.href}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default UserMenu;