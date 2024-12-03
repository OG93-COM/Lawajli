import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import CatItems from "./Components/CatItems"

const catItem = [
  {
    name:"Private",
    image:"/cat-private.png"
  },
  {
    name:"Commercial",
    image:"/cat-commercial.png"
  },
  {
    name:"Delivery",
    image:"/cat-delivery.png"
  },
  {
    name:"Rent Car",
    image:"/cat-rent.png"
  },
]

export default function Home() {
  return (
    <>
    <div className="h-[500px] bg-gradient-to-r from-[#1488CC] to-[#2B32B2] mb-5">
      <Nav/>
      <Header/>
    </div>
    <div className="flex justify-center items-center flex-wrap gap-4">
      {catItem && catItem.map((item, idx) => (
        <CatItems key={idx} name={item.name} imgcat={item.image}/>
      ))}
    </div>
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Lawajli</h1>
    </div>
    </>
  );
}
