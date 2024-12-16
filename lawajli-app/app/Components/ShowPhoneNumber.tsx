"use client"

import { useState } from "react";
import { TVehicles } from "../types";

export default function ShowPhoneNumber({vehicle}:{vehicle:string}) {
    const [showNumber, setShowNumber] = useState<boolean>(false);

  return (
    <>
    {showNumber ? <span>{vehicle}</span> : <span onClick={()=> setShowNumber(!showNumber)} className='text-sm text-orange-600 cursor-pointer  animate-pulse'>Show Phone Number</span>}
    </>
  )
}
