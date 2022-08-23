import React from 'react'
import image3 from '../assests/image3.png'
import { ChatIcon } from '@heroicons/react/solid'

const GetNFT = () => {
    return (
        <div className='w-full md:mt-60 mt-24 lg:mt-0 2xl:mt-60'>
            <div className='grid lg:grid-cols-2 md:mx-10 lg:ml-[50px] xl:ml-[150px] lg:mr-[50px] h-[500px] md:h-[500px] lg:h-[400px] mb-10'>
                <div className='relative w-full xl:pl-28 2xl:justify-center 2xl:pl-0 justify-center xl:justify-start flex items-end'>
                    <div className='w-[60%] xl:w-[70%] bg-[#9382FD] h-[200px] md:h-[400px] lg:h-[250px] 2xl:h-[400px] rounded-t-xl'></div>
                    <img className='w-[50%] md:w-[50%] absolute' src={image3} alt="/" />
                    <div className='absolute bottom-[-1px] rounded-2xl p-2 grid grid-cols-3 right-1 bg-[#140624] w-[30%]'>
                        <div className='col-start-1 col-end-3'>
                            <h2 className='text-white'>566.12k</h2>
                            <p className='text-white text-xs mb-2'>Lorem ipsum dolor.</p>
                            <div className='md:w-12 md:h-12 w-10 h-10 border-8 rounded-full flex justify-center items-center p-1'>
                                <div className='md:w-4 md:h-4 w-2 h-2 border-2 rounded-full p-2'></div>
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
                    <div className='absolute top-20 lg:top-40 left-4 bg-white rounded-lg w-[30%] p-2'>
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
