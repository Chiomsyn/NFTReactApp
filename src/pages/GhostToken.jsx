import React from 'react'
import image2 from '../assests/image2.png'
import image4 from '../assests/image4.png'
import { ArrowSmDownIcon } from '@heroicons/react/outline'
import { ChatIcon } from '@heroicons/react/solid'

const GhostToken = () => {
    return (
        <div className='w-full mt-10'>
            <div className='h-[750px] md:h-[500px] bg-[#140624] mb-10'>
                <div className='grid h-full mx-4 xl:ml-[150px] md:ml-[100px] 2xl:mx-[300px] lg:mr-[50px] md:grid-cols-2'>
                    <div className='mt-10'>
                        <h2 className='text-3xl text-white font-bold'>What is Ghost Token</h2>
                        <p className='text-slate-400 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt sequi, autem magni sint similique.</p>
                        <div className='flex py-5'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-[#39C29A]'>
                                <ArrowSmDownIcon className='w-7 text-white' />
                            </div>
                            <div className='flex-cols flex-wrap w-[80%]'>
                                <h1 className='text-white text-xl'>Guaranteed Transaction Security</h1>
                                <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex py-5'>
                            <div className='w-12 h-12 mr-4 rounded-full flex items-center justify-center bg-[#DC2D43]'>
                                <ArrowSmDownIcon className='w-7 text-white' />
                            </div>
                            <div className='flex-cols flex-wrap w-[80%]'>
                                <h1 className='text-white text-xl'>Guaranteed Transaction Security</h1>
                                <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex relative h-full overflow-hidden items-end justify-end'>
                        <img className='w-[70%] lg:w-[50%] skew-y-12 skew-x-12' src={image2} alt="/" />
                        <img className='w-[30%] md:w-[40%] lg:w-[30%] absolute top-[-20px] right-10 md:top-10 md:right-6' src={image4} alt="/" />
                        <div className='absolute flex-col w-[50%] lg:w-[40%] bg-white p-6 top-10 lg:top-[40%] left-8 lg:left-24 rounded'>
                           <div className='relative'>
                           <div className='w-full h-4 bg-[#465565] rounded-xl'></div>
                            <div className='w-full flex justify-end'>
                                <div className='w-[60%] h-4 bg-[#94979B] my-4 rounded-xl'></div>
                            </div>
                            <div className='flex-col mx-[20%]'>
                                    <div className='flex items-center'>
                                    <div className='w-2 h-2 mt-1 bg-[#E46E8D] rounded-full mr-2'></div>
                                    <h1 className='text-[#140624] text-lg font-medium'>Address</h1>
                                    </div>
                                    <div className='flex items-center'>
                                    <div className='w-2 h-2 mt-1 bg-[#E46E8D] rounded-full mr-2'></div>
                                    <h1 className='text-[#140624] text-lg font-medium'>Flags</h1>
                                    </div>
                                </div>
                                <div className=' mx-2 py-2 mt-2 bg-[#465565] rounded-xl text-center text-white text-xl'>Search</div>
                                <ChatIcon className='absolute w-12 right-[-40px] text-[#F39760]'/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GhostToken
