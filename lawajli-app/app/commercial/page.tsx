import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import { itemCommercial } from "@/data";
import Item from "../Components/Item";

export default function Commercial() {
  return (
    <>
      <div className="h-[580px] blue-gradient mb-20 shadow-xl">
        <Nav />
        <Header />
      </div>
      <div className="flex flex-col justify-center lg:mx-48">
      <h2 className="uppercase text-3xl font-bold mt-10 p-4 text-slate-500">Commercial</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap mt-2">
      {itemCommercial && itemCommercial.map((item, idx) => (
          <Item key={idx} car={item.car} imgcar={item.image} location={item.location} clientName={item.clientName}/>
        ))}
      </div>
    </div>
    </>
  );
}
