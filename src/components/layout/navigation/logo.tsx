import Image from 'next/image'
import imageTailwind from '@/public/assets/image/mark.svg'

const Logo = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                className="h-8 w-8"
                width={32}
                height={32}
                src={imageTailwind}
                alt="Boilerplate"
            />
        </div>
    )
}

export default Logo;