import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='grid mx-auto grid-cols-2 justify-items-center md:grid-cols-4 gap-y-8 mb-4 '>
          <div className=''>
              <h1 className='text-2xl font-bold text-slate-800'>Contact us</h1>
              <ul>
              <li>About Us</li>
              <li>Portfolio</li>
              </ul>
          </div>
          <div className=''>
              <h1 className='text-2xl font-bold text-slate-800'>Company</h1>
               <ul>
              <li>About Us</li>
              <li>Portfolio</li>
              </ul>
          </div>
          <div className=''>
              <h1 className='text-2xl font-bold text-slate-800'>Our Services</h1>
              <ul>
              <li>Web Solution</li>
              <li>Web Research</li>
              </ul>
          </div>
          <div className=''>
              <h1 className='text-2xl font-bold text-slate-800'>Opening hour</h1>
              <ul>
              <li>About Us</li>
              <li>Portfolio</li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer
