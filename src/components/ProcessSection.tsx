// import {
//   Search,
//   Lightbulb,
//   Code2,
//   TrendingUp,
//   ArrowUpRight,
// } from "lucide-react";
// import MaxWidth from "./layout/MaxWidth";

// const processSteps = [
//   {
//     number: "01",
//     icon: Search,
//     title: "Understand",
//     description:
//       "We start by understanding your business, audience, goals, and the problem you're trying to solve.",
//   },
//   {
//     number: "02",
//     icon: Lightbulb,
//     title: "Shape",
//     description:
//       "We turn ideas into a clear product direction through planning, user flows, architecture, and thoughtful design.",
//   },
//   {
//     number: "03",
//     icon: Code2,
//     title: "Build",
//     description:
//       "Our team brings the product to life with clean design, modern technology, and a strong focus on performance.",
//   },
//   {
//     number: "04",
//     icon: TrendingUp,
//     title: "Evolve",
//     description:
//       "Launching is just the beginning. We monitor, improve, and help your product evolve as your business grows.",
//   },
// ];

// export default function ProcessSection() {
//   return (
//     <section className="relative overflow-hidden bg-primary-bg py-12 lg:py-16">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
//       <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

//       <MaxWidth className="relative">
//         {/* Header */}
//         <div className="max-w-2xl">
//           <span className="text-sm font-semibold uppercase tracking-[4px] text-purple-400">
//             How We Work
//           </span>

//           <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
//             From First Idea to{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//               Final Product
//             </span>
//           </h2>

//           <p className="mt-6 text-lg leading-relaxed text-gray-400">
//             We keep the process simple, transparent, and focused. Every project
//             starts with understanding your goals and ends with a digital product
//             built to make an impact.
//           </p>
//         </div>

//         {/* Process */}
//         <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//           {processSteps.map((step) => {
//             const Icon = step.icon;

//             return (
//               <div
//                 key={step.number}
//                 className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.05]"
//               >
//                 {/* Number */}
//                 <div className="flex items-start justify-between">
//                   <span className="text-sm font-semibold text-purple-400">
//                     {step.number}
//                   </span>

//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
//                     <Icon className="h-5 w-5 text-white transition group-hover:text-purple-400" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="mt-10 text-2xl font-bold text-white">
//                   {step.title}
//                 </h3>

//                 <p className="mt-4 text-[15px] leading-7 text-gray-400">
//                   {step.description}
//                 </p>

//                 {/* Bottom accent */}
//                 <div className="mt-8 h-px w-full bg-white/10">
//                   <div className="h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
//           <p className="text-gray-400">
//             Have an idea you'd like to bring to life?
//           </p>

//           <button className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-500/50 hover:bg-purple-500/10">
//             Let's Work Together
//             <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//           </button>
//         </div>
//       </MaxWidth>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import Icon from "../utills/iconMap ";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

interface HeadingPart {
  text: string;
  color: string;
  style: string;
  size: string;
  weight: string;
  gradient?: string;
}

interface ProcessData {
  label: string;
  headingParts: HeadingPart[];
  description: string;
  steps: ProcessStep[];
  result: {
    label: string;
    text: string;
    highlight: string;
  };
}

interface OurProcessProps {
  data: ProcessData;
}

export default function OurProcess({ data }: OurProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-12 lg:py-16"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[160px]" />

      <MaxWidth className="relative">
        {/* ================= HEADER ================= */}
        <div className=" w-full md:w-[80%] lg:w-[55%] mx-auto">
          {/* Heading + Description */}
          <Heading
            isCenter={true}
            labelColor="fff"
            textColor="#fff"
            label={data.label}
            headingParts={data.headingParts}
            description={data.description}
          />
        </div>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-20 md:mt-40">
          {/* Background line */}
          <div className="absolute bottom-0 left-[35px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[35px] top-0 w-px origin-top bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-28 md:space-y-40">
            {data.steps.map((step, index) => (
              <ProcessItem key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* ================= RESULT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/10 pt-10 md:mt-44"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
                {data.result.label}
              </p>

              <p className="mt-4 max-w-2xl text-2xl font-medium leading-relaxed tracking-tight text-white md:text-3xl">
                {data.result.text}

                <span className="text-gray-500">{data.result.highlight}</span>
              </p>
            </div>

            <div className="group flex items-center gap-4 cursor-pointer">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 transition-all duration-300 group-hover:border-purple-500/60 group-hover:bg-purple-500/10">
                <Icon
                  name="arrow"
                  className="relative z-10 h-5 w-5 text-gray-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidth>
    </section>
  );
}

/* =====================================================
   PROCESS ITEM
===================================================== */

function ProcessItem({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative grid md:grid-cols-2"
    >
      {/* Number */}
      <div
        className={`hidden md:block ${
          index % 2 === 0 ? "pr-24 text-right" : "order-2 pl-24"
        }`}
      >
        <span className="text-[140px] font-semibold leading-none tracking-[-0.08em] text-white/[0.06]">
          {step.number}
        </span>
      </div>

      {/* Center node */}
      <div className="absolute left-[35px] top-0 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          whileInView={{
            scale: [0.7, 1.15, 1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/20 bg-black"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`pl-16 md:pl-0 ${
          index % 2 === 0 ? "md:order-2 md:pl-24" : "md:pr-24 md:text-right"
        }`}
      >
        <span className="text-xs font-semibold tracking-[0.25em] text-purple-400">
          {step.tag}
        </span>

        <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-lg text-base leading-7 text-gray-500 md:text-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
