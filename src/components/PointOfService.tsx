import React from "react";
import MaxWidth from "./layout/MaxWidth";
import img from "../../public/images/whowe.jpg";
import img2 from "../../public/images/pricing.jpg";

import Image from "next/image";
// import Heading from "./common/Heading";
import { staticData } from "../utills/Data";
import { MdCheck } from "react-icons/md";

const PointOfService = () => {
  const { title, description, list } = staticData?.serviceDetails?.pointOfService;

  return (
    <MaxWidth className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] py-[2.5rem] lg:gap-[4rem] lg:py-[6rem]">
      <div className="relative">
        <Image src={img} fill alt="point of service" className="object-fill" />
      </div>
      <div className="col-span-2 py-12">
        {/* <Heading heading={title} isButton={true} /> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 py-4 lg:py-8 gap-[2rem]">
          <div className="col-span-2">
            {description?.map((desc: any) => {
              return <p className="my-4">{desc}</p>;
            })}
            <div className="pt-2">
              {list?.map((item: any) => {
                return (
                  <span className="flex gap-2 my-2">
                    <MdCheck className="my-auto font-bold" />
                    <p>{item}</p>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <Image
              src={img2}
              fill
              alt="point of service"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default PointOfService;
