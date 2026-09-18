"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users, BadgeCheck, Code2 } from "lucide-react";
import { RiDoubleQuotesL } from "react-icons/ri";

import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import SectionBackground from "./ui/SectionBackground";

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
    <section className="relative py-12 lg:py-16 overflow-hidden text-black">
      {/* Background */}
      {/* <SectionBackground /> */}
      <MaxWidth className="grid grid-cols-1 justify-between gap-10 md:grid-cols-[40%_50%]">
  {/* Left */}
  <div className="my-auto">
        <Heading
        labelColor="#000000"
      label="WHO WE ARE"
      headingParts={[
        {
          text: "Building digital solutions",
          color: "#000000",
          font: "playfair",
        },
        {
          text: " for modern businesses.",
          gradient: "linear-gradient(90deg, #A855F7, #3B82F6)",
        },
      ]}
      description="SoftQivo is a digital technology company focused on web development and digital solutions. We combine technology, creativity, and business thinking to build fast, scalable, and meaningful digital experiences."
    />
  </div>

  {/* Right */}
  <div className="relative h-140">
  <Image  
        src="/images/about/about_hero_banner.png "
        alt="SoftQivo"
        fill
        className="object-cover rounded-[20px]"
      />
  </div>
</MaxWidth>

  
    </section>
  );
}