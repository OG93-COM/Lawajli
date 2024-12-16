import { auth } from '@/app/lib/auth';
import ItemDetails from '../../Components/ItemDetails'
import axios from 'axios';

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

export default async function DeliveryVehicleDetail( {params}: {params: {deliveryid:string}} ) {
  const itemId = params.deliveryid
  const vehicle = await getDataVehicle(itemId)
  const session = await auth()

  return (
    <div className='flex justify-center items-center'>
        <ItemDetails
        vehicle={vehicle}
        userEmail={session?.user?.email}
        />
    </div>
  )
}
