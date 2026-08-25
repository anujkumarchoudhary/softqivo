"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import img from "../../public/images/pricing.jpg";
import Heading from "./common/Heading";
import PriceCard from "./card/PriceCard";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";

const Pricing = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { headingParts, label, data } = staticData?.home?.pricingPlan || {};

  return (
    <section ref={ref} className="relative py-[3rem] lg:py-[6rem] w-full">
      {/* BACKGROUND IMAGE */}
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* CONTENT */}
      <MaxWidth className="relative z-10 h-full">
        {/* HEADING */}
        <div
          className={`transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <Heading
            textColor="#FFFFFF"
            isCenter
            isDart={true}
            headingParts={headingParts}
            label={label}
            className="w-[100%] lg:w-[55%] mx-auto mb-8"
          />
        </div>

        {/* PRICE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-[0rem] lg:pt-[2rem] gap-[1.5rem] lg:gap-[2.5rem]">
          {data?.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-1000
              delay-[${300 + index * 150}ms]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            >
              <PriceCard
                idx={index}
                title={plan.label}
                decription={plan.description}
                price={plan.rate}
                features={plan.service}
              />
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Pricing;
