import Header from "@/app/Components/Header";
import Nav from "@/app/Components/Nav";
import SignInBtn from "@/app/Components/SignInBtn";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";


export default async function  SignIn() {

    const session = await auth();
    if(session){
        redirect("/dashboard")
    }
  return (
    <>
    <div className="h-[580px] blue-gradient mb-20 shadow-xl">
      <Nav/>
      <Header/>
    </div>
    <div className="w-full  flex flex-col justify-start items-center">
        <h1 className="text-3xl font-bold mb-10">Login to your account</h1>
        <SignInBtn/>
    </div>
    </>
  );
}
