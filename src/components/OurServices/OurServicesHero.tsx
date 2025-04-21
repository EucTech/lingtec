import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const OurServicesHero = () => {
  return (
    <section className="w-full min-h-[30em] sm:min-h-[40em] relative flex flex-col items-center justify-center font-sf bg-[#101010] text-white py-20 sm:px-10 px-5 md:px-20  overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full z-10 h-[20em] bottom-0 bg-[url('/bg-pattern.png')] bg-no-repeat bg-contain"></div>
      {/* Gradient Overlay */}
      <div className="absolute size-full z-10 bg-gradient-to-b from-[#10101000] to-[#10101028]"></div>

      <div className="w-full flex lg:flex-row flex-col gap-14 lg:items-start items-center justify-center text-center z-30">
        <div className="flex flex-col items-center justify-center gap-10">
          <Fade
               damping={0.5}
               triggerOnce
               fraction={0.1}
               duration={1000}
               delay={100}
               direction="up"
               className="w-full lg:w-[60%]"
             >

          <h1 className="  text-white leading-[1.2] text-[33px] sm:text-[40px] font-[600]">
            With <span className="bg-gradient-to-r from-[#11FF47] to-[#8e0da883] bg-clip-text text-transparent">Lingtec.ai</span>, your brand gets the attention it deserves.
          </h1>

          </Fade>
          <Fade
               damping={0.5}
               triggerOnce
               fraction={0.1}
               duration={1000}
               delay={200}
               direction="up"
               className="w-full sm:[85%]  md:[75%] lg:w-[65%] xl:w-[60%]"
             >
          <p className="  text-white font-[500] text-[15px] sm:text-[16px] ">
            Our AI training services are designed to help organizations train
            and optimize their AI systems with precision, ensuring your models
            perform at their best. From LLM model training to speech
            recognition, our services cater to a wide range of AI needs.
          </p>
          </Fade>
          <Fade
               damping={0.5}
               triggerOnce
               fraction={0.1}
               duration={1000}
               delay={300}
               direction="up"
               className=""
             >

          <button className="bg-[#9450e79c] Z-50 py-3 px-8 sm:px-20 outline-none xl:px-30 text-tyellow rounded-3xl text-[16px] cursor-pointer font-[400] hover:bg-tpurple/80 duration-300">
            Get a Qoute
          </button>
          </Fade>
        </div>
      </div>

    

      <Image
        src={Images.l4}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-20 sm:w-60 bottom-20 lg:left-20 left-2 absolute"
      />
      <Image
        src={Images.l5}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-20 sm:w-60 bottom-20 lg:right-20 right-2 absolute"
      />

      <Image
        src={Images.l2}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-20 sm:w-60 top-10 lg:top-20 lg:left-20 left-2 absolute"
      />
      <Image
        src={Images.l3}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-20 sm:w-60 top-10 lg:top-20 lg:right-20 right-2 absolute"
      />
    </section>
  );
};

export default OurServicesHero;
