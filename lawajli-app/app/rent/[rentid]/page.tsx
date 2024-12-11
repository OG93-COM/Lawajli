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

export default async function RentVehicleDetail( {params}: {params: {rentid:string}} ) {
  const itemId = params.rentid
  console.log(itemId)
  const vehicle = await getDataVehicle(itemId)
  console.log(vehicle)

  return (
    <div className='flex justify-center items-center'>
        <ItemDetails
        vehicle={vehicle}
        />
    </div>
  )
}
