import React from "react";
import Banner from "../components/common/Banner";
import MaxWidth from "../components/layout/MaxWidth";
import Client from "../components/Client";
import About from "../components/About";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import BringYourIdea from "../components/BringYourIdea";
import ExpertSkill from "../components/ExpertSkill";
import TakeTheTime from "../components/TakeTheTime";
import Pricing from "../components/Pricing";
import DedicatedSupport from "../components/DedicatedSupport";
import Feedback from "../components/Feedback";
import Blog from "../components/Blog";
import { staticData } from "@/src/utills/Data";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import FAQ from "../components/FAQ";

const page = () => {
  const { services, caseStudies } = staticData?.home;

  return (
    <div>
      <Banner />
      <Services data={services} />
      <CaseStudies data={caseStudies} />
      <About />
      <WhoWeAre />
      <BringYourIdea />
      <ExpertSkill />
      <TakeTheTime />
      <DedicatedSupport />
      <Feedback />
      <Blog />
      <FAQ/>
    </div>
  );
};

export default page;
