import Banner from '@/components/Banner/Banner'
import CTASection from '@/components/CTASection/CTASection';
import ServicesSection from '@/components/SeriveSection/ServicesSection';
import React from 'react'

function page() {
  const companyLogos = [
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
    { name: "Dribbble", url: "https://cdn.simpleicons.org/dribbble" },
    { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot" },
    { name: "Notion", url: "https://cdn.simpleicons.org/notion" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png" },
    { name: "Zoom", url: "https://cdn.simpleicons.org/zoom" },
    { name: "Slack", url: "https://cdn.simpleicons.org/slack" },
    { name: "Spotify", url: "https://cdn.simpleicons.org/spotify" },
    { name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb" },
    { name: "Google", url: "https://cdn.simpleicons.org/google" },
  ];
  return (
    <div className='min-h-screen flex flex-col bg-default justify-center w-full'>
      <Banner />
      <div className="bg-default py-10">
        <marquee scrollamount="6">
          <div className="flex gap-16 items-center">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.name}
                className="h-24 opacity-60 grayscale hover:opacity-100 transition"
              />
            ))}
          </div>
        </marquee>
      </div>
      <ServicesSection />
      <CTASection />

    </div>
  )
}

export default page