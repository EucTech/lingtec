import { Images } from "@/assets";
import { BrandItems } from "@/utils/utilities";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className=" relative overflow-hidden bg-white w-full grid grid-cols-5 items-center justify-center gap-8 py-10 px-10 sm:px-10 md:px-40 lg:px-90">
      {BrandItems.map((item) => {
        return (
          <div className="grid justify-center" key={item.id}>
            <Image
              key={item.id}
              src={item.image}
              alt="Brand Image"
              width={1000}
              height={1000}
              className="w-14 sm:w-20 object-cover"
            />
          </div>
        );
      })}
      <Image
              src={Images.rose_star}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-4 sm:w-6 top-10 lg:left-20 left-2 absolute"
            />
    </div>
  );
};

export default Brands;
