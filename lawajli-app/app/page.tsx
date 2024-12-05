import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Item from "./Components/Item";
import { itemPrivate, itemCommercial, itemDelivery, itemRent} from '../data'
import Categories from "./Components/Categories";
 


export default function Home() {
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
      {itemPrivate && itemPrivate.map((item, idx) => (
          <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
        ))}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Commercial</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {itemCommercial && itemCommercial.map((item, idx) => (
          <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
        ))}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Delivery</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {itemDelivery && itemDelivery.map((item, idx) => (
          <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
        ))}
      </div>

      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Rent Car</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {itemRent && itemRent.map((item, idx) => (
          <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
        ))}
      </div>
    </div>
    </>
  );
}
