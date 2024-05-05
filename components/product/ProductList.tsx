import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function ProductList() {
  const router = useRouter();
  const [productlist, setProductlist] = React.useState([]);
  const list: any = [
    {
      id: 1,
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      id: 2,
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      id: 3,
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      id: 4,
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      id: 5,
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      id: 6,
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      id: 7,
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start ">
      <div className="w-full justify-start flex mb-4">
        <h4 className="text-2xl">Product</h4>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item: any, index: number) => (
          <Card
          onPress={() => router.push("/details/" + item.id)}
            shadow="sm"
            key={index}   
            isPressable
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
