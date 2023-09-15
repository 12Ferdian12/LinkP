import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CaroselSection from "@/layouts/home/carosel";
import CategoriesSection from "@/layouts/home/categories";
import ProductListSection from "@/layouts/home/product/index";
import SimpleMap from "@/components/map/Map";
import GmapSection from "@/layouts/home/gmap/Gmap";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkp</title>
        <link rel="icon" type="image/x-icon" href="/images/map.svg" />
      </Head>

      <Navbar />
      <main className="bg-slate-100 min-h-screen py-[70px] space-y-[80px]">
        <CaroselSection />
        <CategoriesSection />
        <ProductListSection />
        <GmapSection />
      </main>
      <Footer />
    </>
  );
}
