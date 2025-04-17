import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";

const Career = () => {
  return (
    <div className="overflow-hidden w-full flex lg:flex-row flex-col items-center justify-center gap-10 md:gap-20 lg:gap-20 xl:gap-30 2xl:gap-40 py-20 px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className=""
      >
        <div className=" overflow-hidden flex flex-col gap-5 font-sf text-center  items-center lg:items-start justify-center lg:text-left">
          <h1 className=" text-[35px] sm:text-[40px] text-[#0A0A0A] font-[700]">
            Careers
          </h1>
          <p className="text-[15px] text-[#5B5B5B] font-[400]">
            Join A Workforce of Amazing People 🤩❤️
          </p>
          <p className="text-[15px] text-[#5B5B5B] font-[400]">
            Be a part of over 40+ amazing heroes spear heading growth in
            Lingtec.ai while excelling in their careers.
          </p>

          <Link href="#">
            <Button className="flex items-center  cursor-pointer bg-tpurple text-[#CBFC01] hover:bg-tpurple/60 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
              <p className="text-[15px] font-[700]">Available Roles</p>
            </Button>
          </Link>
        </div>
      </Fade>
      <Image
        src={Images.c1}
        alt="image"
        width={1000}
        height={1000}
        className="w-[500px]"
      />
    </div>
  );
};

export default Career;
