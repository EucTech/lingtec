import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ContactHero = () => {
  return (
    <div className=" relative w-full min-h-[20em] flex flex-col gap-5 text-center font-sf items-center justify-center bg-[#050F0D] text-white py-20 px-5 md:px-10 xl:px-20">
      <h1 className="text-[35px] sm:text-[50px] font-[600]">Contact <span className="text-tpurple">Information</span></h1>
      <p className=" w-full sm:w-[80%] lg:w-[60%] xl:w-[40%]">
        We&apos;d love to hear from you! Whether you have questions about our
        services, need a customized solution, or want to collaborate, the
        Lingtec.ai team is here to help.
      </p>
      <Link href="#">
        <Button className="flex items-center cursor-pointer bg-tpurple text-[#CBFC01] hover:bg-tpurple/60 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
          <p className="text-[15px] font-[700]">Contact Us</p>
        </Button>
      </Link>
      <div className=" absolute w-[24em] h-[20em] bg-[#3EAC91]/20 blur-[90px] rounded-full -left-10 bottom-0 z-10 "></div>
    </div>
  );
};

export default ContactHero;
