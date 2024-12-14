
import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';

import axios from 'axios';
import EditCar from '../../Components/EditCar';

const getDataVehicle = async (vehicleid:string) => {
    try {
      const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/vehicles/${vehicleid}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log("Erro Fetch DaTA Front ", error);
    }
    return null;
  };

export default async function EditVehiclePage({ params }: { params: { vehicleid: string } }) {
    const id = params.vehicleid;
    const session = await auth();

    if(!session) {
        redirect("/sign-in")
    }

    const editedVehicle = await getDataVehicle(id);
  return (
    <>
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
    { editedVehicle ? <EditCar vehicle={editedVehicle} /> : (<div>Invalid Car</div>)}
    </div>
    </>
  )
}
