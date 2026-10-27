"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import Image from "next/image";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

interface Technology {
  name: string;
  category: string;
  icon: string;
}

interface TechnologyData {
  label: string;
  heading: string;
  headingParts: any;
  technologies: Technology[];
}

interface TechnologySectionProps {
  data: TechnologyData;
}

export default function Tools({ data }: any) {
  const { isDesktop } = useResponsive();
  const technologies = [...data.technologies, ...data.technologies];

  return (
    <section className="relative overflow-hidden">
      {/* ================= BACKGROUND ================= */}

        <div className="relative mt-10 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            className="flex w-max gap-3"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {technologies.map((technology, index) => (
              <TechnologyCard
                key={`${technology.name}-${index}`}
                technology={technology}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-700">
            Modern Technology Stack
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-blue-500/40 to-transparent" />
        </div>
    </section>
  );
}

/* =====================================================
   TECHNOLOGY CARD
===================================================== */

function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="group relative flex h-[90px] w-[190px] shrink-0 items-center gap-4 overflow-hidden rounded-xl px-5 transition-all duration-500"
    >
      {/* Icon */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ">
        <Image
          src={technology?.icon}
          fill
          alt="/images/technology/icon_9.png"
        //   className="text-gray-500 transition-colors duration-500 group-hover:text-purple-400"
        />
      </div>

      {/* Content */}
      <div className="relative min-w-0">
        <h3 className="truncate text-[16px] font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
          {technology.name}
        </h3>

        {/* <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-600 transition-colors duration-300 group-hover:text-gray-500">
          {technology.category}
        </p> */}
      </div>
    </motion.div>
  );
}
