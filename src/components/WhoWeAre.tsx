"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import img from "../../public/images/whowe.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const WhoWeAre = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, description, data } = staticData.home?.whoWeAre;

  return (
    <section ref={ref} className="bg-[#F9F9F9]">
      <MaxWidth className="grid grid-cols-1 overflow-hidden lg:grid-cols-3 gap-2 py-[4rem] lg:py-[6rem]">
        {/* LEFT CONTENT */}
        <div
          className={`col-span-2 space-y-10 my-auto transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <Heading label={label} headingParts={headingParts} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
            {/* Overview Card */}
            <div
              className={`space-y-5 bg-white p-[3rem] border-[0.4rem]
              border-[#0466C8]/20 hover:border-[#0466C8]
              transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex gap-3">
                <span className="bg-[#0466C8] h-1.5 w-20 my-auto" />
                <h3 className="text-[1.6rem] font-bold">Overview</h3>
              </div>

              {/* Description */}
              {description?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>

            {/* Feature List */}
            <div className="my-auto">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 my-8 transition-all duration-700
                  delay-[${300 + idx * 150}ms]
                  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                >
                  <span className="bg-[#0466C8] w-1.5 h-12 my-auto" />
                  <div>
                    <h3 className="text-[1.3rem] font-bold">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`col-span-1 transition-all duration-1000 delay-300
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
        >
          <Image src={img} alt="Who we are" />
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhoWeAre;
