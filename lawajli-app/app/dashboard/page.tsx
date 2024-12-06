import Nav from '../Components/Nav'
import Header from '../Components/Header'
import { auth } from '../lib/auth';
import Image from 'next/image';
import LogoutBtn from '../Components/LogoutBtn';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Dashboard() {

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
        <Image src={session?.user?.image ? session?.user?.image : "/profile-img.png"} width={150} height={150} alt="Profile" className='rounded-full shadow-md border-4 border-slate-100'/>
        <h2 className='text-xl font-semibold text-slate-600 uppercase mt-5'>{session?.user?.name}</h2>
        <h2 className='text-sm font-semibold text-slate-600 mb-4'>{session?.user?.email}</h2>
        <Link  className='btn-orange w-[300px] mx-4 hover:scale-105 duration-300' href={"/dashboard/new-vehicle"}>
              <div className='text-center'>Add Your Car</div>
            </Link>
        <LogoutBtn/>
    </div>
    </>
  )
}
