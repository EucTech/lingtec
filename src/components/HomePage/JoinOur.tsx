"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";
import { toast } from "sonner";

const JoinOur = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      
      setLoading(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, skill }),
      });
      setLoading(false);
      const data = await res.json();

      if (res.status === 201) {
        toast(data.message);
      } else if (res.status === 400) {
        toast(data.message);
      } else {
        toast("Error submitting form. Please try again.");
      }      
    } catch (error) {
      toast("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
      setLoading(false);
    }
    finally {
      setLoading(false);
      setFullname("");
      setEmail("");
      setSkill("");
    }
    
  };

  return (
    <div className="bg-[#040207] overflow-hidden w-full h-full font-sf flex flex-col items-center justify-center gap-10 py-10 sm:py-20 px-2 sm:px-10 lg:px-20">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={100}
        direction="up"
      >
        <div className="flex flex-col items-center text-center justify-center gap-5 text-white px-3">
          <h2 className="text-[30px] sm:text-[40px] font-[700]">
            Join our Lingtec.ai Talent pool
          </h2>
          <p className="w-full sm:w-[80%] text-[16px] font-[500]">
            Lingtec.ai is building a network of top talent to work on cutting-edge AI projects for global companies.
          </p>
        </div>
      </Fade>

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={100}
        direction="left"
        className="w-full md:w-[80%]"
      >
        <div className="h-fit flex flex-col bg-[#141515] font-sf border gap-5 border-[#373737] rounded-3xl py-10 px-3 sm:px-6">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-[18px] font-[700] text-white">
              How to join our talent pool
            </h2>
            <p className="text-[14px] font-[500] text-[#787878]">
              Enter your name, email, and other info and our talent management will reach out to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="size-full flex flex-col gap-8">
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full bg-[#212224] border border-[#D0D5DD4F] font-[400] font-sf placeholder:text-sm placeholder:text-[#929292] py-[8px] outline-none text-[#fff] focus:border-white rounded-xl pl-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#212224] border border-[#D0D5DD4F] font-[400] font-sf placeholder:text-sm placeholder:text-[#929292] py-[8px] outline-none text-[#fff] focus:border-white rounded-xl pl-4"
            />
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full bg-[#212224] border border-[#D0D5DD4F] font-[400] font-sf placeholder:text-sm placeholder:text-[#929292] py-[8px] outline-none text-[#fff] focus:border-white rounded-xl pl-4"
            />

            <div className="flex flex-col items-center justify-center text-center gap-2">
              <p className="text-[#fff] text-[15px] font-[400]">
                Clicking <b>&quot;Join&quot;</b> means you&apos;ve agreed to be one
              </p>
              <p className="w-full sm:w-[85%] lg:w-[60%] text-tpurple text-[15px] font-[400]">
                of our Lingtec.ai talents under the terms and conditions, and you&apos;re ready for us to serve you.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full flex items-center text-[16px] font-[500] font-sf cursor-pointer bg-tpurple text-white hover:bg-tpurple/60 transition-colors duration-300 px-5 py-6 gap-2 rounded-3xl"
            >
              {loading ? "Loading..." : "Join"}
            </Button>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default JoinOur;
