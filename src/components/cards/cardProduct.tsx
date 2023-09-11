import { DataProduct } from "@/data/dummy/dataProducts";
import { formatMoney } from "@/utils/formatMoney";
import Link from "next/link";
import React from "react";

function CardProduct({ image, name, link, price }: DataProduct) {
  return (
    <Link href={link}>
      <div className="card w-full h-[380px] shadow-xl">
        <figure className="w-full h-[200px] overflow-hidden">
          <img src={image} alt={name} />
        </figure>
        <div className="p-4">
          <h2 className="font-semibold text-black">{name}</h2>
          <p className="font-bold text-black">Rp. {formatMoney(price)}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardProduct;
