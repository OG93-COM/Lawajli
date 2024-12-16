"use client"

import { itemPrivate } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import Item from './Item'
import { TVehicles } from '../types'
import Link from 'next/link'
import DeleteCarBtn from './DeleteCarBtn'

export default function ItemDetails({vehicle}:{vehicle:TVehicles}) {

    const [showNumber, setShowNumber] = useState<boolean>(false);

    return (
    <div>
        {vehicle ? (
            <>
                <div className='w-full flex justify-center flex-wrap gap-5 p-2 '>
            <div className='lg:w-[450px] md:w-[550px] w-full flex justify-center'>
                <Image src={`${vehicle.imgUrl ? vehicle?.imgUrl : '/photo-vehicle.png'}`} width={550} height={550} alt='Car' className='rounded-3xl'/>
            </div>
            <div className='lg:w-[450px] md::w-[450px] w-[520px] flex flex-col gap-3 mx-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl'>{vehicle.userName}</h2>
                    <Image src={`${vehicle.userImg ? vehicle?.userImg : "/profile-img.png"}`} width={60} height={60} alt='profile' className='picture-profile rounded-full'/>
                </div>
                    <p className='text-md font-bold text-orange-500 flex justify-start items-center gap-1'>
                        <span className='animate-bounce'><IoLocationOutline /></span>{vehicle.location}
                    </p>
                    <p className='text-l'><span className='font-bold'>Vehicle: </span>{vehicle.vehicleName}</p>
                    <p className='text-l'><span className='font-bold'>Destination: </span>{vehicle.destination && (vehicle?.destination).join(', ')}</p>
                    <p className='text-l'>
                        <span className='font-bold'>Tel: </span>
                        {showNumber ? <span>{vehicle.phone}</span> : <span onClick={()=> setShowNumber(!showNumber)} className='text-sm text-orange-600 cursor-pointer  animate-pulse'>Show Phone Number</span>}
                    </p>
                <div>
                    <p className='text-l font-bold mb-2'>Description :</p>
                    <p>{vehicle.content}</p>
                </div>
                <div className='fic'>
                    <Link href={`/dashboard/edit-vehicle/${vehicle.id}`} className='bg-orange-500 text-md font-bold text-white rounded-lg p-2 w-14 fic justify-center'>
                        Edit
                    </Link>
                    <DeleteCarBtn id={vehicle.id}/>
                </div>

            </div>
        </div>

        <div className="flex flex-col justify-center lg:mx-48">
            <hr className='mt-10'/>
            <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Related</h2>
            <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
            {itemPrivate && itemPrivate.map((item, idx) => (
                <Item  key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName} category={item.car}/>
                ))}
            </div>
        </div>
            </>
        ) : (
            "No Article found"
        ) }
    </div>
  )
}
