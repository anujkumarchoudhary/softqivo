"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users, BadgeCheck, Code2 } from "lucide-react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import about_hero_banner from "../../public/images/about/about_hero_banner.png";
import Button from "./common/Button";

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

export default function AboutBanner({ data }: { data: any }) {
  console.log("data21", data);
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden text-black">
      {/* Background */}
      {/* <SectionBackground /> */}
      <MaxWidth className="grid grid-cols-1 justify-between gap-10 md:grid-cols-[40%_50%]">
  {/* Left */}
  <div className="my-auto space-y-15">
        <Heading
        labelColor="#800080"
      label="WHO WE ARE"
      headingParts={data?.headingParts}
      description={"SoftQivo is a digital technology company focused on web development and digital solutions. We combine technology, creativity, and business thinking to build fast, scalable, and meaningful digital experiences."}
    />
    <Button name={"Book a Consultation"} />
  </div>

  {/* Right */}
  <div className="relative h-140">
  <Image  
        src={about_hero_banner}
        alt="SoftQivo"
        fill
        className="object-cover rounded-[20px]"
      />
  </div>
</MaxWidth>

  
    </section>
  );
}