import { Disclosure } from '@headlessui/react'

// imgs
import Logo from './navigation/logo'
import MenuBar from './navigation/menu'
import UserMenu from './navigation/UserMenu'

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <Logo />
                                <MenuBar />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                <UserMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}


export default Navbar;