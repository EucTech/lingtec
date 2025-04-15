import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Testimonties = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F9F8FE] text-center font-sf gap-5 py-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-100">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className=""
      >
        <h1 className="text-[#141011] text-[30px] font-[700] tracking-tight">
          Here is what Wow AI CEO had to say
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-[#0D0D0D] font-[600] text-[18px]">
            Our models became smarter
          </h2>
          <p className="text-[#463c3c] text-[16px] font-[600px]">
            &quot;Working with Lingtech AI has been a game-changer for our AI
            training and language translation needs. Their team of expert
            annotators and linguists delivered high-quality, precise, and
            efficient data annotation that significantly improved our AI models.
            The translation services were equally exceptional, ensuring accuracy
            and cultural relevance across multiple languages. Their
            professionalism, attention to detail, and fast turnaround time made
            them a reliable partner. If you&apos;re looking for top-tier AI
            annotation and language translation services, Lingtech AI is the
            perfect choice!&quot;
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src={Images.person2}
              alt="Brand Image"
              width={1000}
              height={1000}
              className="w-12 object-cover"
            />
            <h4 className="text-tpurple font-[600] text-[16px]">CEO Wow AI</h4>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Testimonties;
