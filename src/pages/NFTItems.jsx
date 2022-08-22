import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/solid'

const NFTItems = () => {
    return (
        <div className='w-full mt-20'>
            <div className='mx-4 xl:ml-[150px] md:ml-[70px] 2xl:mx-[300px] lg:mr-[50px] grid md:grid-cols-2 gap-x-6'>
                    <div className='relative flex w-full justify-end h-[450px]  mt-2'>
                        <div className='flex-col mt-10 justify-center'>
                            <p className='text-center'>DC1</p>
                            <div className=' w-10 sm:w-20 h-72 rounded-2xl mt-4 bg-gradient-to-b from-[#E0AAFE]'></div>
                        </div>
                        <div className='flex-col justify-center shadow-white shadow-2xl'>
                            <p className='text-center'>DC1</p>
                            <div className='w-10 sm:w-20 h-72 rounded-2xl mt-4 ml-2 bg-gradient-to-b from-[#F88D7D]'></div>
                        </div>
                        <div className='flex-col mt-16 justify-center'>
                            <p className='text-center'>DC1</p>
                            <div className='w-10 sm:w-20 h-60 rounded-2xl mt-4 mx-2 bg-gradient-to-b from-[#8ECAF5]'></div>
                        </div>
                        <div className='bg-[#21598E] absolute w-[65%] pb-2 rounded-xl px-4 left-4 top-4'>
                        <div className='flex justify-between border-b-2 border-white pb-2 pt-4'>
                            <h1 className='text-white text-xl'>Data Chart</h1>
                            <div className='bg-[#9382FD] p-2 rounded-xl'>
                                <HeartIcon className='w-8 text-white' />
                            </div>
                        </div>
                        <div className='mt-4 flex justify-between items-center'>
                               <div className='flex-col w-[60%] mr-4'>
                               <div className='flex border-b-2 w-full justify-between'>
                                    <div className='flex'>
                                        <div className='w-2 h-2 mt-1 bg-[#E46E8D] rounded-full mr-2'></div>
                                        <h1 className='text-white text-sm'>BTS GOAT</h1>
                                    </div>
                                    <h1 className='text-white text-xl'>75%</h1>
                                </div>

                                <div className='flex mt-4 border-b-2 w-full justify-between'>
                                    <div className='flex'>
                                        <div className='w-2 h-2 mt-1 bg-[#F7A027] rounded-full mr-2'></div>
                                        <h1 className='text-white text-sm'>BTS GOAT</h1>
                                    </div>
                                    <h1 className='text-white text-xl'>75%</h1>
                                </div>

                                <div className='flex mt-4 border-b-2 w-full justify-between'>
                                    <div className='flex'>
                                        <div className='w-2 h-2 mt-1 bg-[#9382FD] rounded-full mr-2'></div>
                                        <h1 className='text-white text-sm'>BTS GOAT</h1>
                                    </div>
                                    <h1 className='text-white text-xl'>75%</h1>
                                </div>
                               </div>
                            <div className="flex flex-wrap justify-center items-center w-20 h-20 
                                         border-8 border-t-[#E46E8D] border-r-[#F7A027] 
                                         border-b-[#9382FD] border-l-[#9382FD] rounded-full"> 
                        <div className='bg-white rounded-full h-10 w-10'>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-[70%] right-10 bottom-14 bg-white border-2 border-white drop-shadow-md rounded-xl pr-20 pl-10 py-4'>
                        <div className='flex'>
                            <div className='w-8 h-8 rounded-full flex justify-center bg-red-500'><HeartSolid className='w-6 text-white'/></div>
                            <h1 className='text-slate-400 ml-4 text-xl'>Followers</h1>
                        </div>
                        <div className='text-3xl font-bold'>261.22k</div>
                        <div className='flex flex-wrap'>
                            <h1 className='text-green-500 mr-2'>4.3%</h1>
                            <p>vs last 7 days</p>
                        </div>
                    </div>
                    </div>
                <div className=''>
                    <h2 className='text-3xl font-bold md:mt-20 mb-10 xl:text-5xl'>Big online marketplace to buy sell NFT items</h2>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores modi deleniti!</p>
                    <div className='flex justify-between my-6 md:mr-10 2xl:mr-40'>
                        <div className='hover:border-2 py-6 hover:border-red-400 rounded-[30%] px-2'>
                            <h1 className='text-3xl font-bold'>100M</h1>
                            <p className='font-bold text-xs mt-2 sm:text-lg'>Free stable tokens</p>
                        </div>
                        <div className='hover:border-2 py-6 hover:border-red-400 rounded-[30%] px-2'>
                            <h1 className='text-3xl font-bold'>305M</h1>
                            <p className='font-bold text-xs mt-2 sm:text-lg'>Market Supply</p>
                        </div>
                        <div className='hover:border-2 py-6 hover:border-red-400 rounded-[30%] px-2'>
                            <h1 className='text-3xl font-bold'>15.3%</h1>
                            <p className='font-bold text-xs mt-2 sm:text-lg xl:text-xl'>Market Cap</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTItems
