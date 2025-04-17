import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

const WhyYouShouldChoose = () => {
  return (
    <div className=" relative w-full h-full flex flex-col lg:flex-row justify-center gap-20 font-sf text-white bg-[#000000] py-20 px-5 md:px-10 xl:px-20 ">
      <h2 className=" text-[35px] sm:text-[45px] font-[400]">
        Why You Should Choose Lingtec.Ai
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-10 lg:gap-y-20">
        <div className=" w-full  flex flex-col gap-3 items-start">
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-[#CBFC01] text-[33px]" />
            <h2 className="font-[400] text-[18px]">Innovative Technology:</h2>
          </div>
          <p className="ml-10 text-[14px] font-[300]">
            We utilize state-of-the-art technology to deliver dynamic
            advertising solutions that capture attention and drive results.
          </p>
        </div>
        <div className=" w-full  flex flex-col gap-3 items-start">
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-[#CBFC01] text-[33px]" />
            <h2 className="font-[400] text-[18px]">Targeted Reach:</h2>
          </div>
          <p className="ml-10 text-[14px] font-[300]">
            Reach your target audience with precision and efficiency, leveraging
            our extensive network ofAfrican language translators and strategic
            geographic targeting.
          </p>
        </div>
        <div className=" w-full  flex flex-col gap-3 items-start">
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-[#CBFC01] text-[33px]" />
            <h2 className="font-[400] text-[18px]">
              Flexibility and Customization:
            </h2>
          </div>
          <p className="ml-10 text-[14px] font-[300]">
            Whether you&apos;re a driver looking to earn extra income or an
            advertiser seeking to amplify your brand visibility, Motion 365
            offers flexible solutions tailored to your needs.
          </p>
        </div>
        <div className=" w-full  flex flex-col gap-3 items-start">
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-[#CBFC01] text-[33px]" />
            <h2 className="font-[400] text-[18px]">Data-Driven Insights:</h2>
          </div>
          <p className="ml-10 text-[14px] font-[300]">
            Gain valuable insights into project performance with real-time
            analytics and reporting tools, empowering you to optimize your
            strategy for maximum impact.
          </p>
        </div>
      </div>

      <div className=" absolute w-[24em] h-[20em] bg-tpurple/20 blur-[90px] rounded-full -left-10 bottom-0 z-10 "></div>
    </div>
  );
};

export default WhyYouShouldChoose;
