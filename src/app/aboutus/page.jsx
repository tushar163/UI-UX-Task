import React from 'react'

function page() {
  const ourFoundingStories = [
    { key: 1, title: "Early Inspiration", descriptions: "Shri C.S. Thakur reflected deeply: “Why is Bharat not Ram Rajya? Why is Bharat not Vishwa Guru?” This question sparked the vision of reviving Bharat’s Sanatana heritage for global good." },
    { key: 2, title: "Conceptualization", descriptions: "Thakur ji shared his vision with saints, rishis, scholars, NGOs, activists, and thinkers across Bharat. Together, the idea of a collective movement to restore Bharat’s Vedic, cultural, and spiritual legacy began to take shape." },
    { key: 3, title: "Establishment", descriptions: "With support from Smt. Rupali Sharma Dutta, trustees, advisors, and volunteers from diverse fields, the Vishwa Guru Bharat Vedic Sanatana Sanskriti Trust was formally founded. Today, it leads 108 Departments & 27 Boards, guiding Pratinidhis and volunteers to make Bharat the Vishwa Guru once again." },
  ]

  return (
    <div className='flex flex-col h-full text-default'>
      {/* Banner */}
      <div className='h-[700px] relative overflow-hidden text-default'>
        <div className='absolute inset-0'>
          <img src="/Images/13028072725_cd17610e44_h.jpg" alt="banner" className="w-full h-[700px]  object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full px-4 max-w-[700px] mx-auto gap-6'>
          <h1 className='relative text-4xl font-merriweather font-bold text-center text-white'>About Vishwa Guru <span className='text-primary'>Bharat</span></h1>
          <p className='relative text-xl font-merriweather font-bold text-center text-white'>“A guru is someone who has the power to see greatness even in the lowest man and has the power to raise it.”</p>
        </div>
      </div>
      {/* Content */}
      <div className='w-full bg-white h-full'>
        <div className=' flex justify-between items-center w-full px-4 py-10 max-w-[1480px] mx-auto bg-white h-[500px] gap-10'>
          <div className='w-1/2'>
            <h2 className='text-[28px] font-merriweather text-accent font-bold mb-4'>Legacy of Bharat as Vishwa Guru</h2>
            <p className=' text-info leading-7'>Since the beginning of civilization India has been the Guru for the whole world. When the whole world was groping in darkness, India was teaching about the identity of man with the Supreme. People from all around the world converged to India to gain from its priceless wisdom. Indeed, the country that showed the whole world its academic brilliance through Sushrutha, Kanad, and Aryabhatta deserves to gain the same pedestal of being “Vishwa Guru Bharat” again.</p>
          </div>
          <div className='flex w-1/2 justify-center'>
            <div className='w-80 h-[416px] overflow-hidden rounded-[202px]'>
              <img src="/Images/aboutus_banner.jpg" alt="india-as-vishwa-guru" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      {/* Our Belief section */}
      <div className='flex flex-col w-full h-[570px]'>
        <h1 className='md:mt-12 text-accent font-merriweather text-3xl text-center'>Our Belief and Philosophy</h1>
        <div className='md:mt-[69px] h-[269px] flex flex-col items-center justify-center gap-[23px] border-2 border-primary w-[1000px] mx-auto rounded-[3px] shadow-[-5px_0px_15px_0px_#FF9933] '>
          <h1 className='font-merriweather text-2xl text-accent'>“Vasudhaiva Kutumbakam”</h1>
          <p className='text-accent text-center max-w-[627px]'>This Maha Upnishad verse meaning “The world is one family” is the cornerstone of our philosophy. It encapsulates pur belief in universal kinship, compassion, and shared responsibility for global peace and prosperity. We believe every being is interconnected and our actions should reflect this profound unity.</p>
        </div>
      </div>
      {/* Our Founding Story */}
      <div className='h-[1000px] w-full bg-white '>
        <h1 className='text-accent font-merriweather text-[28px] text-center md:mt-12'>Our Founding Story</h1>
        <div className='grid lg:grid-cols-3 w-full gap-40 px-28 mt-[51px]'>
          {ourFoundingStories.map((story, index) => {
            return (
              <div className='flex flex-col gap-[34px]' key={index}>
                <div className='flex flex-col justify-start items-start '>
                  <h1 className='text-[64px] font-bold font-merriweather text-[#FFD70080]'>{story.key}</h1>
                  <h2 className='text-tertiary font-merriweather text-2xl font-bold'>{story.title}</h2>

                </div>
                <p className='text-info'>{story.descriptions}</p>
              </div>
            )
          })}
        </div>
        <div className="md:mt-28 flex flex-col gap-[104px] justify-center items-center p-4">
          <h1 className="text-[28px] font-bold font-merriweather text-accent">Leadership & Networking</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[950px] w-full justify-center items-center gap-8 md:gap-0">

            <div className="flex flex-col justify-start items-center md:items-start gap-1 md:border-r-2 border-accent md:pr-6">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold font-merriweather text-accent">20+</h1>
                <p className="text-gray-600 text-center md:text-start">Board and trustees</p>
              </div>
            </div>


            <div className="flex flex-col justify-center items-center gap-1 md:border-r-2 border-accent md:pr-6">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold font-merriweather text-accent">100+</h1>
                <p className="text-gray-600 text-center">Global Pratinidhis</p>
              </div>
            </div>


            <div className="flex flex-col justify-center items-center md:items-end gap-1">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-bold font-merriweather text-accent">50+</h1>
                <p className="text-gray-600 text-center md:text-start">Partner organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[331px] w-full flex flex-col bg-tertiary text-white justify-center items-center gap-[39px] py-[54px]'>
        <div className='max-w-[900px] text-center flex flex-col gap-6 px-4'>
          <h2 className='text-[28px] font-merriweather font-bold'>Be a partner in making India the Vishwaguru</h2>
          <p className=''>To make India the Vishwaguru again, we need collective effort and unity. We invite trusts, organizations, companies, societies, community leaders, and political representatives to be a part of this national movement. If you believe in this mission, register as a representative and serve the nation.</p>
        </div>
        <button className='bg-primary md:w-[281px] md:h-16 rounded-lg font-merriweather font-bold text-lg cursor-pointer text-white shadow-[0px_4px_9px_0px_#00000040]'>Join as Pratinidhi</button>

      </div>
    </div>
  )
}

export default page