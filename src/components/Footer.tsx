import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" relative overflow-hidden w-full flex flex-col items-center justify-center gap-8 pb-10 pt-20 bg-[#000] px-10 md:px-20 ">
      <div className="w-full flex md:flex-row flex-col items-start gap-10 justify-between z-30 ">
        <div className=" flex flex-col items-start gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src={Images.logo1}
              alt="lingtec logo"
              width={1000}
              height={1000}
              className="w-8"
            />
            <h1 className="w-[8em] text-white font-[600] text-[26px] ">
              Lingtec.AI
            </h1>
          </Link>
          <p className="text-[15px] font-[400] text-[#fff]/70 font-sf">The mortals behind AI</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 items-start justify-between text-[#bcc9f3] text-nowrap gap-5 sm:gap-10 md:gap-20  ">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-lg font-sf">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2 text-[15px] font-lato font-normal">
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Newsletter</li>
              </Link>
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Community</li>
              </Link>
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Press release</li>
              </Link>

              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-lg font-sf">Support</h1>
            <ul className="flex flex-col gap-2 text-[15px] font-lato font-normal">
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Contact Us</li>
              </Link>
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Privacy Policy</li>
              </Link>
              <Link className="hover:text-white/80 text-[#fff]" href={"/"}>
                <li>Terms of Service</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-lg font-sf">Follow Us</h1>
            <ul className="flex flex-col gap-2 text-[15px] font-lato font-normal">
              <Link
                className="flex items-center gap-3 hover:text-white/80 text-[#fff]"
                href={"/"}
              >
                <BsInstagram />
                <li>Instagram</li>
              </Link>
              <Link
                className="flex items-center gap-3 hover:text-white/80 text-[#fff]"
                href={"/"}
              >
                <FaLinkedin />
                <li>Linkedln</li>
              </Link>
              <Link
                className="flex items-center gap-3 hover:text-white/80 text-[#fff]"
                href={"/"}
              >
                <FaFacebook />
                <li>Facebook</li>
              </Link>
              <Link
                className="flex items-center gap-3 hover:text-white/80 text-[#fff]"
                href={"/"}
              >
                <FaXTwitter />
                <li>X</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-2 border-b border-[#424242]" />

      <p className="w-full text-start text-[14px] font-sf font-[400] text-white/70">
        &copy;2025. All right reserved
      </p>

      <div className=" absolute w-[24em] h-[20em] bg-tpurple/20 blur-[90px] rounded-full -right-10 -bottom-[50px] z-10 "></div>

      <div className=" absolute w-[24em] h-[20em] bg-tpurple/20 blur-[90px] rounded-full -left-10 top-[50px] z-10 "></div>
    </div>
  );
};

export default Footer;
