"use client";

import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: "Google",
    logo: "/images/brands/google.svg",
  },
  {
    name: "Microsoft",
    logo: "/images/brands/microsoft.svg",
  },
  {
    name: "AWS",
    logo: "/images/brands/aws.svg",
  },
  {
    name: "DigitalOcean",
    logo: "/images/brands/digitalocean.svg",
  },
  {
    name: "Vercel",
    logo: "/images/brands/vercel.svg",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-[#050509]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10 lg:gap-14">
          {/* Label */}
          <p
            className="
              whitespace-nowrap
              font-poppins
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/35
            "
          >
            Trusted by businesses worldwide
          </p>

          {/* Companies */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-8 lg:gap-x-10">
            {companies.map((company) => (
              <div
                key={company.name}
                className="
                  group
                  flex
                  h-7
                  items-center
                  justify-center
                  opacity-55
                  grayscale
                  transition-all
                  duration-300
                  hover:opacity-100
                  hover:grayscale-0
                "
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={28}
                  className="h-5 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;