"use client"
import { signOut } from 'next-auth/react'
import { AiOutlineLogout } from 'react-icons/ai'

export default function LogoutBtn() {
  return (
    <button onClick={()=> signOut()} className='btn-gray cursor-pointer fic my-5'>
        <AiOutlineLogout size={18}/> LogOut
    </button>
  )
}
