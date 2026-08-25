"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import skill from "../../public/images/skill.jpg";
import skill2 from "../../public/images/skill2.jpg";
import Image from "next/image";
import Heading from "./common/Heading";
import Button from "./common/Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const ExpertSkill = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { headingParts, label, description, button } =
    staticData.home?.expertSkill || {};

  return (
    <section ref={ref} className="bg-[#F9F9F9]">
      <MaxWidth className="grid grid-cols-1 lg:grid-cols-4 gap-[1rem] lg:gap-[4rem] py-[3rem] lg:py-[6rem]">
        {/* LEFT IMAGE */}
        <div
          className={`relative col-span-1 transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <Image src={skill} fill alt="Expert Skill" className="object-cover" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-3">
          {/* Heading */}
          <div
            className={`transition-all duration-1000 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <Heading headingParts={headingParts} label={label} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] lg:gap-[4rem]  mt-8">
            {/* INNER IMAGE */}
            <div
              className={`col-span-1 transition-all duration-1000 delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <Image
                src={skill2}
                alt="Expert Skill"
                className="w-full h-[20rem] object-cover lg:h-auto"
              />
            </div>

            {/* TEXT + PROGRESS */}
            <div
              className={`col-span-2 my-auto transition-all duration-1000 delay-400
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              {description?.map((desc, idx) => (
                <p key={idx} className="mt-4 text-lg text-gray-700">
                  {desc}
                </p>
              ))}

              {/* PROGRESS BARS */}
              <div className="space-y-8 py-8">
                <div
                  className={`transition-all duration-700 delay-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <div className="flex justify-between">
                    <p className="text-[18px] font-bold">Desktop Software</p>
                    <p className="text-[18px] font-bold text-[#023E7D]">90%</p>
                  </div>
                  <div className="h-2 w-full bg-[#023E7D]" />
                </div>

                <div
                  className={`transition-all duration-700 delay-650
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <div className="flex justify-between">
                    <p className="text-[18px] font-bold">Web Applications</p>
                    <p className="text-[18px] font-bold text-[#023E7D]">85%</p>
                  </div>
                  <div className="h-2 w-full bg-[#023E7D]" />
                </div>
              </div>

              {/* BUTTON */}
              <div
                className={`transition-all duration-700 delay-800
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Button name={button} />
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ExpertSkill;
