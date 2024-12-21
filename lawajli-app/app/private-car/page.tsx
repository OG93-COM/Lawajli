
import Item from '../Components/Item'
import axios from 'axios';
import { TVehicles } from '../types';
import SearchInput from '../Components/SearchInput';

const getAllVehicle = async () => {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/vehicles/`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log("Erro Fetch DaTA Front ", error);
  }
  return null;
};

interface searchProps {
  searchParams : {
    search:string;
  }
}

export default async function PrivateCar({searchParams}:searchProps) {
  const {search} = await searchParams

  const allVehicles = await getAllVehicle()
  const allPrivateVehicles = await allVehicles.filter((car:TVehicles) => car.catName === "private")

  if(search){
    var searchVehicles = allPrivateVehicles.filter((car:TVehicles) => car.location.toLowerCase().includes(search.toLowerCase()) || car.destination?.toString().toLowerCase().includes(search.toLowerCase()))
  }
  

  return (

    <div className="flex flex-col justify-center lg:mx-48 mt-20">
      <div>
        <SearchInput/>
      </div>
      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Private</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {allPrivateVehicles && !search ? (
          allPrivateVehicles.map((item:TVehicles, idx:string) => (
            <Item
            key={idx}
            id={item.id}
            car={item.vehicleName}
            imgcar={item.imgUrl}
            location={item.location}
            clientName={item.userName}
            category={item.catName}
            />
          ))
      ) : (
        searchVehicles.map((item:TVehicles, idx:string) => (
          <Item
          key={idx}
          id={item.id}
          car={item.vehicleName}
          imgcar={item.imgUrl}
          location={item.location}
          clientName={item.userName}
          category={item.catName}
          />
        ))
      )
    }
      </div>
    </div>

  )
}
