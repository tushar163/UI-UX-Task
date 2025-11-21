import { link } from '@heroui/react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  const cards = [
    {
      id: 1,
      title:"Constitution",
      description:"Read the governing principles framework of Vishwa Guru Bharat.",
      link:"#",
      icon:"/icons/law-book.svg"
    },
    {
      id: 2,
      title:"Sanyukt Shakti Bhawan",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/building.svg"
    },
    {
      id: 3,
      title:"Acts & Regulations",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/balance.svg"
    },
    {
      id: 4,
      title:"Mission and Vision",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/mission.svg"
    },
    {
      id: 5,
      title:"Our Directory",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/directory.svg"
    },
    {
      id: 6,
      title:"Who’s Who",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/team.svg"
    },
    {
      id: 7,
      title:"Projects & Programs",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/goal.svg"
    },
    {
      id: 8,
      title:"Pratinidhi",
      description:"Read the governing principles framework of Vishwa Guru Bharat",
      link:"#",
      icon:"/icons/representative.svg"
    },
  ]
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-28'>
      <h1 className='text-[40px] font-merriweather text-default font-extrabold'>Our Trusts</h1>
      <p className='text-info text-center'>Explore the foundational pillars of our organization.</p>
      <div className='grid grid-cols-4 gap-10 py-14'>
        {cards.map((card) => (
          <div key={card.id} className='w-[300px] h-[300px] bg-[#FFD70040] rounded-[15px] relative p-8 overflow-hidden'>
           <div className='flex flex-col gap-2'>
              <h2 className='text-[20px] font-merriweather font-bold text-default'>{card.title}</h2>
              <p className='text-info text-[14px]'>{card.description}</p>
              <Link href={card.link} className='text-primary text-[14px] mt-2 flex items-center gap-1'>Learn More <MoveRight /></Link>

           </div>
            <div className=' absolute w-[129px] h-[129px] bg-primary rounded-full bottom-0 right-0 -mr-4 -mb-5 flex items-center justify-center'>
              <img src={card.icon} alt={card.title} className='w-[50px] h-[50px]' />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default page