import React from "react";
import Image from "next/image";

function CardCategories({ img, name }: { img: string; name: string }) {
  return (
    <div className="border border-gray-400 h-20 p-1">
      <Image
        alt={name}
        width={80}
        height={80}
        src={img}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default CardCategories;
