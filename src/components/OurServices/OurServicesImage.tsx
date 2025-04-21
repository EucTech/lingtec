import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

const OurServicesImage = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <Image
        src={Images.l7}
        alt="Hero Image"
        width={3000}
        height={3000}
        className="w-full sm:w-[80%] "
      />
    </div>
  );
};

export default OurServicesImage;
