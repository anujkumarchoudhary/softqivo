"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import img from "../../public/images/theres-our-solution-.jpg";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import Heading from "./common/Heading";
import { staticData } from "../utills/Data";

const BringYourIdea = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { headingParts, label, description } = staticData.home?.bringIdea || {};

  return (
    <section ref={ref} className="relative py-[3rem] lg:py-[6rem] w-full overflow-hidden">
      {/* Background Image */}
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* Content */}
      <MaxWidth className="relative grid grid-cols-1 lg:grid-cols-2 gap-[2rem] z-10 h-full">
        <div className="flex h-ful items-center">
          <Heading
          isDart={true}
            textColor="#FFFFFF"
            headingParts={headingParts}
            label={label}
            description={description}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default BringYourIdea;
