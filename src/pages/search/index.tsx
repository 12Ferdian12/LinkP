import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DataProduct, dataListProducts } from "@/data/dummy/dataProducts";
import CardProduct from "@/components/cards/cardProduct";

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
    <div>
      <h1>Search Page</h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : data.length > 0 ? (
        data.map((item, i) => {
          return (
            <CardProduct
              image={item.image}
              name={item.name}
              price={item.price}
              link={item.link}
              key={i}
            />
          );
        })
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default searchPage;
