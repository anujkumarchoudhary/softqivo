"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users, BadgeCheck, Code2 } from "lucide-react";

import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { RiDoubleQuotesL } from "react-icons/ri";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: Rocket,
  },
  {
    value: "25+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "10+",
    label: "Years of Experience",
    icon: BadgeCheck,
  },
  {
    value: "15+",
    label: "Tech Experts",
    icon: Code2,
  },
];

export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-[#03050b] text-white h-[90vh]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main purple glow */}
      <div className="pointer-events-none absolute left-[42%] top-[20%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[180px]" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.06] blur-[180px]" />

      {/* Top-left dots */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[180px] w-[300px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(168,85,247,0.8) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to right, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent 85%)",
        }}
      />

      {/* Bottom dots */}
      <div
        className="pointer-events-none absolute bottom-0 right-[35%] h-[140px] w-[260px] opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(168,85,247,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />

      <MaxWidth className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 ">
        <div className="relative grid items-center gap-12  lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 ">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 max-w-[700px]">
            <Heading
              label="ABOUT US"
              textColor="#ffffff"
              accentColor="#A855F7"
              headingParts={[
                {
                  text: "We turn ideas ",
                  color: "#ffffff",
                  font:"playfair"
                },
                             {
                  text: "into digital products",
                  color: "#ffffff",
                },
                { text: " that create impact.", gradient: "linear-gradient(90deg, #A855F7, #3B82F6)" },
              ]}
              description=" We’re a team of designers, developers, and problem solvers who
              partner with ambitious businesses to build meaningful digital
              experiences that drive growth."
            />

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-9 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em]"
            >
              <span className="text-gray-500">Home</span>

              <span className="text-purple-500">/</span>

              <span className="text-white">About</span>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`group relative px-4 py-2 first:pl-0 ${
                      index !== 0 ? "border-l border-white/15" : ""
                    }`}
                  >
                    {/* Active line */}
                    {index === 0 && (
                      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-blue-500" />
                    )}

                    <div className="pl-3">
                      {/* Icon */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/[0.08] transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-purple-500/[0.14]">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>

                      <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {stat.value}
                      </div>

                      <div className="mt-1 whitespace-nowrap text-[12px] text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative h-full">
            {/* Ambient image glow */}
            <div className="pointer-events-none absolute right-[5%] top-[18%] h-[480px] w-[480px] rounded-full bg-purple-600/20 blur-[120px]" />

            {/* =================================================
                DIAGONAL FRAME
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-[8%]
                top-1/2
                -translate-y-1/2
                w-[80%]
                h-[80%]
                rotate-[42deg]
                rounded-[100px]
                border
                border-purple-500/70
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                lg:left-[8%]
              "
            />

            {/* Inner diagonal glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-[8%]
                top-1/2
                -translate-y-1/2
                w-[80%]
                h-[80%]
                rotate-[42deg]
                rounded-[90px]
                border
                border-purple-400/20
              "
            />

            {/* =================================================
                TEAM IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                right-[-10%]
                top-[8%]
                w-full
                h-full
                 overflow-hidden
                rounded-[40px]
              "
            >
              <Image
                src="/images/about/about_hero_banner.png"
                alt="SoftQivo team collaborating on digital products"
                fill
                priority
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/70 via-transparent to-transparent" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#03050b] to-transparent" />

              {/* Purple overlay */}
              <div className="absolute inset-0 bg-purple-900/10 mix-blend-screen" />
            </motion.div>

            {/* =================================================
                FLOATING QUOTE CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                absolute
                bottom-[2%]
                right-[0]
                z-20
                w-[285px]
                rounded-2xl
                border
                border-purple-500/25
                bg-[#070912]/90
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                backdrop-blur-xl
                lg:right-[-2%]
              "
            >
              <div className="text-4xl leading-none text-purple-500">
                <RiDoubleQuotesL/>
              </div>

              <p className="mt-3 text-[15px] leading-7 text-gray-300">
                Great products come from clarity, collaboration, and a shared
                purpose.
              </p>

              <div className="mt-5 h-[2px] w-11 bg-gradient-to-r from-purple-500 to-blue-500" />
            </motion.div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
