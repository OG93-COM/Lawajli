"use client"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";


export default function SearchInput({urlPage}:{urlPage:string}) {
    const [location, setLocation] = useState("")
    const [query] = useDebounce(location,500)
    const router = useRouter()
    console.log(query)

    useEffect(()=>{
        if(!query){
            router.push(`/${urlPage}`)
        }else {
            router.push(`/${urlPage}?search=${query}`)
        }
    },[query, router])

  return (
    <div className='flex items-center justify-center max-w-[500px] h-[50px] mx-auto px-2'>
        <div className='bg-[#FF5F05] fic text-white rounded-s-md p-2 font-bold text-md uppercase h-full'></div>
        <input
        type="text"
        value={location}
        onChange={(e)=> setLocation(e.target.value)}
        className='bg-orange-50 p-2 border border-orange-200 w-full shadow-sm h-full'
        placeholder='Location or destination...'
        />

        <button className='bg-[#FF5F05] rounded-r-md text-white px-4 py-3 font-bold h-full hover:bg-orange-500 '><CiSearch size={24}/></button>
    </div>
  )
}
