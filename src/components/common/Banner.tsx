"use client";

import Image from "next/image";
import img from "../../../public/images/software-developer-at-office.jpg";
import MaxWidth from "../layout/MaxWidth";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import banner_img from "../../../public/images/home/banner_image_2.png";
import SaveAndCancel from "./SaveAndCancel";

const Banner = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, description, button, button2 } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className="relative h-[100vh] lg:h-[90vh] bg-primary-bg  w-full overflow-hidden"
    >
      {/* Content */}
      <MaxWidth className="grid mt-[10vh] grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 relative z-10">
        <div className=" space-y-[2rem] text-white">
          <Heading
            isDart={true}
            label={label}
            textColor="#FFFFFF"
            isGradient={true}
            headingParts={headingParts}
            description={description}
          />

          {/* Buttons */}
          <div
            className={`flex gap-4 transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* <Button name={button} name2={button2} is2button={true} /> */}
            <SaveAndCancel
              saveText="Start a Project"
              cancelText="Explore Our Work"
              saveHref="/contact"
              cancelHref="/work"
            />
          </div>
        </div>
        <div className="">
          <Image src={banner_img} alt="Banner Image" />
        </div>
      </MaxWidth>
    </section>
  );
};

export default Banner;
