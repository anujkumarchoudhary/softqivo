"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import banner_img from "../../../public/images/home/banner_05.png";

import SaveAndCancel from "./SaveAndCancel";
import { useResponsive } from "@/src/hooks/useResponsive";
import img_1 from "../../../public/images/partner/aws-20.png";
import img_2 from "../../../public/images/partner/digitalocean.png";
import img_3 from "../../../public/images/partner/google.png";
import img_4 from "../../../public/images/partner/microsoft.png";
import img_5 from "../../../public/images/partner/vercel.png";
import { GrSecure } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import BackgroundEffects from "../BackgroundEffects";
import { useState } from "react";
import GetEnquiryForm from "../form/GetEnquiryForm";
import bgImage from '../../../public/images/home/banner_001.jpg'

const partners = [
  {
    name: "AWS",
    image: img_1,
  },
  // {
  //   name: "DigitalOcean",
  //   image: img_2,
  // },
  {
    name: "Google",
    image: img_3,
  },
  {
    name: "Microsoft",
    image: img_4,
  },
  {
    name: "Vercel",
    image: img_5,
  },
];

const Banner = () => {
  const [open, setOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();
  const { label, headingParts, description, button, button2 } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      id="hero-banner"
      className="h-fit py-12 lg:h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/home/modern-software-development-vector-24033583 (1).avif')",
      }}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-black/60 via-black/60 to-transparent" /> */}

      {/* Content */}
      <MaxWidth className="my-auto lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 pt-20">
        <div className="grid  grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-2 z-10">
          <div className="space-y-10 my-auto">
            <div className="block">
              <Heading
                as="h1"
                isDart={true}
                isSparkles={true}
                label={label}
                breakIndex={6}
                accentColor="#ffffff"
                textColor="#ffffff"
                isGradient={true}
                headingParts={headingParts}
                description={description}
              />
            </div>

            {/* Buttons */}
            <div
              className={`flex gap-4 transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <SaveAndCancel
                saveText="Start a Project"
                cancelText="Explore Our Work"
                handleClick={() => setOpen(!open)}
                handleClick2={() => {
                  document
                    .getElementById("case-studies")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="mx-auto md:mx-0"
              />
            </div>

            <div className=" hidden lg:block mt-10 lg:mt-20 space-y-4 lg:space-y-6">
              <h3 className="text-light text-[clamp(14px,2vw,20px)] uppercase">
                Trusted By Business Workplace
              </h3>
              <div className="flex gap-4 lg:gap-14 ">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image
                      src={partner.image}
                      width={120}
                      height={60}
                      alt={partner.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-fit my-auto justify-end lg:mr-[-15%]">
            {/* <Image src={banner_img} alt="Banner Image" /> */}
          </div>
        </div>
      </MaxWidth>
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
};

export default Banner;
