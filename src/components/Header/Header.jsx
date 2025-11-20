import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
    weight: "400",
    subsets: ["latin"],
})
function Header() {
    const Links = [
        { key: 1, title: "About VGB", link: "/about" },
        { key: 2, title: "Our Work", link: "/work" },
        { key: 3, title: "Get Involved", link: "/getinvolved" },
        { key: 4, title: "Product Marketplace", link: "/product" },
    ]
    return (
        <div className='text-default h-28 bg-white flex justify-between items-center p-2 w-full'>
            <div>
                <Image src={"/Logo/VGB_LOGO.png"} width={1000} height={1000} alt="logo" className='md:w-[320px] h-full object-cover' />
            </div>
            <div className='flex gap-11 items-center w-1/2'>
                <div className='flex justify-between gap-11 items-center'>
                    {
                        Links.map((link) => {
                            return (
                                <Link href={link.link} key={link.key} className={`${merriweather.className} mx-2 text-accent font-bold`}>{link.title}</Link>
                            )
                        })
                    }
                </div>
                <div>
                    <button className={`bg-primary md:w-[236px] md:h-14 rounded-lg ${merriweather.className} font-bold text-default`}>Become VGB Pratinidhi</button>
                </div>
            </div>
        </div>
    )
}

export default Header