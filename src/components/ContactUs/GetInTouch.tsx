"use client";
import { Images } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { toast } from "sonner";

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Successfully submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast("Something went wrong. Try again.");
      }
    } catch (error) {
      toast("Error submitting form.");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="w-full h-full bg-[#fff] flex flex-col justify-center gap-10 lg:gap-20 py-20 px-5 md:px-20 xl:px-40">
      <div className="flex lg:flex-row flex-col gap-10 items-center justify-between">
        <div className="flex flex-col gap-2 font-sf text-center lg:text-start">
          <h1 className="text-[30px] font-[700]">
            <span className="text-tpurple">Get in Touch</span> With Us
          </h1>
          <p className="text-[#181818] text-[15px] font-[400]">
            Send Us a Message, we would love to hear from you
          </p>
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-10">
          <div className="flex items-center gap-4 font-outfit bg-[#FAFAFA] p-6 rounded-lg">
            <MdOutlineMail className="text-[26px] text-tpurple" />
            <div className="flex flex-col gap-1">
              <h2 className=" text-[14px] font-[600] text-[#181818]">
                Email Address
              </h2>
              <p className=" text-[#181818]/70 text-[14px] font-[400]">
              support@LingTec.AI
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-outfit bg-[#FAFAFA] p-6 rounded-lg">
            <IoCall className="text-[26px] text-tpurple" />
            <div className="flex flex-col gap-1">
              <h2 className=" text-[14px] font-[600] text-[#181818]">
                Phone Number
              </h2>
              <p className=" text-[#181818]/70 text-[14px] font-[400]">
                +2348132758001
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row gap-10 flex-col items-center lg:items-start">
        <Image
          src={Images.person3}
          alt=""
          width={1000}
          height={1000}
          className="w-[400px] xl:w-[600px]"
        />

        <form
          onSubmit={handleEmail}
          className="w-full sm:w-[90%] lg:w-[60%] h-full flex flex-col gap-4 font-sf"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[#000]/70 text-[16px] font-outfit font-[400]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="rounded-lg px-4 py-3 text-[15px] border border-[#B0B0B0] outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#000]/70 text-[16px] font-outfit font-[400]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="rounded-lg px-4 py-3 text-[15px] border border-[#B0B0B0] outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[#000]/70 text-[16px] font-outfit font-[400]"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="rounded-lg px-4 py-3 text-[15px] border border-[#B0B0B0] outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[#000]/70 text-[16px] font-outfit font-[400]"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="h-34 rounded-lg px-4 py-3 text-[15px] border border-[#B0B0B0] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-fit text-[15px] font-[700] flex items-center cursor-pointer bg-tpurple text-[#CBFC01] hover:bg-tpurple/90 transition-colors duration-300 px-16 py-3 gap-2 rounded-3xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
