import Image from 'next/image'
import React from 'react'
import headerImg from '../../public/header-car.png'

export default function Header() {
  return (
    <div className='h-[400px] flex justify-evenly items-center'>
        <div>
            <h1 className='px-4 text-2xl lg:text-4xl font-bold text-white mb-5'>
                Hello,<br/>Start a new business with Lawajli<br/>Add car and start work!
            </h1>
            <button className='btn-orange w-full lg:w-[400px] mx-4'>Add Your Car</button>
        </div>
        <div className='hidden md:flex lg:flex'>
            <Image src={headerImg} width={500} height={400} alt='header'/>
        </div>
    </div>
  )
}
