"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";



export default function Nav() {

  const [togglePop , setTogglePop] = useState<boolean>(false)
  

  return (
    <div className='relative w-full flex justify-between md:justify-around lg:justify-around items-center p-5 gap-6'>
        <Link href={"/"} className='pl-5'>
            <Image src={'/logo.png'} width={140} height={120} alt='logo'/>
        </Link>
        <ul className='hidden md:flex lg:flex justify-center items-center gap-5 font-bold text-white'>
            <li className='hover:text-orange-300 duration-300'><Link href={"/private-car"}>PRIVATE</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/commercial"}>COMMERCIAL</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/delivery"}>DELIVERY</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/rent"}>RENT CAR</Link></li>
            <li className='hover:text-orange-300 duration-300'>
            <CiUser onClick={()=> setTogglePop(!togglePop)} size={28} className='cursor-pointer hover:scale-105 duration-300'/>
            </li>
        </ul>
        <RxHamburgerMenu className='lg:hidden md:hidden text-white relative' size={32}/>
        <div className={`menu-popup ${togglePop ? "lg:block md:block" : ""}`}>
          <p className='pb-1 hover:text-orange-500 cursor-pointer'>Login</p>
          <p className='pb-1 hover:text-orange-500 cursor-pointer'>Dashboard</p>
          <p className='pb-1 hover:text-orange-500 cursor-pointer'>Setting</p>
        </div>
    </div>
  )
}
