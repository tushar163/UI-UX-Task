import Image from 'next/image'
import React from 'react'

function page() {
    const Leadership = [
        {
            key: 1,
            name: "Shri C.S. Thakur",
            position: "Founder",
            image: "/Images/cs1.jpeg"
        },
        {
            key: 2,
            name: "Smt. Rupali Sharma Dutta ji",
            position: "Founder & president",
            image: "/Images/RUPALI2.jpeg"
        },
        {
            key: 3,
            name: "Shri. Anil Kumar Padha",
            position: "Trustee",
            image: "/Images/anil2.jpeg"
        }
    ]
    const ourMembers = [
        {
            key: 1,
            name: "Padma Shri Dr. Vishwamurthy Shastri",
            position: "J&K Sanatan Dharma Shastra President",
            image: "/Images/vms2.jpeg"
        },
        {
            key: 2,
            name: "Shri Acharya Agnivrat Jee",
            position: "Director General Vedic Vigyan",
            image: "/Images/ShriAcharyaagnivratjee.png"
        },
        {
            key: 3,
            name: "Shri Vishal Kapahi",
            position: "Director General Jammu & Kashmiree",
            image: "/Images/shriVishalKapahi.png"
        },
        {
            key: 4,
            name: "Shri Shobhit Kulshrestha",
            position: "National President Legal & Compliances",
            image: "/Images/ShriShobhit.png"
        },
        {
            key: 5,
            name: "Shri S .K. Muraleei",
            position: "National Secretary",
            image: "/Images/SKMuraleei.png"
        },
        {
            key: 6,
            name: "Smt Rita Kalra",
            position: "Director Women Empowerment",
            image: "/Images/shriritakalra.jpg"
        },
        {
            key: 7,
            name: "Shri Archit Sehgal",
            position: "National IT Co-ordinator",
            image: "/Images/shriarchitsehgal.jpg"
        },
        {
            key: 8,
            name: "Smt Dr. Shefali Sharma",
            position: "Director of Woman Education",
            image: "/Images/smtshefalisharma.jpg"
        },
        {
            key: 9,
            name: "Shri Anil Gaind",
            position: "President of Jammu & Kashmir (U.T)",
            image: "/Images/anilgaind1.jpg"
        },
        {
            key: 10,
            name: "Shri Anil Kapoor",
            position: "President of Environment Department",
            image: "/Images/anil-kapoor2.png"
        },
        {
            key: 11,
            name: "Shri P. Babu Swami",
            position: "National President Nadi Shastra",
            image: "/Images/swami1.png"
        },
        {
            key: 12,
            name: "Shri Dhamecha Arvind Retilal",
            position: "National Vice President",
            image: "/Images/ShriDhamecha.png"
        },
        {
            key: 13,
            name: "Shri Vinod Sharma",
            position: "National Special Secretary",
            image: "/Images/shrivinod.png"
        },
        {
            key: 14,
            name: "Shri Vinay Vijay Salve",
            position: "President of Maharashtra State",
            image: "/Images/vinay1.jpeg"
        },
        {
            key: 15,
            name: "Shri Kartik Pal",
            position: "President of Punjab State",
            image: "/Images/kartik-pal1.png"
        },
        {
            key: 16,
            name: "Advocate Shri Ankur Sharma",
            position: "Legal Advisor",
            image: "/Images/ankur1.jpeg"
        },
        {
            key: 17,
            name: "Advocate Shri Sanveer Singh",
            position: "Law Management Director",
            image: "/Images/sanveer2.jpeg"
        },
        {
            key: 18,
            name: "Shri Acharya D. Shastri",
            position: "Vedic Sanatana Shastra Vice-President",
            image: "/Images/d1.jpg"
        },
        {
            key: 19,
            name: "Shri Dr. KC Sharma",
            position: "Scientist, Education & Research Specialist",
            image: "/Images/kcsharma.png"
        },
        {
            key: 20,
            name: "Shri Jwahar Jyoti",
            position: "Vice President of Jammu & Kashmir (U.T)",
            image: "/Images/jawahar2.jpeg"
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
                                <div className='w-[250px] h-[250px] rounded-xl flex flex-col gap-8 justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040]' key={team.key}>
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
                                <div className='w-[250px] h-[250px] rounded-xl p-4 flex flex-col gap-8 justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040]' key={team.key}>
                                    <Image src={team.image} width={1000} height={1000} alt="logo" className='md:w-[86px] mt-2 md:h-[86px] object-cover rounded-full' />
                                    <div className='flex flex-col gap-2 items-center'>
                                        <h1 className=' font-bold text-default max-w-[170px] text-center'>{team.name}</h1>
                                        <p className='text-info text-sm text-center'>{team.position}</p>
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