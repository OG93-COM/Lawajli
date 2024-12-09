import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Item from "./Components/Item";
import { itemPrivate, itemCommercial, itemDelivery, itemRent} from '../data'
import Categories from "./Components/Categories";
import axios from "axios";
import { TVehicles } from "./types";
 

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


export default async function Home() {

  const allVehicles = await getAllVehicle()
  const activeVehicles = await allVehicles.filter((allCar:TVehicles) => allCar.status === "Active")
  const allPrivateVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "Private")
  const allCommercialVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "Commercial" )
  const allDeliveryVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "Delivery")
  const allRentVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "Rent")

  return (
    <>
    <div className="h-[580px] blue-gradient mb-20 shadow-xl">
      <Nav/>
      <Header/>
    </div>
    <Categories/>

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
          category={item.catName}/>
          ))}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Commercial</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {allCommercialVehicles && allCommercialVehicles.map((item:TVehicles, idx:string) => (
          <Item
          key={idx}
          id={item.id}
          car={item.vehicleName}
          imgcar={item.imgUrl}
          location={item.location}
          clientName={item.userName}
          category={item.catName}/>
        ))}
        {allCommercialVehicles.length < 1 && "No Car Found"}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Delivery</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {allDeliveryVehicles && allDeliveryVehicles.map((item:TVehicles, idx:string) => (
          <Item
          key={idx}
          id={item.id}
          car={item.vehicleName}
          imgcar={item.imgUrl}
          location={item.location}
          clientName={item.userName}
          category={item.catName}/>
        ))}
        {allDeliveryVehicles.length < 1 && "No Car Found"}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Rent Car</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {allRentVehicles && allRentVehicles.map((item:TVehicles, idx:string) => (
          <Item
          key={idx}
          id={item.id}
          car={item.vehicleName}
          imgcar={item.imgUrl}
          location={item.location}
          clientName={item.userName}
          category={item.catName}/>
        ))}
        {allRentVehicles.length < 1 && "No Car Found"}
      </div>
    </div>
    </>
  );
}
