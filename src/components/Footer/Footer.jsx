import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-linear-to-br from-primary to-secondary/50 px-20 py-15 flex flex-wrap justify-between items-start">
            {/* Logo Section */}
            <div className="flex-1 ">
                <div className="flex items-center gap-2.5 mb-5">
                    <Image src="/Logo/VGB_LOGO.png" alt="logo" width={1000} height={1000} className=' md:w-[225px] h-[70px] object-cover' />
                </div>
                <p className="text-sm text-[#2c5530] leading-relaxed mt-3.5">
                    Preserving and promoting{' '} <br></br>
                    <a href="#" className="text-accent no-underline font-medium hover:underline">
                        Bharat's Timeless Wisdom
                    </a>
                    .
                </p>
            </div>

            {/* Quick Links */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-default mb-6">Quick links</h3>
                <ul className="list-none space-y-3.5">
                    <li>
                        <a href="/aboutus" className="text-default no-underline text-sm ">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Boards & Departments
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            National / International
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Projects & Initiatives
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Store
                        </a>
                    </li>
                </ul>
            </div>

            {/* Get Involved */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-default mb-6">Get involved</h3>
                <ul className="list-none space-y-3.5">
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Sponsor and Donate
                        </a>
                    </li>
                    <li>
                        <a href="/donate" className="text-default no-underline text-sm ">
                            Donate Now
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Become a Pratinidhi
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-default no-underline text-sm ">
                            Affiliate and Partner
                        </a>
                    </li>
                </ul>
            </div>

            {/* Contact */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-default mb-6">Contact</h3>
                <div className="flex items-center gap-3 mb-5">
                    <Mail className='text-default' />
                    <span className="text-default text-sm">info@vishwagurubharat.org</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className='text-default' />
                    <span className="text-default text-sm">9103544414, 8219278781</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer