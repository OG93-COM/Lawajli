import Image from 'next/image'
import Link from 'next/link';
import { IoLocationOutline, IoCarSportOutline, IoManOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";


export default function Item({car, imgcar, location, clientName, category, id}) {

  const selectedCat = ()=>{
    if(category === "Private" ||  category === "private"){
      return "private-car"
    }else if(category === "Commercial" || category === "commercial"){
      return "commercial"
    }else if(category === "Delivery" || category === "delivery"){
      return "delivery"
    }else if(category === "Rent" || category === "rent"){
      return "rent"
    }
  }
  const catLink = selectedCat()
  
  return (
    <Link href={`/${catLink}/${id}`} className='item flex flex-col justify-start items-center'>
        <div className='relative w-full rounded-t-full h-[229px]'>
            <Image src={`${imgcar ? imgcar : "/photo-vehicle.png"}`} width={266} height={229} alt='name' className="w-[266px] h-[229px] object-cover rounded-t-lg"/>
        </div>
        <div className='w-full flex justify-between items-start pt-2 px-3'>
            <div className='max-w-[120px]'>
                <p className='text-gray-600 font-semibold fic '><IoCarSportOutline /><span className='text-nowrap overflow-hidden text-ellipsis'>{car}</span></p>
                <p className='text-gray-600 text-sm mt-1 fic '><TbUserPentagon/><span className='text-nowrap overflow-hidden text-ellipsis'>{clientName}</span></p>
                <p className='text-gray-600 text-sm mt-3 cursor-pointer hover:text-orange-400'>View Details</p>
            </div>
            <div className='text-gray-600 flex justify-end items-center gap-1 mt-2'>
              <IoLocationOutline size={14}/>
              <p className='max-w-[80px] text-xs font-bold text-nowrap overflow-hidden text-ellipsis hover:text-pretty'>{location}</p>
            </div>
        </div>
    </Link>
  )
}
