import Image from 'next/image'
import React from 'react'
import headerImg from '../../public/header-car.png'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='h-[400px] flex justify-center items-center -space-x-14'>
        <div className='mx-4 flex flex-col justify-center items-center'>
            <h1 className='px-4 text-2xl lg:text-4xl font-bold text-white mb-5'>
                Hello,<br/>Start a new business with Lawajli<br/>Add car and start work!
            </h1>
            <Link  className='btn-orange w-full lg:w-[400px] mx-4 hover:scale-105 duration-300' href={"/dashboard/new-vehicle"}> 
              <div className='text-center'>Add Your Car</div>
            </Link>
        
        </div>
        <div className='hidden md:flex lg:flex'>
            <Image src={headerImg} width={600} height={500} alt='header' className='drop-shadow-md'/>
        </div>
    </div>
  )
}
