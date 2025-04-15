import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyChoose = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-16 bg-[#fff] py-10 sm:py-20 px-5 sm:px-10 lg:px-20 ">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[#9350E7] text-[18px] font-[700] font-sf bg-[#E1E1E1]/20 py-1 px-4 rounded-md">
            Why Choose Lingtec
          </p>
          <h1 className=" w-full md:w-[90%] lg:w-[70%] tracking-tight text-[#141011] font-[700] text-[35px] font-sf">
            300+ Languages Across Africa and Asia Now Accessible with a single
            touchbase
          </h1>
          <p className="font-lato text-[#5E5D6F] text-[16px] font-[600]">
            Book a session with us to accessible LLM and AI model training
            through lingtec Ai consult
          </p>
        </div>
      </Fade>
      <div className="w-full font-sf flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 ">
        <div className=" w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  flex flex-col  items-start justify-center gap-4">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={100}
            direction="up"
            className=""
          >
            <div className="flex flex-col items-start gap-1">
              <Image
                src={Images.icon1}
                alt="person image"
                width={1000}
                height={1000}
                className="size-12"
              />
              <h1 className="text-[20px] font-bold mt-3">Data Annotation</h1>
              <p className="text-[#3B3B3B] text-[15px] font-lato">
                Creating innovative software that meets your business needs and
                exceeds expectations.
              </p>
            </div>
          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className=""
          >
            <div className="flex flex-col items-start gap-1">
              <Image
                src={Images.icon3}
                alt="person image"
                width={1000}
                height={1000}
                className="size-12 "
              />
              <h1 className="text-[20px] font-bold mt-3">AI model Training </h1>
              <p className="text-[#3B3B3B] text-[15px] font-lato ">
                Powering the future of artificial intelligence with precise data
                annotation and training for large language models
              </p>
            </div>
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
            <div className="flex flex-col items-start gap-1">
              <Image
                src={Images.icon2}
                alt="person image"
                width={1000}
                height={1000}
                className="size-12"
              />
              <h1 className="text-[20px] font-bold mt-3 ">Language Service</h1>
              <p className="text-[#3B3B3B] text-[15px] font-lato">
                Redefining language solutions through translation,
                interpretation, and more, ensuring communication across all
                borders.
              </p>
            </div>
          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={400}
            direction="up"
            className=""
          >
            <div className="flex flex-col items-start gap-1">
              <Image
                src={Images.icon2}
                alt="person image"
                width={1000}
                height={1000}
                className="size-12"
              />
              <h1 className="text-[20px] font-bold mt-3 ">Game Testing</h1>
              <p className="text-[#3B3B3B] text-[15px] font-lato">
                Ensuring seamless and bug-free gaming experiences through
                comprehensive testing.
              </p>
            </div>
          </Fade>
        </div>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=""
        >
          <Image
            src={Images.person1}
            alt="person image"
            width={1000}
            height={1000}
            className=" w-full flex-1 sm:w-[550px] 2xl:w-[600px]"
          />
        </Fade>
      </div>
    </div>
  );
};

export default WhyChoose;
