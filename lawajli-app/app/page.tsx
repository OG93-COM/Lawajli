import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
    <div className="h-[500px] bg-gradient-to-r from-[#1488CC] to-[#2B32B2]">
      <Nav/>
      <Header/>
    </div>
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1>Lawajli</h1>
    </div>
    </>
  );
}
