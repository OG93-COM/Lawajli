import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
        <div className="mt-20 blue-gradient h-[240px] w-full flex justify-around items-center p-5">
            <Image src={'/logo.png'} width={160} height={100} alt="logo"/>
            <ul className='flex flex-col justify-end items-center gap-5 font-bold text-white'>
                <li className='hover:text-orange-300 duration-300'><Link href={"/private"}>PRIVATE</Link></li>
                <li className='hover:text-orange-300 duration-300'><Link href={"/commercial"}>COMMERCIAL</Link></li>
                <li className='hover:text-orange-300 duration-300'><Link href={"/delivery"}>DELIVERY</Link></li>
                <li className='hover:text-orange-300 duration-300'><Link href={"/rent"}>RENT CAR</Link></li>
            </ul>
        </div>
        <div className="footer-style">Designed by OG93 © Copyright Oussama Galai</div>
    </>
  )
}