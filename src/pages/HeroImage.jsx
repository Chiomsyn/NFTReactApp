import React from 'react'
import image1 from '../assests/image1.png'
import { ArrowSmDownIcon } from '@heroicons/react/outline'

const HeroImage = () => {
  return (
    <div className='w-full flex flex-col justify-between overflow-hidden'>
      <div className='bg-[#140624] sm:max-w-[1980px] h-[320px]  md:h-[420px] xl:h-[500px] 2xl:h-[450px] w-full relative mt-24'>
        <div className='grid md:grid-cols-3 justify-between md:mx-[30px] lg:ml-[100px] 2xl:ml-[300px] rounded-xl'>
          <div className='flex-col col-start-1 col-end-3 mx-6 md:mx-16 mt-10 md:mt-20 2xl:mt-20'>
            <div className=' h-full'>
            <h1 className='md:text-3xl xl:text-5xl font-bold text-white'>BUY & SELL DIGITAL NFT token</h1>
              <p className='text-slate-400 my-6 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur consectetur ab asperiores, ad esse.</p>
              <button className='border-none text-white py-4 bg-blue-300'>Get Started Now</button>
            </div>
            <div className='flex mt-4  md:mt-5 2xl:mt-7 w-full '>
              <div className='flex items-center'>
                <div className='lg:w-10 lg:h-10 w-7 h-7 rounded-full flex items-center justify-center bg-[#95DED0]'>
                  <ArrowSmDownIcon className='w-7 text-blue-700' />
                </div>
                <div><p className='mx-4 w-full text-white'>Scroll Down</p></div>
              </div>
              <div className='-rotate-90 border-t-2 hidden lg:flex  my-10 text-white border-t-green-600'><p className='w-full'>2u + Uturu worldwide</p></div>
              <div className=' px-4 xl:px-0 w-[70%] xl:w-[40%] items-end h-full flex xl:items-end'>
                <p className='text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p> </div>
            </div>
          </div>
          <div className='h-full'>
            <img className='hidden md:flex xl:w-[220px] mt-40' src={image1} alt="/" />
          </div>
        </div>
        <div className='hidden md:flex left-[35%] top-6 lg:top-[15%] w-4 h-4 rounded-full bg-green-500 shadow-slate-600 shadow-md absolute'></div>
        <div className='hidden md:flex left-4 bottom-[30%] w-7 h-7 rounded-full bg-orange-400 shadow-slate-600 shadow-md absolute'></div>
        <div className='hidden md:flex bottom-4 left-[55%] w-4 h-4 rounded-full bg-orange-400 shadow-slate-600 shadow-md absolute'></div>
        <div className='hidden md:flex bottom-[35%] left-[45%] w-4 h-4 rounded-full bg-green-500 shadow-slate-600 shadow-md absolute'></div>
        <div className='hidden md:flex left-[55%] top-[18%] w-4 h-4 rounded-full bg-blue-500 shadow-slate-600 shadow-md absolute'></div>
      </div>
    </div>
  )
}

export default HeroImage
