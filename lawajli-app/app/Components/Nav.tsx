"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { RiCloseLargeLine } from "react-icons/ri";




export default function Nav() {

  const [menuVisible , setMenuVisible] = useState<boolean>(false)
  const [responsiveMenuVisible , setResponsiveMenuVisible] = useState<boolean>(false)
  const popupRef = useRef<HTMLDivElement | null>(null);
  const responsiveMenuRef = useRef<HTMLDivElement | null>(null);
  const { status, data: session } = useSession();

  // Close Menu When Click Outside
  useEffect(()=>{
    const handleClickOutside = (e: MouseEvent) => {
      if(popupRef.current && !popupRef.current.contains(e.target as Node) && menuVisible ) {
        setMenuVisible(false)
      }
      // Close responsive menu if clicked outside
      if (responsiveMenuRef.current && !responsiveMenuRef.current.contains(e.target as Node) && responsiveMenuVisible ) {
        setResponsiveMenuVisible(false);
      }

    }
      document.addEventListener('click', handleClickOutside);

      return ()=> {document.removeEventListener('click', handleClickOutside);}
  },[menuVisible, responsiveMenuVisible])

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
            <li  className='hover:text-orange-300 duration-300'>
            {session ? (
              <Image
              onClick={()=> setMenuVisible(!menuVisible)}
              src={session?.user?.image || "/user-profile.png"}
              width={36}
              height={36}
              alt="profile picture"
              className="picture-profile"
            />
            ):(
            <Link href={"/sign-in"}>
              <CiUser size={28} className='cursor-pointer hover:scale-105 duration-300'/>
            </Link>
            )}
            </li>
        </ul>

        {/* Menu Responsive  */}
        <div  className='lg:hidden md:hidden z-50 shadow-lg'>
          <div ref={responsiveMenuRef} className={` absolute bg-slate-100  w-[50%] top-24 opacity-95 p-5 rounded-l-xl duration-500 ${responsiveMenuVisible ? "block right-0" : "right-[-100%]"}`}>
            <ul className=' flex flex-col  gap-2 font-bold'>
              {session && <li className=' duration-300 border-b pb-3'>Hi <span className='text-orange-600'>{session?.user?.name}</span> 🤗</li>}
              <li className='page-link-menu-responsive'><Link onClick={()=> {setResponsiveMenuVisible(false)}} href={"/private-car"}>PRIVATE</Link></li>
              <li className='page-link-menu-responsive'><Link onClick={()=> {setResponsiveMenuVisible(false)}} href={"/commercial"}>COMMERCIAL</Link></li>
              <li className='page-link-menu-responsive'><Link onClick={()=> {setResponsiveMenuVisible(false)}} href={"/delivery"}>DELIVERY</Link></li>
              <li className='page-link-menu-responsive'><Link onClick={()=> {setResponsiveMenuVisible(false)}} href={"/rent"}>RENT CAR</Link></li>
              {session && (
                <li className='text-sm duration-300 border-t pt-5 ' onClick={()=> {setResponsiveMenuVisible(false)}}>

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
                  <p onClick={()=> signOut()}
                  className='pb-1 hover:text-orange-500 fic cursor-pointer'>
                    <AiOutlineLogout size={18}/> LogOut
                  </p>
                </li>
              )}
            </ul>
          </div>

          <div onClick={()=> setResponsiveMenuVisible(!responsiveMenuVisible)} className='text-white cursor-pointer duration-500'>
            {responsiveMenuVisible ? (
              <RiCloseLargeLine  size={32}/>
            ):(
            <RxHamburgerMenu  size={32}/>
            )}
          </div>
        </div>

        {/* Login Icon Section */}
        <div
        ref={popupRef}
        className={`absolute menu-popup ${menuVisible ? "lg:block md:block" : ""}`}>
          {session && (
              <div>
                <div className='text-xs pb-2 border-b border-slate-400 mb-2'>
                  Hi <span className='text-orange-600'>{session?.user?.name}</span> 🤗
                </div>
                <Link href={"/dashboard/my-vehicles"} onClick={()=> {setMenuVisible(false)}}>
                  <p className='pb-1 hover:text-orange-500 fic'>
                    <IoCarSportOutline size={18}/>My Vehicles
                  </p>
                </Link>
                <Link href={"/dashboard"} onClick={()=> {setMenuVisible(false)}}>
                  <p className='pb-1 hover:text-orange-500 fic' onClick={()=> {setMenuVisible(false)}}>
                    <LuLayoutDashboard size={18}/>Dashboard
                  </p>
                </Link>
                <p onClick={()=> signOut()} className='pb-1 hover:text-orange-500 fic cursor-pointer'>
                  <AiOutlineLogout size={18}/> LogOut
                </p>
              </div>
          )}
         
        </div>
        
    </div>
  )
}
