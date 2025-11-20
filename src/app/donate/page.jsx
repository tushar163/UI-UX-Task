"use client";
import React from 'react'
import { Merriweather } from 'next/font/google'
import { CreditCard, Landmark, ScanLine } from 'lucide-react'
import Image from 'next/image'

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
})
function page() {
  return (
    <div className='text-default h-full pb-12 w-full flex justify-center '>
      <div className='w-[750px] h-full flex flex-col gap-14  mt-18'>
        <div className='flex flex-col gap-1 items-center'>
          <h1 className={`${merriweather.className} text-4xl font-bold text-center`}>Support Vishwa Guru Bharat</h1>
          <p className={`  text-center`}>Join in restoring India’s ancient wisdom and heritage. Your contribution helps us spread Vedic knowledge globally and build a brighter future.</p>
        </div>
        <div className='w-full flex   justify-between items-start  bg-white p-8'>
          <div className='flex flex-col gap-6'>
            <span className='text-primary flex gap-1'><Landmark /> <span className='font-bold'>Bank Transfer Details</span></span>
            <div className='flex flex-col gap-2'>
              <span className='flex flex-col gap-1'><span className='font-bold'>Account holder :</span> <span className='text-info'>Vishwa Guru Bharat BVVS</span></span>
              <span className='flex flex-col gap-1'><span className='font-bold'>Account number : </span><span className='text-info'>50200059978732</span></span>
              <span className='flex flex-col gap-1'><span className='font-bold'>IFSC : </span><span className='text-info'>HDFC0006541</span></span>
              <span className='flex flex-col gap-1'><span className='font-bold'>Branch : </span><span className='text-info'>Jammu (J&K)</span></span>
              <span className='flex flex-col gap-1'><span className='font-bold'>UPI : </span><span className='text-info'>vishwagurubharatbvss.62297558@hdfcbank </span></span>
            </div>
          </div>
          <div className='flex flex-col gap-6 '>
            <span className='text-primary flex gap-1'><ScanLine /> <span className='font-bold'>Scan the QR code</span></span>
            {/* Scan QR code */}
            <div className='w-[200px] h-[200px] '>
              <Image src="/Logo/OR_CODE.png" width={1000} height={1000} alt="logo" className='md:w-[200px] h-full object-cover' />
            </div>
          </div>
        </div>
        <div className='bg-white flex flex-col gap-6 p-6'>
          <div className='flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-1 items-center'>
              <h1 className={`text-primary   font-bold`}>Donate Securely Online</h1>
              <p className='text-info'>Receive  your  80G tax exemption receipt instantly via email.</p>
            </div>
            <button className={`${merriweather.className} bg-primary w-[400px] h-14 rounded-lg text-white font-bold flex gap-2 items-center justify-center`}> <CreditCard />Click for Online Donation</button>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center w-full'>
          <h1 className={` ${merriweather.className}  font-bold`}>Tax Exemption Details</h1>
          <span className='text-info text-sm'>All donations are exempt from Income Tax under section 80G of the Income Tax Act</span>
          <span className='text-info text-sm text-center line-clamp-4'>Order Under Rule 17/11AA/2C OF THE INCOME TAX RULES, AACTV9992QF20221 DT- 23-06-2022 PAN NO AACTV9992Q</span>
          <hr className='border-[#D9D9D9] w-full border mt-8'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <p>For offline donations and enquires, please contact us at:</p>
          <a href="mailto:info@vishwagurubharat.org" className='text-primary font-bold'>info@vishwagurubharat.org</a>
        </div>
      </div>
    </div>
  )
}

export default page