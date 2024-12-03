import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";

export default function Item() {
  return (
    <div className='item flex flex-col justify-center items-center'>
        <div className='rounded-t-full'>
            <Image src={"/client.jpg"} width={266} height={229} alt='name'/>
        </div>
        <div className='w-full flex justify-between items-start pt-2 px-3'>
            <div>
                <p className='text-gray-600 font-semibold'>Polo 8</p>
                <p className='text-gray-600 text-sm'>Simmon</p>
                <p className='text-gray-600 text-sm mt-3 cursor-pointer hover:text-orange-400'>View Details</p>
            </div>
            <p className='text-xs font-bold text-gray-600 flex justify-end items-center gap-1'><IoLocationOutline /> Bizerte</p>

        </div>
    </div>
  )
}
