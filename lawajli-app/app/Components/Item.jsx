import Image from 'next/image'
import { IoLocationOutline, IoCarSportOutline, IoManOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";


export default function Item({car, imgcar, location, clientName}) {
  return (
    <div className='item flex flex-col justify-start items-center'>
        <div className='relative rounded-t-full h-[229px] '>
            <Image src={imgcar} width={266} height={229} alt='name' className="w-[266px] h-[229px] object-cover"/>
        </div>
        <div className='w-full flex justify-between items-start pt-2 px-3'>
            <div>
                <p className='text-gray-600 font-semibold fic'><IoCarSportOutline />{car}</p>
                <p className='text-gray-600 text-sm mt-1 fic gap-2'><TbUserPentagon/> {clientName}</p>
                <p className='text-gray-600 text-sm mt-3 cursor-pointer hover:text-orange-400'>View Details</p>
            </div>
            <p className='text-xs font-bold text-gray-600 flex justify-end items-center gap-1'><IoLocationOutline />{location}</p>

        </div>
    </div>
  )
}
