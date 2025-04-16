import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Images } from "@/assets";

const HowItWorks = () => {
  return (
    <div className=" overflow-hidden flex flex-col items-center justify-center gap-10 px-5 sm:px-20">
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-center font-sf gap-5 lg:gap-16 ">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=""
        >
          <h1 className=" text-[30px] sm:text-[40px] font-sf text-[#0A0A0A] font-[700] text-nowrap">
            How It Works
          </h1>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className="w-full lg:w-[40%]"
        >
          <p className=" text-[15px] font-[500] text-[#3B3B3B] font-lato ">
            Let&apos;s build smarter AI together! Whether you need high-quality
            data annotation, LLM fine-tuning, or AI model optimization, our
            expert team is here to help. Book a call today and take the first
            step toward enhancing your AI solutions!
          </p>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={600}
          direction="up"
          className=""
        >
          <Link href="#">
            <Button className="flex items-center cursor-pointer bg-tpurple text-white hover:bg-tpurple/60 transition-colors duration-300 px-5 py-6 gap-2 rounded-3xl">
              <p className="text-[15px] font-[700]">Book a Call Now</p>
            </Button>
          </Link>
        </Fade>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 2xl:gap-40">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=""
        >
          <div className=" w-[90%] sm:w-[330px] min-h-[500px] flex flex-col items-center gap-5">
            <Image
              src={Images.h1}
              alt="image"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="flex flex-col items-start text-justify gap-3 p-4">
              <h2 className="text-[#191A15] font-sf font-[700] text-[20px]">
                BOOk a Call with our Team
              </h2>
              <p className=" font-lato font-[500] text-[#777373]">
                Schedule a free consultation with our team to discuss your
                business needs for LLM training, data annotation, and AI
                solutions.
              </p>
            </div>
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
          <div className=" min-w-[80%] sm:w-[330px] min-h-[500px] flex flex-col items-center gap-5">
            <Image
              src={Images.h2}
              alt="image"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="flex flex-col items-start text-justify gap-3 p-4">
              <h2 className="text-[#191A15] font-sf font-[700] text-[20px]">
                Get a Custom Strategy
              </h2>
              <p className=" font-lato font-[500] text-[#777373]">
                We assess your requirements and provide a tailored solution,
                including high-quality dataset curation, model fine-tuning, and
                annotation workflows.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={600}
          direction="up"
          className=""
        >
          <div className=" min-w-[80%] sm:w-[330px] min-h-[500px] flex flex-col items-center gap-5">
            <Image
              src={Images.h3}
              alt="image"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="flex flex-col items-start text-justify gap-3 p-4">
              <h2 className="text-[#191A15] font-sf font-[700] text-[20px]">
                Progress Report
              </h2>
              <p className=" font-lato font-[500] text-[#777373]">
                Our expert team handles the entire process, from annotation to
                deployment, ensuring seamless integration into your AI systems.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HowItWorks;
