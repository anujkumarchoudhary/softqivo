import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import vision from "../../public/images/vision.jpg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { IoBugOutline, IoCodeSlash } from "react-icons/io5";
import { PiCode } from "react-icons/pi";

const OurVision = () => {
  return (
    <div className="bg-[#F9F9F9] py-[3rem] lg:py-[6rem]">
      <MaxWidth className="space-y-10"> 
        <Heading
          headingParts={[
            {
              text: "stay up-to-date with the latest technologies and industry trends",
              color: "#001845",
              size: "clamp(24px, 4vw, 46px)",
              weight: "700",
            },
          ]}
          label={"Our Vission"}
          className="w-[75%]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
          <Image src={vision} alt="Vision" className="w-full h-auto" />
          <div className="my-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-4 py-3 pt-6">
              <FaCheck size={20}   className="text-[#001845]" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div className="flex gap-4 py-">
              <FaCheck size={20}  className="text-[#001845]" />
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex gap-3 pt-6">
              <IoBugOutline size={40}  className="text-[#001845]" />
              <div>
                <h3 className="text-[1.25rem] font-bold pb-1 text-[#001845]">
                  Minimalize Bug Reports
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex gap-3 pt-6">
              <PiCode size={40} className="text-[#001845]" />
              <div>
                <h3 className="text-[1.25rem] font-bold pb-1 text-[#001845]">
                  Give The Clean Of Code
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default OurVision;
