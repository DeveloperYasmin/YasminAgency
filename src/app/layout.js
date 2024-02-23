import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white m-0 p-0 border-spacing-0`}>
        <div className="font-serif min-h-dvh m-auto pl-[50px] pr-[50px] flex flex-col justify-between ">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
