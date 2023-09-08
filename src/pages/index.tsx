import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CaroselSection from "@/layouts/home/carosel";
import CategoriesSection from "@/layouts/home/categories";
import ProductListSection from "@/layouts/home/product/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-100 min-h-screen py-[70px] space-y-[80px]">
        <CaroselSection />
        <CategoriesSection />
        <ProductListSection />
      </main>
    </>
  );
}
