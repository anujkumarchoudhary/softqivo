"use client";
import React, { useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/softqivo_04.png";
import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary-bg w-full sticky top-0 z-50">
      <MaxWidth className="flex justify-between h-[11vh] lg:h-[11vh] items-center py-2.5 lg:py-4 text-white">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={logo}
            width={225}
            height={50}
            alt="logo"
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          />
        </div>
        <div className="hidden lg:flex gap-2 text-white font-semibold">
          {menuData?.map((menu, idx) => {
            return (
              <p
                key={idx}
                onClick={() => router.push(menu.link)}
                className="my-auto mx-4 capitalize font-semibold text-secondary-color cursor-pointer"
              >
                {menu.title}
              </p>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-8">
          <Button name="Let's Talk" />
        </div>
        <IoReorderThreeSharp
          onClick={() => setOpen(!open)}
          size={35}
          className="block lg:hidden cursor-pointer"
        />
      </MaxWidth>
    </div>
  );
};

export default Header;
