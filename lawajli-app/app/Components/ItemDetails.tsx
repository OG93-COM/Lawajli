"use client"

import { itemPrivate } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import Item from './Item'

export default function ItemDetails() {

    const [showNumber, setShowNumber] = useState<boolean>(false);


  return (

    <div>
        <div className='w-full flex justify-center flex-wrap gap-5 p-2 '>
            <div className='lg:w-[450px] md:w-[550px] w-full flex justify-center'>
                <Image src={'/polo8.jpg'} width={550} height={550} alt='Car' className='rounded-3xl'/>
            </div>
            <div className='lg:w-[450px] md::w-[450px] w-[520px] flex flex-col gap-3 mx-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl'>Brooklyn Simmons</h2>
                    <Image src={'/profile-img.png'} width={60} height={60} alt='profile' className='picture-profile rounded-full'/>
                </div>
                    <p className='text-md font-bold text-gray-600 flex justify-start items-center gap-1'><IoLocationOutline />Bizerte</p>
                    <p className='text-l'><span className='font-bold'>Vehicle: </span>Polo8</p>
                    <p className='text-l'><span className='font-bold'>Destination: </span>Ariana, Mannouba, Ben Arous</p>
                    <p className='text-l'>
                        <span className='font-bold'>Tel: </span>
                        {showNumber ? "22 300 040" : <span onClick={()=> setShowNumber(!showNumber)} className='text-sm text-orange-600 cursor-pointer  animate-pulse'>Show Phone Number</span>}
                    </p>
                <div>
                    <p className='text-l font-bold mb-2'>Description :</p>
                    <p>Offering reliable transportation services with my Polo8! Whether it's a quick trip across town or a longer journey, count on a comfortable and safe ride. Professional service tailored to your needs. Contact me for a smooth ride wherever you need to go!</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center lg:mx-48">
            <hr className='mt-10'/>
            <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Related</h2>
            <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
            {itemPrivate && itemPrivate.map((item, idx) => (
                <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
                ))}
            </div>
        </div>
    </div>
  )
}
