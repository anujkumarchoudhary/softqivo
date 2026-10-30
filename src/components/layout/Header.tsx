
"use client";

import React, { useEffect, useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/images/home/sq_03.png";
import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";
import Icon from "@/src/utills/iconMap ";
import { MdClose } from "react-icons/md";
import { RxTextAlignRight } from "react-icons/rx";
import { LuAlignRight } from "react-icons/lu";
import SaveAndCancel from "../common/SaveAndCancel";

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


  return (
    <header
      className={`fixed  shadow-2xl inset-x-0 top-0 z-50 w-full
        transition-colors duration-500 ease-in-out ${headerClass}`}
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
          {/* <p className="my-auto text-[35px] font-bold text-blue-600">SQ</p>
          <p className={`my-auto text-[30px] font-normal ${headerLogoClass}`}>|</p> */}
          {/* <p className={`my-auto text-[35px] font-semibold ${headerLogoClass}`}>Soft<span className="text-blue-600">Q</span>ivo</p> */}
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

        <div className="hidden my-auto lg:flex gap-8">
          {/* <Button
            name="Let's Talk"
            handleClick={() => router.push("/schedule-meeting")}
          /> */}
          {/* <SaveAndCancel
            saveText="Let's Talk"
            handleClick={() => setOpen(!open)}
            className="mx-auto lg:mx-0" handleClick2={undefined}          />           */}
          {/* <LuAlignRight size={40} className="my-auto" /> */}
          <div className="flex flex-col items-end space-y-2.5">
            <div className="w-14 h-0.75 bg-white" />
            <div className="w-8 h-0.75 bg-white" />
            {/* <div className="w-6 h-0.75 bg-white" /> */}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="block lg:hidden cursor-pointer"
        >
          {open ? (
            <MdClose size={35} />
          ) : (
            <IoReorderThreeSharp size={35} />
          )}
        </button>
      </MaxWidth>

      {open && (
        <div className="absolute top-full left-0 right-0
          bg-white text-gray-900 shadow-lg lg:hidden">
          <div className="flex flex-col divide-y divide-black/10">
            {menuData?.map((menu, idx) => (
              <p
                key={idx}
                onClick={() => {
                  router.push(menu.link);
                  setOpen(false);
                }}
                className="cursor-pointer px-6 py-4 font-semibold
                  capitalize hover:bg-gray-100"
              >
                {menu.title}
              </p>
            ))}
          </div>

          <div className="flex px-6 py-4 items-center gap-3">
            <a href="#" aria-label="LinkedIn">
              <Icon name="FaLinkedinIn" size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon name="FaInstagram" size={20} />
            </a>
            <a
              href="https://x.com/softqivo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftQivo on X"
            >
              <Icon name="FaTwitter" size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
