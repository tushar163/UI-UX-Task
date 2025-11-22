import React from 'react'

function page() {
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='h-[700px] relative overflow-hidden text-default'>
        <div className='absolute inset-0'>
          <div className='h-full w-full bg-'></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full px-4 max-w-[700px] mx-auto gap-6'>
          <h1 className='relative text-4xl font-merriweather font-bold text-center text-white'>About Vishwa Guru <span className='text-primary'>Bharat</span></h1>
          <p className='relative text-xl font-merriweather font-bold text-center text-white'>“A guru is someone who has the power to see greatness even in the lowest man and has the power to raise it.”</p>
        </div>
      </div>

    </div>
  )
}

export default page