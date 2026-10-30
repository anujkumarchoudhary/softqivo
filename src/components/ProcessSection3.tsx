
"use client";

import Image from "next/image";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";
import MaxWidth from "./layout/MaxWidth";

type ProcessItem = {
    number?: string;
    title: string;
    description: string;
    image: string;
    color?: string;
};

const defaultSteps: ProcessItem[] = [
    {
        number: "01",
        title: "Discover",
        description: "We understand your business, audience, goals, and challenges.",
        image: "/images/process/discover.jpg",
        color: "#00132C",
    },
    {
        number: "02",
        title: "Strategize",
        description: "We create a clear roadmap and select the right technology.",
        image: "/images/process/strategize.jpg",
        color: "#00132C",
    },
    {
        number: "03",
        title: "Develop",
        description: "We build a responsive, scalable digital solution.",
        image: "/images/process/develop.jpg",
        color: "#00132C",
    },
    {
        number: "04",
        title: "Deliver",
        description: "We test, launch, and refine your solution.",
        image: "/images/process/deliver.jpg",
        color: "#00132C",
    },
];
export default function ProcessSection3({
    data,
}: {
    data?: ProcessItem[];
}) {
    const steps = (data?.length ? data : defaultSteps).slice(0, 4);
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F7F7F7] text-white"
            style={{ height: `${(steps.length + 1) * 100}vh` }}
        >
            <MaxWidth className="sticky top-0 h-screen overflow-hidden">
                <div className="mx-auto flex h-full flex-col py-10 md:py-24">
                    {/* Header */}
                    <div className="flex shrink-0 items-end justify-between gap-8">
                        <h2 className=" text-black font-semibold leading-13">
                            Our
                            <br />
                            Process
                        </h2>

                        <p className="hidden max-w-[390px] pb-2 text-right text-base leading-relaxed text-black/50 md:block">
                            A disciplined four-step framework that eliminates guesswork
                            and delivers predictable growth.
                        </p>
                    </div>

                    {/* Dynamic divider */}
                    <div className="mt-8 flex shrink-0 gap-3 md:mt-10">
                        {steps.map((step, index) => (
                            <div key={step.number ?? index} className="flex-1">
                                <div className="h-[2px] overflow-hidden bg-white/15">
                                    <ProgressLine
                                        progress={scrollYProgress}
                                        index={index}
                                        total={steps.length}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-white/80">
                                    {step.number ?? String(index + 1).padStart(2, "0")}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Cards stage */}
                    <div className="relative mt-6 min-h-0 flex-1">
                        {steps.map((step, index) => (
                            <ProcessCard
                                key={step.number ?? index}
                                step={step}
                                index={index}
                                total={steps.length}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
}

function ProgressLine({
    progress,
    index,
    total,
}: {
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    index: number;
    total: number;
}) {
    const width = useTransform(
        progress,
        [
            Math.max(0, index / (total + 1)),
            Math.min(1, (index + 1) / (total + 1)),
        ],
        ["0%", "100%"]
    );

    return (
        <motion.div
            className="h-full bg-blue-600"
            style={{ width }}
        />
    );
}

function ProcessCard({
    step,
    index,
    total,
    progress,
}: {
    step: ProcessItem;
    index: number;
    total: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    // Each new card enters during its own scroll interval.
    const start = index / (total + 1);
    const end = (index + 1) / (total + 1);

    const y = useTransform(
        progress,
        [start, end],
        ["110%", "0%"]
    );

    const opacity = useTransform(
        progress,
        [start, start + 0.04],
        [0, 1]
    );

    // Cards form a growing row and remain visible after entering.
    const left = `${index * 25}%`;

    return (
        <motion.article
            className="absolute bottom-0 top-0 w-[82%] overflow-hidden rounded-2xl border border-white/20 sm:w-[55%] lg:w-[24%]"
            style={{
                left,
                y: index === 0 ? "0%" : y,
                opacity: 1,
                zIndex: index + 1,
                backgroundColor: step.color || "#E3E3E3",
            }}
        >
            {/* <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 55vw, 24vw"
                className="object-cover"
            /> */}

            {/* Consistent orange tint */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: step.color || "#E3E3E3",
                    opacity: 0.12,
                }}
            />
            {/* Dark gradient only at the bottom for readable text */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

            <div className="relative z-10 flex h-full flex-col p-5 md:p-7">
                <span className="self-end text-6xl font-semibold leading-none text-white/60 md:text-7xl lg:text-8xl">
                    {step.number ?? String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-auto  pb-2">
                    <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
                        {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white md:text-base">
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}
