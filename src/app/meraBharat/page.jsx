import Image from 'next/image'
import React from 'react'

function page() {
    const data = [
        { key: 1, name: "Profile", icon: "/icons/flag.svg"},
        { key: 4, name: "Culture and Heritage", icon: "/icons/museum.svg"},
        { key: 6, name: "People and Lifestyle", icon: "/icons/lifestyle.svg"},
        { key: 8, name: "My Bharat My Pride", icon: "/icons/pride.svg"},
        { key: 2, name: "Districts of Bharat", icon: "/icons/area.svg"},
        { key: 5, name: "Places to visit", icon: "/icons/roadsign.svg"},
        { key: 7, name: "Natural Wonders", icon: "/icons/biodiversity.svg"},
        { key: 9, name: "States of Bharat", icon: "/icons/india.svg"},
        { key: 3, name: "National Symbols", icon: ""},
    ]
    return (
        <div className='flex flex-col items-center md:pt-[100px]'>
            <h1 className='text-[40px] font-bold text-default font-merriweather'>Mera Bharat</h1>
            <p className='text-info'>Explore the achievements and the glories of our nation.</p>
            <div className='md:mt-[46px] grid grid-rows-4 grid-flow-col  gap-10'>
                {
                    data.map((item) => {
                        return (
                            <div className='flex gap-4 items-center w-[400px] h-20 bg-[#FFD70040] rounded-lg p-4'>
                               <div className='w-[66px] h-[66px] rounded-full flex justify-center items-center bg-primary'>
                                <Image src={item.icon} width={1000} height={1000} alt="logo" className='md:w-[35px] h-[35px] object-cover' />
                               </div>
                                <p className='text-default font-bold'>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='md:mt-[172px] w-full h-[400px]'>
                <Image src="/Images/MeraBharat_Botttom_image.png" width={10000} height={10000} alt="logo" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default page