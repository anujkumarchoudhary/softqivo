import React from "react";
import page from "../../page";
import PageBanner from "@/src/components/common/PageBanner";
import BringYourIdea from "@/src/components/BringYourIdea";
import ExpertSkill from "@/src/components/ExpertSkill";
import About from "@/src/components/About";
import OurVision from "@/src/components/OurVision";
import FinalCTA from "@/src/components/FinalCTA";
import Blog from "@/src/components/Blog";
import { staticData } from "@/src/utills/Data";
import TeamSection from "@/src/components/TeamSection";
import TechnologySection from "@/src/components/TechnologySection";
import OurStory from "@/src/components/OurStory";
import AboutTeamSection from "@/src/components/AboutTeamSection";

const Page = () => {
  const { services, caseStudies, process, team, blogs, technologes, finalCta } =
    staticData?.home;
  return (
    <div>
      <PageBanner heading={"About"} />
      <OurStory />
      {/* <TeamSection data={team} /> */}
      <AboutTeamSection data={team}/>
      {/* <TechnologySection data={technologes} /> */}
      <Blog data={blogs} />
      <FinalCTA />
    </div>
  );
};

export default Page;
