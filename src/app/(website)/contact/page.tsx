import Heading from "@/src/components/common/Heading";
import ContactForm from "@/src/components/form/ContactForm";
import MaxWidth from "@/src/components/layout/MaxWidth";
import { staticData } from "@/src/utills/Data";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { label, headingParts, description, data } = staticData?.contact;
  return (
    <MaxWidth className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
      <div className="my-auto">
        <Heading headingParts={headingParts} label={label} description={description} />
        <div className="pt-[2rem]">
          {data?.map((item, idx: number) => {
            return (
              <div key={idx} className="flex gap-4 space-y-[2rem]">
                {item?.icon}
                <span>
                  <h5>{item?.title}</h5>
                  <p>{item?.description}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <ContactForm />
    </MaxWidth>
  );
};

export default Page;
