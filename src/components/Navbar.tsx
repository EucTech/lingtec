import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Images } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => setIsOpen(false);

  const isActive = (path: string) =>
    pathname === path ? "text-tpurple font-[600]" : "";

  return (
    <div className="fixed z-50 w-full h-[5em] bg-[#0A0A0A] backdrop-blur-md font-sf flex items-center px-5 md:px-10 lg:px-24 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="w-full flex items-center gap-10">
        <Link className="flex items-center gap-2" href="/">
        <Image src={Images.logo} alt="lingtec logo" width={1000} height={1000} className="w-6" />
          <h1 className="w-[8em] text-white font-[700] text-[26px] ">Lingtec</h1>
        </Link>
      </div>

      <div className="hidden lg:flex items-center text-nowrap gap-6 ">
        <ul className="flex items-center gap-6 text-[15px] text-white font-[600]">
          <Link
            className={`hover:text-tpurple transition-colors duration-300 ${isActive("/game-services")}`}
            href="/game-services"
          >
            <li>Game services</li>
          </Link>
          <Link
            className={`hover:text-tpurple transition-colors duration-300 ${isActive("/linguistics")}`}
            href="/linguistics"
          >
            <li>Linguistics</li>
          </Link>
          <Link
            className={`hover:text-tpurple transition-colors duration-300 ${isActive("/about-us")}`}
            href="/about-us"
          >
            <li>About us</li>
          </Link>
          <Link
            className={`hover:text-tpurple transition-colors duration-300 ${isActive("/contact-us")}`}
            href="/contact-us"
          >
            <li>Contact us</li>
          </Link>
          
        </ul>

        <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tpurple text-white hover:bg-tpurple/60 transition-colors duration-300 px-8! py-5 gap-2 rounded-3xl">
            <p className="text-[15px] font-[700]">Get Started </p>
          </Button>
        </Link>
      </div>

      <div className="lg:hidden block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            {/* <Button variant="outline"> */}
              <GiHamburgerMenu className="lg:hidden block text-[30px] text-white" />
            {/* </Button> */}
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <SheetTitle>Navbar List</SheetTitle>
              <SheetDescription>Navbar List</SheetDescription>
            </VisuallyHidden>
            <div className="grid gap-8 py-20 pl-6">
              <ul className="flex flex-col gap-6 text-white text-[15px] font-[600]">
                <Link
                  href="/game-services"
                  className={`${isActive("/game-services")}`}
                >
                  <li className="hover:text-tpurple" onClick={closeSheet}>
                  Game services
                  </li>
                </Link>
                <Link
                  href="/linguistics"
                  className={`${isActive("/linguistics")}`}
                >
                  <li className="hover:text-tpurple" onClick={closeSheet}>
                  Linguistics
                  </li>
                </Link>
                <Link
                  href="/about-us"
                  className={`${isActive("/about-us")}`}
                >
                  <li className="hover:text-tpurple" onClick={closeSheet}>
                  About us
                  </li>
                </Link>
                <Link
                  href="/contact-us"
                  className={`${isActive("/contact-us")}`}
                >
                  <li className="hover:text-tpurple" onClick={closeSheet}>
                  Contact us
                  </li>
                </Link>
              </ul>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="#">
                  <Button
                    onClick={closeSheet}
                    className="flex items-center cursor-pointer bg-tpurple transition-colors duration-300 border-none text-white hover:bg-tcolor-2 px-6! py-5 gap-2 rounded-3xl"
                  >
                    <p className="text-[15px] font-[700]">Get Started </p>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
