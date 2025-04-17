import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhatSetUs = () => {
  return (
    <div className="overflow-hidden w-full flex lg:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40 py-20 px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40">
     
        <Image
          src={Images.w1}
          alt="image"
          width={1000}
          height={1000}
          className="w-[500px]"
        />

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className=""
      >
        <div className="flex flex-col gap-5 font-sf text-center lg:text-left">
          <h1 className=" text-[35px] sm:text-[40px] text-[#0A0A0A] font-[700]">
            What Sets Us Apart
          </h1>
          <p className="text-[15px] text-[#5B5B5B] font-[400]">
            For starters, we&apos;re not just another AI or language services
            provider—we&apos;re your strategic partner in unlocking the power of
            data and communication. Our unique blend of expert data annotation,
            cutting-edge AI model training and development, and seamless
            professional language services provide a holistic approach to your
            business needs. This integrated expertise allows us to refine your
            data, build intelligent solutions, and connect you globally, all
            under one roof, ensuring consistent quality and a streamlined
            process.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default WhatSetUs;
