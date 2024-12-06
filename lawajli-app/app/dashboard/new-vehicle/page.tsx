

import Nav from '../../Components/Nav'
import Header from '../../Components/Header'
import { auth } from '../../lib/auth';
import { redirect } from 'next/navigation';
import AddNewCar from '../Components/AddNewCar';

export default async function NewVehicle() {

    const session = await auth();

    if(!session) {
        redirect("/")
    }
  return (
    <>
    
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <AddNewCar/>
    </div>
    </>
  )
}
