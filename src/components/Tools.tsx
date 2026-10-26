
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
    const technologies = [...data.technologies, ...data.technologies];

    return (
        <section className="relative overflow-hidden">
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
            className="group relative flex h-[90px] w-[190px] shrink-0 items-center gap-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.035] px-5 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.07]"
        >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                <Image
                    src={technology?.icon}
                    fill
                    alt="/images/technology/icon_9.png"
                    className="text-gray-500 transition-colors duration-500 group-hover:text-purple-400"
                />
            </div>

            {/* Content */}
            <div className="relative min-w-0">
                <h3 className="truncate text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {technology.name}
                </h3>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-600 transition-colors duration-300 group-hover:text-gray-500">
                    {technology.category}
                </p>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
        </motion.div>
    );
}
