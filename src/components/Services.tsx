"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const Services = ({ data }: any) => {
  const { headingParts, label, list } = data || {};
  const {isDesktop}=useResponsive();
  return (
    <MaxWidth className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
      {/* ================= HEADER ================= */}
      <div className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        {/* Left */}
        <Heading isCenter={isDesktop ? false : true} headingParts={headingParts}  />

        {/* Right */}
        <div className="lg:pb-1 lg:pl-16">
          <p className="text-[18px] text-center lg:text-left leading-6 text-[#686873]">
            From strategy and design to development and deployment, we build
            digital products that are fast, scalable and purpose-driven.
          </p>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((service: any, index: number) => {
          return (
            <Link
              key={service.title}
              href={service.href}
              className={`
                  group relative
                  min-h-[270px]
                  border-b border-[#E8E8EE]
                  p-6
                  transition-all duration-300
                  hover:bg-[#FAF9FF]
                  border rounded-[10px]
                `}
            >
              {/* Icon */}
              <div
                className="
                    flex h-11 w-11 mx-auto lg:mx-0 items-center justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-[#7C3AED]
                    to-[#2563EB]
                    text-white
                    shadow-[0_8px_25px_rgba(124,58,237,0.18)]
                    transition-transform duration-300
                    group-hover:-translate-y-1
                  "
              >
                <Icon name={service.icon} size={20} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-[20px] text-center lg:text-left font-semibold tracking-[-0.01em] text-[#16161D]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[16px] text-center lg:text-left leading-5 text-[#777780]">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="
                    absolute bottom-5 right-5
                    flex h-7 w-7 items-center justify-center
                    text-[#9999A3]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#7C3AED]
                  "
              >
                {/* <ArrowUpRight size={17} strokeWidth={1.8} /> */}
              </div>

              {/* Hover Line */}
              <div
                className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-gradient-to-r
                    from-[#A855F7]
                    to-[#2563EB]
                    transition-all duration-300
                    group-hover:w-full
                  "
              />
            </Link>
          );
        })}
      </div>
    </MaxWidth>
  );
};

export default Services;
