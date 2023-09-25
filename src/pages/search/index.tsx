import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DataProduct, dataListProducts } from "@/data/dummy/dataProducts";
import CardProduct from "@/components/cards/cardProduct";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductListSection from "@/layouts/product";

function searchPage() {
  const router = useRouter();
  const { keyword } = router.query;
  const [data, setData] = useState<DataProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function delay() {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsLoading(false);
    }

    if (keyword) {
      setIsLoading(true);
      setData([]);
      const data = dataListProducts.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(keyword.toString().toLowerCase());
      });

      setData(data);
      delay();
    }
  }, [keyword]);

  return (
    <>
      <>
        <Head>
          <title>Linkp</title>
          <link rel="icon" type="image/x-icon" href="/images/map.svg" />
        </Head>

        <Navbar />
        <main className="bg-slate-100 min-h-screen py-[70px] space-y-[80px]">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : data.length > 0 ? (
            <ProductListSection dataListProducts={data} />
          ) : (
            <p>Not Found</p>
          )}
        </main>
        <Footer />
      </>
    </>
  );
}

export default searchPage;
