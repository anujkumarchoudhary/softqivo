"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { GrCertificate } from "react-icons/gr";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { useRouter } from "next/navigation";

const WhatWeDo = (service: any) => {
  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref}>
      <MaxWidth className=" py-[2.5rem] lg:py-[6rem]">
        <Heading
          isCenter
          label={service?.data?.label}
          headingParts={service?.data?.headingParts}
          className="w-[100%] lg:w-[50%] mx-auto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 pt-[1rem]">
          {service?.data?.data?.map((item: any, idx: number) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`space-y-4 bg-white py-[2rem] px-[1.5rem] shadow-xl text-center
              transition-all duration-700
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="flex justify-center">
                <GrCertificate size={40} />
              </span>

              <h3 className="text-[1.4rem] font-extrabold">{item.name}</h3>

              <p>{item.description}</p>

              <div className="flex gap-2 justify-center">
                <p
                  onClick={() => router.push("/service/details")}
                  className="text-[#001845] font-semibold my-auto cursor-pointer"
                >
                  Learn More
                </p>
                <IoArrowForwardOutline className="my-auto" />
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhatWeDo;
