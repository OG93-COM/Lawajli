import type { Metadata } from "next";
import Nav from "../Components/Nav";
import Header from "../Components/Header";

export const metadata:Metadata = {
  title:"Private car | Lawajli",
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