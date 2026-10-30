
"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";

const stats = [
  {
    value: "300+",
    title: "Successfully designed and developed",
    description: "For growing businesses.",
  },
  {
    value: "95%",
    title: "Trusted by businesses",
    description: "For high-quality digital experiences.",
  },
  {
    value: "50+",
    title: "Web solutions",
    description: "Tailored to diverse business needs.",
  },
  {
    value: "24/7",
    title: "Reliable support",
    description: "To keep your website performing smoothly.",
  },
];

const KeyStats = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-20 md:py-28">
      <MaxWidth>
        {/* Section heading */}
        <div className="mb-14 text-center md:mb-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Our Impact
          </span>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#101828] md:text-5xl">
            Results That Reflect
            <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Our Commitment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Delivering thoughtful digital experiences through technology,
            creativity, and a commitment to quality.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)] md:p-8"
            >
              {/* Decorative accent */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-100/60 blur-3xl transition-all duration-500 group-hover:bg-violet-200" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                    0{index + 1}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-violet-500 transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h3 className="mb-5 text-5xl font-bold tracking-tight text-[#111827] md:text-6xl">
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </h3>

                <div className="mb-5 h-[2px] w-12 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-20" />

                <h4 className="mb-2 text-lg font-semibold leading-snug text-[#172033]">
                  {stat.title}
                </h4>

                <p className="text-sm leading-6 text-gray-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default KeyStats;
