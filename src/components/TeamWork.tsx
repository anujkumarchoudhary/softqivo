import React from "react";
import MaxWidth from "./layout/MaxWidth";
import img2 from "../../public/images/pricing.jpg";
import Image from "next/image";
// import Heading from "./common/Heading";
import { staticData } from "../utills/Data";
import { MdCheck } from "react-icons/md";
import Button from "./common/Button";

const TeamWork = () => {
  const { title, description, list } = staticData?.serviceDetails?.teamWork;

  return (
    <MaxWidth className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem] py-[2.5rem] lg:py-[6rem]">
      <div className="relative">
        <Image
          src={img2}
          fill
          alt="point of service"
          className="object-cover"
        />
      </div>
      <div className="py-[4rem] lg:py-12">
        {/* <Heading label="Dedicated Team Work" heading={title} /> */}
        <div className="pb-8">
          {description?.map((desc: any) => {
            return <p>{desc}</p>;
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
        <Button name="Get a Quote" />
      </div>
    </MaxWidth>
  );
};

export default TeamWork;
