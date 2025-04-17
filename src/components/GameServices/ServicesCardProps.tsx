import React from "react";
import { RiUserSmileFill } from "react-icons/ri";

interface ServicesCardPropsType {
    iconStyle?: string;
    bgColor?: string;
    title: string;
    content: string;
}

const ServicesCardProps: React.FC<ServicesCardPropsType> = ({iconStyle, bgColor, title, content}) => {
  return (
    <div className={`w-[100%] sm:max-w-[32em] sm:w-[32em] md:w-[20em] min-h-[15em] flex flex-col items-center text-center gap-3 p-5 font-sf ${bgColor}`}>
      <div className={`size-14 flex items-center justify-center rounded-full ${iconStyle}`}>
        <RiUserSmileFill className="text-[#fff] size-7" />
      </div>

      <p className="text-white text-[17px] font-bold mt-3">{title}</p>
      <p className="text-white text-[14px] font-[300]">
        {content}
      </p>
    </div>
  );
};

export default ServicesCardProps;
