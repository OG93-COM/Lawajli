"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser, CiSettings } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { useSession } from 'next-auth/react';



export default function Nav() {

  const [togglePop , setTogglePop] = useState<boolean>(false)
  const { status, data: session } = useSession();

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
            <li onClick={()=> setTogglePop(!togglePop)} className='hover:text-orange-300 duration-300'>
            {session ? (
              <Image
              src={session?.user?.image || "/user-profile.png"}
              width={36}
              height={36}
              alt="profile picture"
              className="picture-profile"
            />
            ):(
            <CiUser size={28} className='cursor-pointer hover:scale-105 duration-300'/>
            )}
            
            </li>
        </ul>
        <RxHamburgerMenu className='lg:hidden md:hidden text-white' size={32}/>
        <div className={`absolute menu-popup ${togglePop ? "lg:block md:block" : ""}`}>
          <Link href={"/sign-in"}>
            <p className='pb-1 hover:text-orange-500 fic'>
            <AiOutlineLogin size={18}/> Login
            </p>
          </Link>
          <Link href={"/dashboard"}>
            <p className='pb-1 hover:text-orange-500 fic'>
              <LuLayoutDashboard size={18}/>Dashboard
            </p>
          </Link>
          <Link href={"#"}>
            <p className='pb-1 hover:text-orange-500 fic'>
              <CiSettings size={18}/>Setting
            </p>
          </Link>
        </div>
    </div>
  )
}
