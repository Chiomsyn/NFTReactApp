import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';

export const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    };

      useEffect(() => {
        window.onscroll = function() {
          if (window.scrollY > 0) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
      }, [scroll]);


    return (
        <div className={scroll ? 'w-screen lg:h-24 z-10 bg-white fixed drop-shadow-lg' : 'w-screen lg:h-24 z-10 bg-white fixed'}>
            <div className='relative w-full h-full'>
            <div className='flex justify-between mt-2 xl:mt-0 mx-4 py-2 px-2 md:mx-[70px] items-center xl:mx-[150px] 2xl:mx-[300px]'>
            <div className='flex w-full'>
                <h6 className='text-4xl mt-3 xl:mt-0 lg:text-6xl font-normal'>P<span className='text-indigo-800'>J</span></h6>
                <div className='flex mt-5'>
                    <h2 className='text-2xl xl:text-3xl font-semibold'>Studio</h2>
                    <div className='h-[50%] ml-4 mb-2 border-2 border-zinc-400 lg:h-[80%]'><div></div></div>
                    <ul className='hidden ml-10 lg:flex'>
                        <li className='text-lg font-medium'>Home</li>
                        <li className='text-lg font-medium'>About</li>
                        <li className='text-lg font-medium'>Download</li>
                        <li className='text-lg font-medium'>Features</li>
                    </ul>
                </div>
            </div>
            <div className='flex w-full justify-end items-center'>
                <div className='mt-5 mx-2 flex mb-4 items-center'>
                    <h1>EN/USD</h1>
                    <ChevronDownIcon className='w-7'/>
                </div>
                <div onClick={handleMenu} className='flex lg:hidden'>
                {openMenu ? <XIcon className='w-7'/> : <MenuIcon className='w-7 '/>}
                </div>
                <div className='hidden lg:flex'>
                <button className='mx-4 my-4 '>SignUp</button>
                <button className='mx-4 my-4 bg-blue-300 text-white border-none'>Login</button>
                </div>
            </div>
            </div>
            <div className='hidden md:flex left-4 top-4 w-7 h-7 rounded-full bg-blue-500 shadow-slate-600 shadow-md absolute'></div>
            <div className='hidden md:flex right-4 bottom-1 w-7 h-7 rounded-full bg-orange-400 shadow-slate-600 shadow-md absolute'></div>
            </div>
            {
                openMenu ? 
                <div className='mx-4 md:mx-[100px] bg-white flex flex-col justify-center border-2 border-black py-10 w-[80%] lg:hidden'>
                <ul className='flex-col text-center '>
                            <li className='text-xl my-4 font-medium'>Home</li>
                            <li className='text-xl my-4 font-medium'>About</li>
                            <li className='text-xl my-4 font-medium'>Download</li>
                            <li className='text-xl my-4 font-medium'>Features</li>
                        </ul>
                <button className='mx-4 my-4 block'>SignUp</button>
                <button className='mx-4 my-4 bg-blue-300 text-white border-none'>Login</button>
                </div> : <></>
            }
        </div>
    )
}


