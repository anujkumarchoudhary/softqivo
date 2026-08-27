"use client";

import Link from "next/link";
import { staticData } from "../utills/Data";
import Heading from "./common/Heading";

import {
  Code2,
  Layers3,
  Smartphone,
  Palette,
  Boxes,
  Cloud,
  ArrowUpRight,

} from "lucide-react";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

// const services: Service[] = [
//   {
//     title: "Web Development",
//     description:
//       "Modern, responsive and high-performance web applications.",
//     href: "/services/web-development",
//     icon: Code2,
//   },
//   {
//     title: "Software Development",
//     description:
//       "Scalable, secure and custom software built for your business.",
//     href: "/services/software-development",
//     icon: Layers3,
//   },
//   {
//     title: "Mobile Applications",
//     description:
//       "Powerful mobile apps with great user experiences.",
//     href: "/services/mobile-applications",
//     icon: Smartphone,
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "Beautiful, intuitive and user-focused digital experiences.",
//     href: "/services/ui-ux-design",
//     icon: Palette,
//   },
//   {
//     title: "API & Backend",
//     description:
//       "Robust APIs and backend systems built for performance.",
//     href: "/services/api-backend",
//     icon: Boxes,
//   },
//   {
//     title: "Cloud & DevOps",
//     description:
//       "Reliable infrastructure, deployment and cloud solutions.",
//     href: "/services/cloud-devops",
//     icon: Cloud,
//   },
// ];

const Services = () => {
      const { headingParts, label, list} =
        staticData.home?.services || {};
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          
          {/* Left */}
<Heading headingParts={headingParts} />

          {/* Right */}
          <div className="lg:pb-1 lg:pl-16">
            <p className="text-[18px] leading-6 text-[#686873]">
              From strategy and design to development and deployment,
              we build digital products that are fast, scalable and
              purpose-driven.
            </p>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((service, index) => {
            const Icon = service.icon;

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
                    flex h-11 w-11 items-center justify-center
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
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-[#16161D]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-5 text-[#777780]">
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
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />
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

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[16px] text-[#8A8A93]">
            Have a project in mind? Let&apos;s build something meaningful.
          </p>

          <Link
            href="/contact"
            className="
              group inline-flex w-fit items-center gap-2
              rounded-full
              bg-[#111118]
              px-5 py-2.5
              text-[18px] font-semibold text-white
              transition-all duration-300
              hover:bg-[#7C3AED]
            "
          >
            Start a Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;