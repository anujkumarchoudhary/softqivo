"use client";

import Image from "next/image";
import img from "../../../public/images/software-developer-at-office.jpg";
import MaxWidth from "../layout/MaxWidth";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";

const Banner = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, description, button, button2 } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className="relative py-[4rem] lg:py-[8rem] w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={img}
        alt="Banner"
        fill
        priority
        className="object-cover lg:object-[center_10%]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* Content */}
      <MaxWidth className="relative z-10 h-full">
        <div className="flex h-full items-center">
          <div className="max-w-3xl space-y-[2rem] text-white">
            <Heading
              isDart={true}
              label={label}
              textColor="#FFFFFF"
              headingParts={headingParts}
              description={description}
            />

            {/* Buttons */}
            <div
              className={`flex gap-4 transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button name={button} name2={button2} is2button={true} />
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Banner;
