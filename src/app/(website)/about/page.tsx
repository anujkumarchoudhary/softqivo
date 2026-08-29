import React from "react";
import page from "../../page";
import PageBanner from "@/src/components/common/PageBanner";
import BringYourIdea from "@/src/components/BringYourIdea";
import ExpertSkill from "@/src/components/ExpertSkill";
import About from "@/src/components/About";
import OurVision from "@/src/components/OurVision";

const Page = () => {
  return (
    <div>
      <PageBanner heading={"About"} />
      <About />
      <OurVision />
      <ExpertSkill />
      <BringYourIdea />
    </div>
  );
};

export default Page;
