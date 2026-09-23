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

export default function OurProcess({ data }: any) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 lg:py-16"
    >
      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/[0.04] blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[160px]" />

      {/* ================= LOCALIZED GRID ================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[1000px] -translate-x-1/2 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at center, black 0%, rgba(0,0,0,0.8) 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at center, black 0%, rgba(0,0,0,0.8) 35%, transparent 75%)",
        }}
      />

      <MaxWidth className="relative">
        {/* ================= HEADER ================= */}

        <div className="mx-auto w-full md:w-[80%] lg:w-[55%]">
          <Heading
            isCenter={true}
            accentColor="#0466C8"
            labelColor="#0466C8"
            textColor="#111827"
            label={data.label}
            headingParts={data.headingParts}
            description={data.description}
          />
        </div>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-20 md:mt-40">
          {/* Background line */}

          <div className="absolute bottom-0 left-[35px] top-0 w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[35px] top-0 w-px origin-top bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Steps */}

          <div className="space-y-28 md:space-y-40">
            {data.steps.map((step:any, index:number) => (
              <ProcessItem
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ================= RESULT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-gray-200 pt-10 md:mt-44"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                {data.result.label}
              </p>

              <p className="mt-4 max-w-2xl text-2xl font-medium leading-relaxed tracking-tight text-gray-900 md:text-3xl">
                {data.result.text}

                <span className="text-gray-400">
                  {data.result.highlight}
                </span>
              </p>
            </div>

            <div className="group flex cursor-pointer items-center justify-end gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 transition-all duration-300 group-hover:border-blue-500/60 group-hover:bg-blue-500/10">
                <Icon
                  name="arrow"
                  className="relative z-10 h-5 w-5 text-gray-500 transition-all duration-300 group-hover:-rotate-45 group-hover:text-blue-600"
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

function ProcessItem({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
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
      {/* ================= NUMBER ================= */}

      <div
        className={`hidden md:block ${
          index % 2 === 0
            ? "pr-24 text-right"
            : "order-2 pl-24"
        }`}
      >
        <span className="text-[140px] font-semibold leading-none tracking-[-0.08em] text-gray-900/[0.06]">
          {step.number}
        </span>
      </div>

      {/* ================= CENTER NODE ================= */}

      <div className="absolute left-[35px] top-0 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          whileInView={{
            scale: [0.7, 1.15, 1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-300 bg-white"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.35)]" />
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className={`pl-16 md:pl-0 ${
          index % 2 === 0
            ? "md:order-2 md:pl-24"
            : "md:pr-24 md:text-right"
        }`}
      >
        <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
          {step.tag}
        </span>

        <h3 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-lg text-base leading-7 text-gray-500 md:text-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}