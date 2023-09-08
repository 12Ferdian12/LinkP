import React from "react";
import CardProduct from "@/components/cards/cardProduct";

function ProductListSection() {
  return (
    <section className="px-[80px] space-y-5">
      <div className="font-bold text-3xl text-black">Products</div>
      <div className="grid grid-cols-6 gap-6">
        {[...Array(24)].map((item, i) => {
          return <CardProduct />;
        })}
      </div>
    </section>
  );
}

export default ProductListSection;
