import React from 'react'
import { ArrowSmDownIcon } from '@heroicons/react/outline'

const HeroText = () => {
    return (
        <div className='w-full my-10 mt-5'>
            <div className=''>
                <div className='flex flex-col md:ml-10 justify-center text-center'>
                    <div className='flex justify-center flex-wrap px-4'>
                        <p className='flex px-2 py-2 font-medium text-2xl'>avast</p>
                        <p className='flex text-red-500  px-2 md:px-10 py-2 font-medium text-2xl'>BuzzFeed</p>
                        <p className='flex text-blue-900 px-2 md:px-10 py-2 font-medium text-2xl'>Booking<span className='text-blue-300'>.com</span></p>
                        <p className='flex text-blue-900 px-2 md:px-10 py-2 font-medium text-2xl'>Expedia</p>
                        <p className='flex px-10 py-2 font-medium text-2xl'>Dispatch</p>
                    </div>
                </div>
                <div className='flex justify-center mx-4 my-10'>
                    <p className=' text-center text-3xl font-medium'>This is The Advantage You Get When You Join Us</p>
                </div>
                <div className='bg-[#2F313E] my-10 lg:h-[470px]'>
                    <div className=' mx-4 sm:mx-[70px] xl:mx-[250px] 2xl:mx-[200px] lg:flex lg:justify-center'>
                        <div className='flex-col pt-10 mr-10 items-center pl-4 sm:hover:bg-[#414654] h-full w-full rounded-2xl my-10'>
                            <div className='w-14 h-14 rounded-full flex items-center justify-center bg-[#F7A027] shadow-lg shadow-[#F7A027]'>
                                <ArrowSmDownIcon className='w-7 text-blue-700' />
                            </div>
                            <h2 className='text-2xl my-10 text-white'>Safe Transaction Security</h2>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque doloribus soluta.</p>
                            <button className='rounded-full my-10 border-none text-white py-4 bg-[#F8794B]'>Learn More</button>
                        </div>
                        <div className='mr-10 flex-col pt-1 items-center pl-4 sm:hover:bg-[#414654] h-full w-full rounded-2xl my-10'>
                            <div className='w-14 my-10 h-14 rounded-full flex items-center justify-center bg-[#2EC79B]'>
                                <ArrowSmDownIcon className='w-7 text-blue-700' />
                            </div>
                            <h2 className='text-2xl my-10 text-white'>Low Coin Exchange Fee</h2>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque doloribus soluta.</p>
                            <button className='rounded-full my-10 border-none text-white py-4 bg-[#2EC79B]'>Learn More</button>
                        </div>
                        <div className=' flex-col items-center pt-1 pl-4 sm:hover:bg-[#414654] h-full w-full rounded-2xl my-10'>
                            <div className='w-14 my-10 h-14 rounded-full flex items-center justify-center bg-[#1293EC]'>
                                <ArrowSmDownIcon className='w-7 text-blue-700' />
                            </div>
                            <h2 className='text-2xl my-10 text-white'>Safe Transaction Security</h2>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque doloribus soluta.</p>
                            <button className='rounded-full my-10 border-none text-white py-4 bg-[#1293EC]'>Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroText
