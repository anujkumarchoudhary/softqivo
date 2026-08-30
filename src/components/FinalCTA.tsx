// "use client";

// import { motion } from "framer-motion";
// import MaxWidth from "./layout/MaxWidth";
// import Icon from "../utills/iconMap ";

// interface FinalCTAProps {
//   data?: {
//     label?: string;
//     heading?: string;
//     description?: string;
//     buttonText?: string;
//     buttonHref?: string;
//   };
// }

// export default function FinalCTA({ data }: FinalCTAProps) {
//   return (
//     <section className="relative overflow-hidden bg-black py-24 lg:py-36">
//       {/* ================= BACKGROUND ================= */}

//       <div className="pointer-events-none absolute inset-0">
//         {/* Main glow */}
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

//         {/* Purple glow */}
//         <motion.div
//           animate={{
//             x: [0, 40, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[140px]"
//         />

//         {/* Blue glow */}
//         <motion.div
//           animate={{
//             x: [0, -40, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]"
//         />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <MaxWidth className="relative">
//         {/* ================= CONTENT ================= */}

//         <div className="mx-auto max-w-5xl text-center">
//           {/* Label */}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex items-center justify-center gap-3"
//           >
//             <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
//               {data?.label || "Let's Build"}
//             </span>

//             <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
//           </motion.div>

//           {/* Heading */}

//           <motion.h2
//             initial={{ opacity: 0, y: 45 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.9,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
//           >
//             {data?.heading || (
//               <>
//                 Have an idea
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-500 via-violet-400 to-blue-500 bg-clip-text text-transparent">
//                   worth building?
//                 </span>
//               </>
//             )}
//           </motion.h2>

//           {/* Description */}

//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15,
//             }}
//             className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-500 md:text-lg md:leading-8"
//           >
//             {data?.description ||
//               "Tell us what you're building. We'll help you turn your idea into a thoughtful, scalable digital product built for real-world growth."}
//           </motion.p>

//           {/* CTA */}

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.3,
//             }}
//             className="mt-10 flex justify-center"
//           >
//             <a
//               href={data?.buttonHref || "/contact"}
//               className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
//             >
//               {/* Hover gradient */}

//               <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-500 group-hover:translate-x-0" />

//               <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//                 {data?.buttonText || "Start a Project"}
//               </span>

//               <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
//                 <Icon
//                   name="arrow"
//                   className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
//                 />
//               </span>
//             </a>
//           </motion.div>
//         </div>

//         {/* ================= BOTTOM ================= */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="mt-20 border-t border-white/10 pt-7"
//         >
//           <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
//             <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
//               SoftQivo
//             </span>

//             <span className="text-xs text-gray-600">
//               Strategy · Design · Engineering
//             </span>
//           </div>
//         </motion.div>
//       </MaxWidth>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import Heading from "./common/Heading";

interface FinalCTAData {
  label: string;
  headingParts: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  imageAlt?: string;
}

interface FinalCTAProps {
  data: FinalCTAData;
}

export default function FinalCTA({ data }: any) {
  return (
    <section className="relative overflow-hidden bg-primary-bg py-12 lg:py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]" />

      <MaxWidth className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <div>
            <Heading
              labelColor="#ffffff"
              label={data?.label}
              accentColor="#2563EB"
              headingParts={[
                {
                  text: "Have an idea worth building?",
                  color: "#FFFFFF",
                  size: "clamp(24px, 4vw, 46px)",
                  weight: "700",
                },
              ]}
              textColor="#ffffff"
              description={data?.description}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-9"
            >
              <a
                href={data.buttonHref}
                className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
              >
                <span>{data.buttonText}</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-purple-600">
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </motion.div>

            {/* Small trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                Strategy
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                Design
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                Development
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — IMAGE / GRAPHIC
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Outer frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2">
              {/* Gradient border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#0a0a0d]">
                <Image
                  src={"/images/final_cta.png"}
                  alt={data.imageAlt || "SoftQivo digital product"}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-7 left-7 rounded-xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Ready to build
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Let's create something meaningful.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
                <Icon
                  name="arrow"
                  className="h-5 w-5 rotate-[-45deg] text-white"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-purple-500/40 via-white/10 to-blue-500/40"
        />
      </MaxWidth>
    </section>
  );
}
