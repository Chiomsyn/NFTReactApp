import React from 'react'
import image7 from '../assests/image7.jpg'
import image8 from '../assests/image8.png'
import image9 from '../assests/image9.png'
import image10 from '../assests/image10.png'
import image11 from '../assests/image11.png'
import image12 from '../assests/image12.png'
import image13 from '../assests/image13.png'

const Connect = () => {
  return (
    <div className='md:mt-28 w-full'>
      <div className='text-center mx-4'>
        <h1 className='text-4xl my-4 font-bold'>Connect with your clients through a custom branded</h1>
        <p className='text-slate-400 my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum odit dolores.</p>
      </div>
      <div className='my-6 flex relative'>
          <img src={image7} alt='/' className='w-[100%] h-[500px]'/>
          <div className='absolute rounded-full bg-[#F7A027] top-[10%] right-[50%]'>
          <img src={image8} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
          <div className='absolute rounded-full bg-[#E0AAFE] top-[30%] right-[20%]'>
          <img src={image9} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
          <div className='absolute rounded-full bg-[#465565] bottom-[30%] left-[20%]'>
          <img src={image10} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
          <div className='absolute rounded-full bg-[#39C29A] bottom-[70%] left-[4%]'>
          <img src={image11} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
          <div className='absolute rounded-full bg-[#1293EC] bottom-[30%] right-[10%]'>
          <img src={image12} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
          <div className='absolute rounded-full bg-[#F8794B] bottom-[50%] left-[50%]'>
          <img src={image13} alt='/' className='w-14 h-14 rounded-full'/>
          </div>
      </div>
    </div>
  )
}

export default Connect
