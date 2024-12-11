import type { Metadata } from "next";
import Nav from "../Components/Nav";


export const metadata:Metadata = {
  title:"Rent Car | Lawajli",
  description:"App Lawajli",
  openGraph: {
    title: 'Lawajli',
    description: 'Find you solution with us',
    images: ["/logo.png"]
  }
}

export default function PrivateCarLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
        <div className="blue-gradient mb-20 shadow-xl">
          <Nav/>
        </div>
        {children}
        </>
    );
  }