export interface DataProduct {
  name: string;
  image: string;
  price: number;
  link: string;
}

export const dataListProducts: DataProduct[] = [...Array(18)].map((_, i) => ({
  name: "Baju",
  image: "/images/img-1.jpeg",
  price: 100000,
  link: "https://www.google.com",
}));
