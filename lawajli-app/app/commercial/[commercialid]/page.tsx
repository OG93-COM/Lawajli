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

export default async function CommercialVehicleDetail( {params}: {params: {commercialid:string}} ) {
  const itemId = params.commercialid
  const vehicle = await getDataVehicle(itemId)

  return (
    <div className='flex justify-center items-center'>
        <ItemDetails
        vehicle={vehicle}
        />
    </div>
  )
}
