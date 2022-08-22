import React from 'react'
import image3 from '../assests/image3.png'
import { ChatIcon } from '@heroicons/react/solid'

const GetNFT = () => {
    return (
        <div className='w-full md:mt-0'>
            <div className='grid lg:grid-cols-2 md:mx-10 lg:ml-[50px] xl:ml-[200px] lg:mr-[50px] h-[700px] md:h-[1000px] lg:h-[450px] mb-10'>
                <div className='relative h-full justify-center flex xl:mt-10 items-end'>
                    <div className='w-[50%] bg-[#9382FD] h-[80%] rounded-xl'></div>
                    <img className='w-[50%] absolute h-full' src={image3} alt="/" />
                    <div className='absolute bottom-[-1px] rounded-2xl p-2 grid grid-cols-3 right-1 bg-[#140624] w-[30%]'>
                        <div className='col-start-1 col-end-3'>
                            <h2 className='text-white text-xl'>566.12k</h2>
                            <p className='text-white text-xs md:text-lg mb-2'>Lorem ipsum dolor.</p>
                            <div className='md:w-16 md:h-16 w-12 h-12 border-8 rounded-full flex justify-center items-center p-2'>
                                <div className='md:w-8 md:h-8 w-4 h-4 border-2 rounded-full p-2'></div>
                            </div>
                        </div>
                        <div className='h-full flex items-end'>
                            <div className='w-10'>
                            <div className='flex justify-center'>
                            <div className='bg-white w-4 h-7 md:h-8 rounded-xl'></div>
                            </div>
                            <div className='flex justify-between'>
                            <div className='bg-white w-4 h-7 md:h-8 rounded-xl'></div>
                            <div className='bg-white w-4 h-7 md:h-8 rounded-xl'></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-20 left-1 bg-white rounded-lg w-[30%] p-2'>
                        <div className='relative'>
                        <h1 className='text-sm'>Virtual Services</h1>
                        <p className='text-slate-400 text-xs'>Lorem ipsum dolor sit amet consectetur.</p>
                        <ChatIcon className='absolute w-12 right-[-30px] bottom-[-30px] md:top-[-30px] text-[#F39760]'/>
                        </div>
                    </div>
                </div>
                <div className='grid content-center mx-4 md:mx-0 md:mt-4'>
                    <div className='text-center lg:text-justify'>
                        <h2 className='text-3xl font-bold mt-4'>Get NFTs that can be burnt for unique prizes</h2>
                        <p className='text-slate-400 py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aperiam quidem ipsa?</p>
                        <button className='border-none text-white py-4 bg-blue-300'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetNFT
