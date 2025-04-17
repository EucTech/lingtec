import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutHero = () => {
  return (
    <div className="overflow-hidden relative w-full min-h-[20em] flex flex-col font-sf gap-5 text-center items-center justify-center bg-[#0A0A0A] text-white py-20 px-5 md:px-10 xl:px-20">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <h1 className="text-[35px] sm:text-[50px] font-[600]">
          About <span className="text-tpurple">Us</span>
        </h1>
      </Fade>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={400}
        direction="up"
        className="w-full sm:w-[90%] lg:w-[70%]"
      >
        <p className=" ">
          We&apos;re a team of experts dedicated to redefining artificial
          intelligence through Indigenious data refining services. We empower
          businesses with the data they need to build more intelligent
          solutions. We offer comprehensive services from precise data
          annotation that fuels machine learning to cutting-edge AI model
          training and development for predictive insights. Additionally, our
          professional language services ensure your message resonates globally,
          bridging communication gaps and fostering stronger connections across
          cultures. We handle the complexities of data and language so you can
          focus on what you do
        </p>
      </Fade>
    </div>
  );
};

export default AboutHero;
