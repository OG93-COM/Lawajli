import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Item from "./Components/Item";
import { FcNext } from "react-icons/fc";
import Categories from "./Components/Categories";
import axios from "axios";
import { TVehicles } from "./types";
import Link from "next/link";


const getAllVehicle = async () => {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/vehicles/`);
    if (res.status === 200) {
      return res.data.filter((item:TVehicles) => item.status === "Active");
    }
  } catch (error) {
    console.log("Erro Fetch DaTA Front ", error);
  }
  return null;
};


export default async function Home() {

  const allVehicles = await getAllVehicle()
  const activeVehicles = await allVehicles.filter((allCar:TVehicles) => allCar.status === "Active")
  const allPrivateVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "private").slice(0,4)
  const allCommercialVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "commercial" ).slice(0,4)
  const allDeliveryVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "delivery").slice(0,4)
  const allRentVehicles = await activeVehicles.filter((car:TVehicles) => car.catName === "rent").slice(0,4)

  return (
    <>
    <div className="h-[470px] blue-gradient mb-20 shadow-xl">
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
              {allPrivateVehicles.length < 1 ? ("No Car Found") : (
                <Link href={"/private-car"} className="fic animate-pulse hover:scale-105 hover:animate-none duration-300">
                  <FcNext size={48}/>
                </Link>
              )}
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
        {allCommercialVehicles.length < 1 ? ("No Car Found") : (
          <Link href={"/commercial"} className="fic animate-pulse hover:scale-105 hover:animate-none duration-300">
            <FcNext size={48}/>
          </Link>
        )}
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
        {allDeliveryVehicles.length < 1 ? ("No Car Found") : (
          <Link href={"/delivery"} className="fic animate-pulse hover:scale-105 hover:animate-none duration-300">
            <FcNext size={48}/>
          </Link>
        )}
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
        {allRentVehicles.length < 1 ? ("No Car Found") : (
          <Link href={"/rent"} className="fic animate-pulse hover:scale-105 hover:animate-none duration-300">
            <FcNext size={48}/>
          </Link>
        )}
      </div>
    </div>
    </>
  );
}
