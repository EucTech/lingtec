import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const GameSericesHero = () => {
  return (
    <section className="w-full min-h-[30em] sm:min-h-[40em] relative flex flex-col items-center justify-center font-sf bg-[#101010] text-white py-20 sm:px-10 px-5 md:px-20  overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full z-10 h-[24em] bottom-0 bg-[url('/bg-pattern.png')] bg-no-repeat bg-contain"></div>
      {/* Gradient Overlay */}
      <div className="absolute size-full z-10 bg-gradient-to-b from-[#10101000] to-[#10101028]"></div>

      <div className="w-full flex lg:flex-row flex-col gap-14 lg:items-start items-center justify-center text-center lg:text-start z-30">
        <div className="flex flex-col lg:items-start items-center justify-center gap-10">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={100}
            direction="up"
            className=""
          >

          <h1 className="text-white leading-[1.2] text-[35px] sm:text-[50px] xl:text-[60px] font-[700]">
            <span className="text-tyellow ">Go beyond</span> standard Gaming
            Testing,
          </h1>

          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className="w-full sm:[85%]  md:[75%] xl:w-[70%]"
          >
          <p className="  text-white font-[500] text-[15px] sm:text-[16px] ">
            Whether you&apos;re a small indie studio or a{" "}
            <span className="text-tyellow">big gaming company,</span> we have
            the expertise to elevate your game to the next level.
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
          <div className="flex items-center justify-start text-nowrap gap-10 mt-6">
            <button className="bg-white Z-50 py-3 px-6 outline-none xl:px-12 text-[#344054] rounded-[10px] text-[16px] cursor-pointer font-[400] hover:bg-white/80 duration-300">
            Get a Qoute
            </button>
            <button className="bg-tpurple Z-50 py-3 px-6 outline-none xl:px-12 text-white rounded-[10px] text-[16px] cursor-pointer font-[400] hover:bg-tpurple/80 duration-300">
              Contact Us
            </button>
          </div>
          </Fade>
        </div>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className="w-[95%] lg:w-[70%]"
        >
        <Image
          src={Images.game_hero_img}
          alt="Hero Image"
          width={1000}
          height={1000}
          className=" w-[500px] xl:w-[600px] mx-auto"
        />
        </Fade>
      </div>
      <Image
        src={Images.yellow_star}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-4 sm:w-6 bottom-20 lg:left-20 left-2 absolute"
      />
      <Image
        src={Images.white_star}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-4 sm:w-6 bottom-20 lg:right-20 right-2 absolute"
      />
    </section>
  );
};

export default GameSericesHero;
