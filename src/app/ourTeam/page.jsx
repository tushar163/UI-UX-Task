import Image from 'next/image'
import React from 'react'

function page() {
    const Leadership = [
        {
            key: 1,
            name: "Shri C.S. Thakur",
            position: "Founder",
            image: "/Logo/person1.jpeg"
        },
        {
            key: 2,
            name: "Smt. Rupali Sharma Dutta ji",
            position: "Founder & president",
            image: "/Logo/person2.jpeg"
        },
        {
            key: 3,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        }
    ]
    const ourMembers = [
        {
            key: 1,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 2,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 3,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 4,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 5,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 6,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 7,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 8,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 9,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
        {
            key: 10,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Logo/person3.jpeg"
        },
    ]
    return (
        <div className='flex flex-col items-center w-full h-full md:pt-16 md:pb-64'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-bold text-center text-default font-merriweather'>Our Team</h1>
                <p className='text-info'>The dedicated individuals leading Vishwa Guru Bharat forward.</p>
            </div>
            <div className='mt-16 flex flex-col items-center gap-8'>
                <h1 className='text-2xl font-bold text-default font-merriweather'>Leadership</h1>
                <div className='grid grid-cols-3 gap-11 '>
                    {
                        Leadership.map((team) => {
                            return (
                                <div className='w-[220px] h-[220px] rounded-xl flex flex-col gap-8 justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040]' key={team.key}>
                                    <Image src={team.image} width={1000} height={1000} alt="logo" className='md:w-[86px] md:h-[86px] object-cover rounded-full' />
                                    <div className='flex flex-col gap-2 items-center'>
                                        <h1 className=' font-bold text-default max-w-[170px] text-center'>{team.name}</h1>
                                        <p className='text-info text-sm'>{team.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-18 flex flex-col items-center gap-8'>
                <h1 className='text-2xl font-bold text-default font-merriweather'>Our Members</h1>
                <div className='grid grid-cols-5 gap-11 '>
                    {
                        ourMembers.map((team) => {
                            return (
                                <div className='w-[220px] h-[220px] rounded-xl flex flex-col gap-8 justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040]' key={team.key}>
                                    <Image src={team.image} width={1000} height={1000} alt="logo" className='md:w-[86px] md:h-[86px] object-cover rounded-full' />
                                    <div className='flex flex-col gap-2 items-center'>
                                        <h1 className=' font-bold text-default max-w-[170px] text-center'>{team.name}</h1>
                                        <p className='text-info text-sm'>{team.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default page