import type { Metadata } from "next";
import Nav from "../Components/Nav";


export const metadata:Metadata = {
  title:"Dashboard | Lawajli",
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
        {children}
        </>
    );
  }