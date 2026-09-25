import Heading from "@/src/components/common/Heading";
import CommonBanner from "@/src/components/CommonBanner";
import ContactForm from "@/src/components/form/ContactForm";
import MaxWidth from "@/src/components/layout/MaxWidth";
import { staticData } from "@/src/utills/Data";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { label, headingParts, description, data } = staticData?.contact;
  return (
 <div>
   <CommonBanner title={"Contact Us"}/>
     <MaxWidth className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[4rem]">
      <div className="my-auto">
        <Heading accentColor="#001845" headingParts={headingParts} label={label} description={description} />
        <div className="pt-[2rem] space-y-8 w-full lg:w-[60%]">
          {data?.map((item, idx: number) => {
            return (
              <div key={idx} className="flex gap-4 ">
                {item?.icon}
                <span className="space-y-2">
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
 </div>
  );
};

export default Page;
