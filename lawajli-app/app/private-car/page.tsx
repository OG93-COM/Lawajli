import React from 'react'
import Item from '../Components/Item'
import axios from 'axios';
import { TVehicles } from '../types';

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

export default async function PrivateCar() {
  const allVehicles = await getAllVehicle()
  const allPrivateVehicles = await allVehicles.filter((car:TVehicles) => car.catName === "private")
  
  return (

    <div className="flex flex-col justify-center lg:mx-48">
      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Private</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {allPrivateVehicles && allPrivateVehicles.map((item:TVehicles, idx:string) => (
          <Item
          key={idx}
          id={item.id}
          car={item.vehicleName}
          imgcar={item.imgUrl}
          location={item.location}
          clientName={item.userName}
          category={item.catName}
          />
        ))}
      </div>
      <div className="mt-5 border-t-2 border-b-2 w-[200px] h-[200px] rounded-full animate-bounce"></div>
    </div>

  )
}
