import CardCategories from "@/components/cards/cardCategories";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";

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
  const [categoriesData, setCategoriesData] = useState(categories);
  const mediaQueryMd = useMediaQuery("(min-width: 768px)");
  const mediaQueryLg = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (mediaQueryMd[0]) {
      setCategoriesData(categories.slice(0, 16));
    }
    if (mediaQueryLg[0]) {
      setCategoriesData(categories.slice(0, 24));
    }
    if (!mediaQueryMd[0] && !mediaQueryLg[0]) {
      setCategoriesData(categories.slice(0, 8));
    }
  }, [mediaQueryMd, mediaQueryLg]);

  return (
    <section
      id="categories"
      className="px-[10px] md:px-[20px] lg:px-[80px] space-y-5"
    >
      {/* title section */}
      <div className="font-bold text-3xl text-black">Categories</div>
      {/* end title section   */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        {/* {categories
          .filter((_, j) => {
            // return i < 8;
            // codition ? true result : false result
            return mediaQueryMd[0] ? j < 16 : mediaQueryLg[0] ? j < 24 : j < 8;
          })
          .map((category, i) => {
            return (
              <CardCategories img={category.img} name={category.name} key={i} />
            );
          })} */}
        {categoriesData &&
          categoriesData.map((category, i) => {
            return (
              <CardCategories img={category.img} name={category.name} key={i} />
            );
          })}
      </div>
    </section>
  );
}

export default CategoriesSection;
