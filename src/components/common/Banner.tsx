"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import banner_img from "../../../public/images/home/banner_05.png";

import SaveAndCancel from "./SaveAndCancel";
import { useResponsive } from "@/src/hooks/useResponsive";
import TrustedCompanies from "../TrustedCompanies";
import img_1 from "../../../public/images/partner/aws.png";
import img_2 from "../../../public/images/partner/digitalocean.png";
import img_3 from "../../../public/images/partner/google.png";
import img_4 from "../../../public/images/partner/microsoft.png";
import img_5 from "../../../public/images/partner/vercel.png";

const partners = [
  // {
  //   name: "AWS",
  //   image: img_1,
  // },
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
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const { label, headingParts, description, button, button2 } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className="relative py-12 lg:py-16 bg-primary-bg  w-full overflow-hidden"
    >
      {/* Purple localized glow + grid */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[520px] opacity-70">
        <div className="absolute inset-0 rounded-full bg-purple-600/[0.12] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
          linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)
        `,
            backgroundSize: "45px 45px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
      </div>

      {/* Blue localized glow + grid */}
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[520px] opacity-70">
        <div className="absolute inset-0 rounded-full bg-blue-600/[0.12] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
          linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)
        `,
            backgroundSize: "45px 45px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
      </div>
      {/* Content */}
      <MaxWidth className="relative space-y-0 lg:h-fit  my-auto">
        <div className="grid  grid-cols-1 lg:grid-cols-2 justify-between gap-8 relative z-10">
          <div className=" space-y-8 my-auto">
            <Heading
              isDart={true}
              label={label}
              accentColor="#00FFFF"
              isCenter={isDesktop ? false : true}
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
              <SaveAndCancel
                saveText="Start a Project"
                cancelText="Explore Our Work"
                saveHref="/contact"
                cancelHref="/work"
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Image src={banner_img} alt="Banner Image" />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-[20px] uppercase">
            Trusted By Business Workplace
          </h3>
          <div className="flex gap-14 mt-8">
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
      </MaxWidth>
    </section>
  );
};

export default Banner;
