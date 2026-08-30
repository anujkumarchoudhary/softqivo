import React from "react";
import Banner from "../components/common/Banner";
import Client from "../components/Client";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Blog from "../components/Blog";
import { staticData } from "@/src/utills/Data";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import FAQ from "../components/FAQ";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
//
const page = () => {
  const { services, caseStudies, process, team, blogs } = staticData?.home;

  return (
    <div>
      <Banner />
      <Services data={services} />
      <CaseStudies data={caseStudies} />
      <About />
      <ProcessSection data={process} />
      <TeamSection data={team} />
      <Feedback />
      <Blog data={blogs} />
      <FAQ />
    </div>
  );
};

export default page;
