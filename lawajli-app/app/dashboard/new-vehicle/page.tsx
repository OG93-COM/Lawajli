

import Nav from '../../Components/Nav'
import Header from '../../Components/Header'
import { auth } from '../../lib/auth';
import Image from 'next/image';
import LogoutBtn from '../../Components/LogoutBtn';
import { redirect } from 'next/navigation';

export default async function NewVehicle() {

    const session = await auth();

    if(!session) {
        redirect("/")
    }
  return (
    <>
    <div className="h-[580px] blue-gradient mb-20 shadow-xl">
      <Nav/>
      <Header/>
    </div>
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <div>Add New Car</div>
    </div>
    </>
  )
}
