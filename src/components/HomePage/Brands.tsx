import { Images } from "@/assets";
import { BrandItems } from "@/utils/utilities";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className=" relative overflow-hidden bg-[#F9F8FE] w-full flex flex-col items-center justify-center gap-5 py-10 px-10 sm:px-10 md:px-16 lg:px-20">
      <h1 className="text-[35px] sm:text-[28px] font-[700] font-sf text-center text-tpurple">
        Trusted by Global Brands{" "}
      </h1>

      <div className="w-full grid grid-cols-3 md:grid-cols-7 items-center justify-center gap-8 ">
        {BrandItems.map((item) => {
          return (
            <div
              className=" gap-10 grid items-center justify-items-center"
              key={item.id}
            >
              <Image
                key={item.id}
                src={item.image}
                alt="Brand Image"
                width={2000}
                height={2000}
                className="w-20 md:w-[40rem] object-contain"
              />
            </div>
          );
        })}
        <Image
          src={Images.rose_star}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-4 sm:w-8 top-10 lg:left-20 left-2 absolute"
        />
      </div>
    </div>
  );
};

export default Brands;
