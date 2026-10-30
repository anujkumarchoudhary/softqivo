import React from "react";
import Banner from "../../components/common/Banner";
import Client from "../../components/Client";
import About from "../../components/About";
import Feedback from "../../components/Feedback";
import Blog from "../../components/Blog";
import { staticData } from "@/src/utills/Data";
import Services from "../../components/Services";
import CaseStudies from "../../components/CaseStudies";
import FAQ from "../../components/FAQ";
import ProcessSection from "../../components/ProcessSection";
import TeamSection from "../../components/TeamSection";
import FinalCTA from "../../components/FinalCTA";
import TechnologySection from "../../components/TechnologySection";
import { homePageSchema } from "@/@core/lib/schema/pages/homePageSchema";
import JsonLd from "@/@core/lib/schema/JsonLd";
import ProcessSection3 from "@/src/components/ProcessSection3";
import KeyStats from "@/src/components/KeyStats";
const page = () => {
  const { services, caseStudies, process, team, blogs, technologes, finalCta } =
    staticData?.home;

  return (
    <>
      <JsonLd data={homePageSchema} />
      <div>
        <Banner />
        <section className="relative z-10 bg-white">
          <Services data={services} />
        </section>

        <section className="relative z-10 bg-white">
          <CaseStudies data={caseStudies} />
        </section>

        <section className="relative z-10 bg-white">
          <About />
        </section>

        <section className="relative z-10 bg-white">
          <ProcessSection3 />
        </section>

        <section className="relative z-10 bg-white">
          <TeamSection data={team}/>
       </section>

        <section className="relative z-10 bg-white">
          <TechnologySection data={technologes} />
        </section>

        <section className="relative z-10 bg-white">
          <Feedback />
          <Blog data={blogs} />
          <FAQ />
          {/* <FinalCTA /> */}
        </section>
      </div>
    </>
  );
};

export default page;
