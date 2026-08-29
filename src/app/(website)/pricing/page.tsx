import PageBanner from "@/src/components/common/PageBanner";
import ExpertSkill from "@/src/components/ExpertSkill";
import LetsStart from "@/src/components/LetsStart";
import Pricing from "@/src/components/Pricing";
import React from "react";

function page() {
  return (
    <div>
      <PageBanner heading={"Pricing"} />
      <ExpertSkill />
      <Pricing />
      <LetsStart />
    </div>
  );
}

export default page;
