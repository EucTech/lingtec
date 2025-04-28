import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[30em] sm:min-h-[40em] relative flex flex-col items-center justify-center font-sf bg-[#101010] text-white py-20 sm:px-10 px-5 md:px-20  overflow-hidden">
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-10" />

      <div className="w-full flex flex-col gap-8 items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center gap-4 z-30">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={100}
            direction="up"
            className=""
          >
            <div className="flex items-center justify-center gap-2 text-center">
              <Image
                src={Images.yellow_star}
                alt="Hero Image"
                width={1000}
                height={1000}
                className="w-4 sm:w-6"
              />
              <h1 className="text-white text-[32px] sm:text-[40px] 2xl:text-[50px] font-[700]">
                B2B LLM Annotation & Language Service{" "}
              </h1>
              <Image
                src={Images.purple_star}
                alt="Hero Image"
                width={1000}
                height={1000}
                className="w-4 sm:w-6"
              />
            </div>
          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className="w-full sm:[85%]  md:[75%] xl:w-[60%]"
          >
            <p className="  text-white font-[500] text-[15px] sm:text-[16px] ">
              <span className="text-tyellow">The Mortals behind AI .</span> We
              help businesses train reliable, efficient AI LLM models through
              human lens. Excellent Language service to break communication
              barrier across Africa and Asia
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
            <Link href="/contact-us">
              <h3 className="cursor-pointer text-tpurple text-[20px] font-[600] underline">
                Let&apos;s Chat
              </h3>
            </Link>
          </Fade>
        </div>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className="w-[95%] lg:w-[70%] z-30"
        >
          <Image
            src={Images.hero_img}
            alt="Hero Image"
            width={1000}
            height={1000}
            className=" mx-auto -mb-20 md:-mb-40 z-30"
          />
        </Fade>
      </div>
      <Image
        src={Images.purple_star}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-4 sm:w-6 bottom-20 lg:left-20 left-2 absolute"
      />
      <Image
        src={Images.yellow_star}
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-4 sm:w-6 bottom-20 lg:right-20 right-2 absolute"
      />
    </section>
  );
};

export default HeroSection;
