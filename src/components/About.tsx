"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import about from "../../public/images/about.jpg";
import about2 from "../../public/images/about2.jpg";
import about3 from "../../public/images/software-developer-at-office (1).jpg";

import Image from "next/image";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import Heading from "./common/Heading";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const About = () => {
  const users = [about3, about3, about3];
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, description } = staticData.home.aboutUs;

  return (
    <section ref={ref}>
      <MaxWidth className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] py-[4rem] lg:py-[6rem]">
        {/* LEFT SIDE (Images) */}
        <div
          className={`relative transition-all duration-1000
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
        >
          <Image
            width={550}
            height={600}
            src={about}
            alt="About"
            className="pb-[8rem] aspect-550/600 w-[clamp(340px,40vw,550px)] h-[clamp(500px,60vw,800px)] object-cover"
          />

          <Image
            width={360}
            height={400}
            src={about2}
            alt="About"
            className="absolute aspect-360/400 w-[clamp(230px,20vw,360px)] h-[clamp(40px,70vw,400px)] bg-[#001845]/90 p-4 bottom-0 right-0"
          />

          <div
            className={`flex gap-4 bg-white p-[2rem] shadow absolute bottom-[8%] right-[16%] items-center
            transition-all duration-700 delay-300
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <SlSettings size={40} className="text-[#001845]" />
            <div>
              <h3 className="font-bold text-[#001845]">
                1,2K+ Project Done
              </h3>
              <p className="pt-1">Small Until High Projects</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Content) */}
        <div
          className={`my-auto transition-all duration-1000 delay-200
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <Heading label={label} headingParts={headingParts} description={description} />

          <div className="flex gap-4 py-6">
            <span className="w-2 h-12 bg-[#001845]" />
            <p className="font-semibold italic">
              ” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. “
            </p>
          </div>

          <div className="flex gap-4 py-6">
            <PiClockCounterClockwiseFill size={54} className="text-[#001845]" />
            <div>
              <h3 className="text-[1.25rem] font-bold">
                We Offer Unlimited Revision
              </h3>
              <p className="font-semibold italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="block lg:flex gap-[2rem] py-6">
            {/* Users */}
            <div className="flex my-auto">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className={`relative ${idx !== 0 ? "-ml-6" : ""}`}
                  style={{ zIndex: users.length - idx }}
                >
                  <Image
                    src={user}
                    alt="user"
                    className="rounded-full w-[70px] h-[70px] border-4 border-white object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-8 lg:pt-0">
              <h2 className="font-extrabold text-[#001845]">1,235+</h2>

              <div className="my-auto">
                <h3 className="text-[1.25rem] font-bold text-[#001845]">
                  Give Best Feedback
                </h3>
                <p className="font-semibold italic">Lorem Ipsum Dolor</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default About;
