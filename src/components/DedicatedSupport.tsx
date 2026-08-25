"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";
import img2 from "../../public/images/software-developer-at-office.jpg";
import img1 from "../../public/images/dedicatedsupport.jpg";
import { TbClock24 } from "react-icons/tb";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const DedicatedSupport = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, data } = staticData.home.dedicatedSupport;

  return (
    <section
      ref={ref}
      className="pt-[3rem] pb-[18rem] bg-white lg:pt-[6rem] lg:pb-[6rem]"
    >
      <MaxWidth className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
        {/* LEFT SIDE */}
        <div
          className={`transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <Heading headingParts={headingParts} label={label} />

          <div
            className={`relative pt-[2rem] transition-all duration-1000 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Image src={img1} alt="Dedicated support" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`relative h-[26rem] transition-all duration-1000 delay-300
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <Image src={img2} alt="Dedicated support" fill />

          {/* PLAY BUTTON */}
          <span
            className={`absolute top-1/2 left-1/2 transform
            -translate-x-1/2 -translate-y-1/2
            bg-[#FFFFFF] text-[#001845]
            hover:bg-[#001845] hover:text-[#FFFFFF]
            cursor-pointer p-5 rounded-full
            transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <IoPlaySharp size={40} />
          </span>

          {/* SUPPORT BOX */}
          <div
            className={`absolute w-[90%] lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-[2rem]
            top-[80%] left-[5%] right-[5%] lg:top-[120%] lg:left-[-25%] bg-[#001845] text-[#FFFFFF] p-[2rem]
            transition-all duration-1000 delay-650
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {data.map((item, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${650 + index * 150}ms` }}
                className="flex items-center gap-4"
              >
                <div className="bg-[#001845] mb-6 p-3 rounded-full">
                  <TbClock24 size={54} />
                </div>
                <div>
                  <h3 className="text-xl text-[#FFFFFF] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default DedicatedSupport;
