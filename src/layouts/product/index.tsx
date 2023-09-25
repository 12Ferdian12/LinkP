import React from "react";
import CardProduct from "@/components/cards/cardProduct";
import { DataProduct } from "@/data/dummy/dataProducts";

function ProductListSection({
  dataListProducts,
}: {
  dataListProducts: DataProduct[];
}) {
  return (
    <section className="px-[80px] space-y-5">
      <div className="font-bold text-3xl text-black">Products</div>
      <div className="grid grid-cols-6 gap-6">
        {dataListProducts.map((item, i) => {
          return (
            <CardProduct
              image={item.image}
              name={item.name}
              price={item.price}
              link={item.link}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductListSection;
