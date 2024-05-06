"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Partner from "@/components/partner/Partner";
import ProductList from "@/components/product/ProductList";
import HomeCard from "@/components/HomeCard";
import {Pagination} from "@nextui-org/react";


import CardProduct from "@/components/card/CardProduct";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/lib/constants";

const ENDPOINT = "https://store.istad.co/api/products/";

// import { fetcher } from "../hook/config";
export default function Home() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);

  const onPageChange = (page: number) => setCurrentPage(page);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/api/products/?page=${currentPage}&page_size=10`);
            const data = await response.json();
            console.log(data.results)
            setProducts(data.results);
            const totalPage = Math.ceil(data.total/10);
            setTotalPage(totalPage); // Assuming 10 items per page

        };

        fetchData();
    }, [currentPage]);


  return (
    <main className="w-full">
      <section className="relative  bg-[url(https://png.pngtree.com/background/20211215/original/pngtree-portrait-of-a-beautiful-woman-in-summer-with-long-hair-in-picture-image_1485253.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute max-w-[1200px] inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl *: ltr:sm:text-left rtl:sm:text-right">
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-3xl text-white drop-shadow-sm font-extrabold sm:text-5xl"
            >
              cosmetic beauty shop
              <strong
                data-aos="fade-up"
                data-aos-duration="1000"
                className="block mt-2 font-extrabold text-orange-500"
              >
                {" "}
                premium skincare products{" "}
              </strong>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mt-4 max-w-lg text-white drop-shadow-lg shadow-black sm:text-xl/relaxed"
            >
              Discover a curated selection of premium skincare products designed to nourish, rejuvenate, and protect your skin.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                data-aos="fade-right"
                data-aos-duration="1200"
                href="#"
                className="block w-full ease-in-out transition-all	 duration-300 rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 hover:transition-all sm:w-auto"
              >
                Get Started
              </a>

              <a
                data-aos="fade-right"
                data-aos-duration="1400"
                href="#"
                className="block w-full  ease-in-out transition-all	 duration-300 rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
   {/* partner section */}
    <section className="max-w-[1200px] mx-auto py-4 mb-10" >
      <Partner/>
    </section>

{/* explore section */}
<section className="max-w-[1200px] mx-auto py-4 mb-10" >
      <HomeCard/>
    </section>

{/* section product */}
<section className="max-w-[1200px] mx-auto py-4 mb-10" >
<div className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto ">Product</div>
    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] p-[50px] leading-7 mx-auto">
      {products.map((product: any, index) => (
        <CardProduct
          onClick={() => router.push(`/details/${product.id}`)}
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
   
</section>
<Pagination showControls total={totalPages} onChange={onPageChange} page={currentPage}/>

    </main>
  );
}
