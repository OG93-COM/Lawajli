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
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <SignInBtn/>
    </div>
    </>
  );
}
