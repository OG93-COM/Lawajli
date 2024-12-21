import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Footer from "./Components/Footer";
import { SessionProvider } from "next-auth/react";
import Nav from "./Components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lawajli - Find A Transportation Solution with Us",
  description: "Exchange Business Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
        <div className="blue-gradient">
          <Nav/>
        </div>
        {children}
        <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
