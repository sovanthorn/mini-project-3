"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function InfiniteCarouselComponent() {
  return (
    <main>

<div className="w-full flex flex-col justify-start mt-10">
      <div className="w-full justify-start flex mb-4">
        <h4 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto ">OurPartner</h4>
        <div className="flex justify-center items-center ">
          <Marquee
            gradient
            pauseOnHover={false} // Changed from true to false
            className="h-[100px]  overflow-hidden grid mt-10"
          >
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../rolex.png" className="w-20  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img2.png" className="w-40  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img3.png" className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../images.png" className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img2.png" className="w-56 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img5.png" className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img3.png" className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../img5.png" className="w-40 " alt="" />
            </div>
          </Marquee>
      </div>
      </div>
      </div>
    </main>
     );
    }
    