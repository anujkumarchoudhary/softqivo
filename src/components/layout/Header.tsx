"use client";
import React, { useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/softqivo.png";
import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#001845]">
      <MaxWidth className="flex justify-between h-[10vh] items-center py-4 text-white">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={logo}
            width={225}
            height={50}
            alt="logo"
            style={{
              width: "clamp(140px, 18vw, 225px)",
              height: "auto",
            }}
          />
          {/* <h2
            onClick={() => router.push("/")}
            className="cursor-pointer capitalize text-[#FFFFFF]"
          >
            SoftQivo
          </h2> */}
        </div>
        <div className="hidden lg:block">
          {menuData?.map((menu, idx) => {
            return (
              <span
                key={idx}
                onClick={() => router.push(menu.link)}
                className="my-auto mx-4 uppercase cursor-pointer"
              >
                {menu.title}
              </span>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-8">
          <p className="cursor-pointer text-[#FFFFFF] font-bold my-auto">
            +91: 9953176985
          </p>
          <Button name="Get a Quote" />
        </div>
        <IoReorderThreeSharp
          onClick={() => setOpen(!open)}
          size={35}
          className="block lg:hidden cursor-pointer"
        />
        {/* {open && (
          <div className="absolute top-[70px] h-[100vh] left-0 w-full bg-white shadow-lg flex flex-col items-left p-6 gap-4 lg:hidden z-50">
            {menuData?.map((menu, idx) => {
              return (
                <span
                  key={idx}
                  onClick={() => {
                    router.push(menu.link);
                    setOpen(false);
                  }}
                  className="uppercase w-fit text-[#000000] cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
                >
                  {menu.title}
                </span>
              );
            })}
          </div>
        )} */}
      </MaxWidth>
    </div>
  );
};

export default Header;
