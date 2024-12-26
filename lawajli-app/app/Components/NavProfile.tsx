import React from 'react'
import { auth } from '../lib/auth'
import { CiUser } from 'react-icons/ci'
import Image from 'next/image'

export default async function NavProfile() {
    const session = await auth()
  return (
    <>
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
           
                    </>
  )
}
