import React from "react";

function CardProduct() {
  return (
    <div className="card w-full shadow-xl">
      <figure>
        <img src="/images/Img-1.jpeg" alt="Shoes" />
      </figure>
      <div className="p-2">
        <h2 className="font-semibold text-black">Shoes!</h2>
        <p className="font-bold text-black">Rp.150.000</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
