"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const LingMarket = ({ onClose }: { onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const popoverRef = useRef<HTMLDivElement>(null); // Ref for the popover content
  const backdropRef = useRef<HTMLDivElement>(null); // Ref for the backdrop

  const handleClick = () => {
    setIsOpen(false);
    if (onClose) onClose();
    router.push("/waitlist");
  };

  // Close the popover when clicking outside the popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        backdropRef.current &&
        !backdropRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document to handle outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <p
        className="cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Lingo Market
      </p>

      {/* Backdrop */}
      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)} // Close the popover when clicking on the backdrop
        />
      )}

      {/* Popover content */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="lg:w-[20em] h-fit absolute font-lato z-20 top-10 left-0 lg:-left-50 lg:right-3 bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-[15px] font-semibold text-wrap">
            We are building the largest AI data annotation and language service
            marketplace. Join the waiting list and earn while shaping the future
            AI and communication
          </h2>
          <button
            onClick={handleClick}
            className="mt-4 w-full py-2 cursor-pointer bg-tpurple text-white rounded-3xl transition-colors duration-300 hover:bg-tcolor-2"
          >
            Join Now
          </button>
        </div>
      )}
    </div>
  );
};

export default LingMarket;
