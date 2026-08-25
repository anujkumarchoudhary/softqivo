"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import img from "../../public/images/thakethetime.jpg";
import img2 from "../../public/images/thakethetime2.jpg";
import { IoPlaySharp } from "react-icons/io5";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const TakeTheTime = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { headingParts, label, list, details } = staticData?.home.takeTheTime || {};

  return (
    <section ref={ref} className="py-[3rem] lg:py-[6rem]">
      <MaxWidth>
        {/* TOP ROW */}
        <div className="block overflow-hidden lg:flex justify-between">
          {/* HEADING */}
          <div
            className={`w-[100%] lg:w-[50%] transition-all duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Heading headingParts={headingParts} label={label} />
          </div>

          {/* IMAGE */}
          <div
            className={`relative w-[100%] lg:w-[35%] h-[15rem] bg-yellow-200 p-2
            transition-all duration-1000 delay-200
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <Image
              src={img}
              fill
              alt="Take the time"
              className="object-center"
            />
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-[1rem] lg:gap-[4rem]">
          {/* VIDEO CARD */}
          <div
            className={`relative transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <Image src={img2} alt="Take the time" fill />
            <span
              className="absolute top-1/1 left-1/2 transform
              -translate-x-1/2 -translate-y-1/1
              bg-[#FFFFFF] text-[#001845]
              hover:bg-[#001845] hover:text-[#FFFFFF]
              cursor-pointer transition-all p-5 rounded-full"
            >
              <IoPlaySharp size={40} />
            </span>
          </div>

          {/* BLUE CARD */}
          <div
            className={`bg-[#001845] space-y-3 p-[3rem] text-[#FFFFFF]
            transition-all duration-1000 delay-450
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <p className="font-semibold text-[#FFFFFF]">{list?.name}</p>

            {list?.data?.map((item, index) => (
              <div className="flex gap-5 py-" key={index}>
                <FaCheck size={20} />
                <p className="text-[#FFFFFF]">{item}</p>
              </div>
            ))}
          </div>

          {/* WHITE CARD */}
          <div
            className={`space-y-5 bg-[#FFFFFF] py-[3rem]
            transition-all duration-1000 delay-600
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="flex gap-3">
              <span className="bg-[#0466C8] h-1.5 w-20 my-auto" />
              <h3 className="text-[1.6rem] font-bold">{details?.name}</h3>
            </div>

            {details?.data?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default TakeTheTime;
