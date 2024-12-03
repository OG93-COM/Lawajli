import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";


export default function Nav() {
  return (
    <div className='w-full flex justify-between md:justify-around lg:justify-around items-center p-5 gap-6'>
        <Link href={"/"} className='pl-5'>
            <Image src={'/logo.png'} width={140} height={120} alt='logo'/>
        </Link>
        <ul className='hidden md:flex lg:flex justify-center items-center gap-5 font-bold text-white'>
            <li className='hover:text-orange-300 duration-300'><Link href={"/private"}>PRIVATE</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/commercial"}>COMMERCIAL</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/delivery"}>DELIVERY</Link></li>
            <li className='hover:text-orange-300 duration-300'><Link href={"/rent"}>RENT CAR</Link></li>
        </ul>
        <RxHamburgerMenu className='lg:hidden md:hidden text-white' size={32}/>
    </div>
  )
}
