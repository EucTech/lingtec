import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import ServicesCardProps from "./ServicesCardProps";

const ServicesCard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#F9F8FE] py-20 px-5 overflow-hidden">
      <div className="w-full min-h-[30em] flex flex-wrap justify-center gap-14 md:gap-5">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={100}
          direction="up"
          className=""
        >
          <div className=" max-w-[500px] lg:w-[20em] h-full flex flex-col items-center justify-center bg-[#191919] gap-4 p-4 ">
            <Image
              src={Images.service}
              alt="image"
              width={1000}
              height={1000}
              className=""
            />
            <div className="flex flex-col items-center text-center justify-center gap-2 ">
              <p className="text-[#E0DDE9] text-[17px] font-bold">
                High Visibility
              </p>
              <p className="text-white text-[14px] font-[300]">
                Capture the attention of thousands of potential customers as
                your video ads are displayed by drivers.
              </p>
            </div>
          </div>
        </Fade>

        <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 ">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className=""
          >
            <ServicesCardProps
              iconStyle="bg-[#000000]"
              bgColor="bg-[#ED6810]"
              title="Bug Detection"
              content="Our expert testers meticulously play through your game to detect any glitches, crashes, or inconsistencies that could disrupt gameplay"
            />
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
            <ServicesCardProps
              iconStyle="bg-[#9350E7]"
              bgColor="bg-[#A2845E]"
              title="Player Testing"
              content="In-depth feedback on game mechanics, controls, and difficulty.Insights into player behavior and preferences."
            />
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
            <ServicesCardProps
              title="Unmatched Engagement"
              content="Dynamic platform that captivates viewers and leaves a lasting impression"
              iconStyle="bg-[#006E88]"
              bgColor="bg-[#9350E7]"
            />
          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={500}
            direction="up"
            className=""
          >
            <ServicesCardProps
              title="Real-Time Analytics"
              content="Track the performance of your ad campaigns in real-time with our advanced analytics dashboard. "
              iconStyle="bg-[#9350E7]"
              bgColor="bg-[#000]"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
