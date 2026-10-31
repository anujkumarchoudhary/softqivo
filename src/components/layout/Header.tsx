
"use client";

import React, { useEffect, useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/images/home/sq_03.png";
import Image from "next/image";
import { footerMenuData, menuData } from "@/src/data/menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowUpRight, FiChevronRight, FiX } from "react-icons/fi";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerPassed, setBannerPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const banner = document.getElementById("hero-banner");

    let observer: IntersectionObserver | undefined;

    if (banner) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setBannerPassed(!entry.isIntersecting);
        },
        {
          threshold: 0,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(banner);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);



  const headerClass = bannerPassed
    ? "bg-white text-black shadow-lg"
    : scrolled
      ? "bg-[#001029] text-white shadow-lg"
      : "bg-[#001029] shadow-lg text-white shadow-none";

  const headerLogoClass = bannerPassed
    ? "text-black"
    : scrolled
      ? "text-white"
      : "text-white";

  const navClass = bannerPassed
    ? "text-gray-800 hover:text-violet-600"
    : "text-white hover:text-violet-300";
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed  shadow-2xl inset-x-0 top-0 z-50 w-full
        transition-colors duration-500 ease-in-out bg-dark`}
    >
      <MaxWidth className="py-2 flex justify-between lg:py-2.5">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer my-auto flex gap-2"
        >
          <Image
            src={logo}
            width={225}
            height={50}
            alt="SoftQivo logo"
            priority
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          />
        </div>

        {/* <nav className="hidden lg:flex gap-2 font-semibold">
            {menuData?.map((menu, idx) => (
              <p
                key={idx}
                onClick={() => router.push(menu.link)}
                className={`my-auto mx-4 capitalize cursor-pointer
                  transition-colors duration-300 ${navClass}`}
              >
                {menu.title}
              </p>
            ))}
          </nav> */}

        <div onClick={() => setOpen(!open)} className=" my-auto flex gap-8">
          {/* <Button
            name="Let's Talk"
            handleClick={() => router.push("/schedule-meeting")}
          /> */}
          {/* <SaveAndCancel
            saveText="Let's Talk"
            handleClick={() => setOpen(!open)}
            className="mx-auto lg:mx-0" handleClick2={undefined}/>           */}
          {/* <LuAlignRight size={40} className="my-auto" /> */}
          <div className="flex my-auto flex-col items-end space-y-2.5 cursor-pointer">
            <div className="w-10 lg:w-14 h-0.75 bg-white" />
            <div className="w-6 lg:w-8 h-0.75 bg-white" />
            {/* <div className="w-6 h-0.75 bg-white" /> */}
          </div>
        </div>
      </MaxWidth>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />

            {/* Desktop and Mobile Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[101] flex h-dvh w-full flex-col overflow-hidden bg-dark/95 text-white sm:w-[90%] md:w-[85%] lg:w-[750px]"            >
              <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-10 lg:p-12">

                {/* Fixed Header */}
                <div className="z-20 flex shrink-0 items-center justify-between border-b border-white/15 bg-dark/95 pb-6">
                  <Image
                    src={logo}
                    width={205}
                    height={50}
                    alt="SoftQivo logo"
                    priority
                    style={{
                      width: "clamp(180px, 18vw, 205px)",
                      height: "auto",
                    }}
                  />

                  <button
                    onClick={() => setOpen(false)}
                    className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#001029]"
                    aria-label="Close navigation menu"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                {/* Scrollable Menu Content */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                  <div className="grid grid-cols-1 gap-10 py-8 sm:gap-12 sm:py-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Main Navigation */}
                    <div>
                      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                        Navigation
                      </p>

                      <nav className="flex flex-col">
                        {menuData.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between border-b border-white/10 py-4 text-xl font-medium transition hover:text-[#7D83FF] sm:text-2xl"
                          >
                            <span>{item.title}</span>
                            <FiArrowUpRight className="opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Services */}
                    <div>
                      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                        Our Services
                      </p>

                      <div className="grid grid-cols-1 gap-3">
                        {footerMenuData?.slice(5, 10)?.map((item, idx: number) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#656CFF]/50 hover:bg-white/[0.07]"
                          >
                            <span className="text-sm font-medium sm:text-base">
                              {item.title}
                            </span>

                            <FiChevronRight className="text-white/40 transition group-hover:translate-x-1 group-hover:text-[#7D83FF]" />
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Fixed Bottom CTA */}
                <div className="mt-4 shrink-0 border-t border-white/15 pt-8">
                  <p className="mb-3 text-sm text-white/50">
                    Have a project in mind?
                  </p>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group flex w-full items-center justify-between rounded-xl bg-light/5 px-6 py-5 text-lg font-semibold transition hover:bg-light/10"
                  >
                    Let's Talk

                    <FiArrowUpRight
                      size={22}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>

                  <p className="mt-6 text-xs text-white/35">
                    © {new Date().getFullYear()} SoftQivo. All rights reserved.
                  </p>
                </div>

              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
