import CardCategories from "@/components/cards/cardCategories";
import React from "react";

const categories = [
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-1.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-2.jpeg",
    name: "eletronik",
  },
  {
    img: "/images/Img-3.jpeg",
    name: "eletronik",
  },
];

function CategoriesSection() {
  return (
    <section id="categories" className="px-[80px] space-y-5">
      {/* title section */}
      <div className="font-bold text-3xl text-black">Categories</div>
      {/* end title section   */}
      <div className="grid grid-cols-12">
        {categories.map((category, i) => {
          return (
            <CardCategories img={category.img} name={category.name} key={i} />
          );
        })}
      </div>
    </section>
  );
}

export default CategoriesSection;
