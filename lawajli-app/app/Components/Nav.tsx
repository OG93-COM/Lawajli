"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';



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
          {session ? (
              <div>
                <div className='text-xs pb-2 border-b border-slate-400 mb-2'>
                  Hi <span className='text-orange-600'>{session?.user?.name}</span> 🤗
                </div>
                <Link href={"/dashboard/my-vehicles"}>
                  <p className='pb-1 hover:text-orange-500 fic'>
                    <IoCarSportOutline size={18}/>My Vehicles
                  </p>
                </Link>
                <Link href={"/dashboard"}>
                  <p className='pb-1 hover:text-orange-500 fic'>
                    <LuLayoutDashboard size={18}/>Dashboard
                  </p>
                </Link>
                <p onClick={()=> signOut()} className='pb-1 hover:text-orange-500 fic cursor-pointer'>
                  <AiOutlineLogout size={18}/> LogOut
                </p>
              </div>
          ):(
            <Link href={"/sign-in"}>
              <p className='pb-1 hover:text-orange-500 fic'>
              <AiOutlineLogin size={18}/> Login
              </p>
            </Link>
          )}
         
        </div>
        
    </div>
  )
}
