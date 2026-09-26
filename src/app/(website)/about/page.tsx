import FinalCTA from "@/src/components/FinalCTA";
import Blog from "@/src/components/Blog";
import { staticData } from "@/src/utills/Data";
import TeamSection from "@/src/components/TeamSection";
import TechnologySection from "@/src/components/TechnologySection";
import OurStory from "@/src/components/OurStory";
import AboutBanner from "@/src/components/AboutBanner";
import OurProcess from "@/src/components/ProcessSection";

const Page = () => {
  const {  process, team, technologes } =
    staticData?.home;
      const { banner, blogs } =
    staticData?.about;
  return (
    <div>
      <AboutBanner data={banner}/>
      <OurStory />
      <OurProcess data={process} />
      <TeamSection data={team} />
      <TechnologySection data={technologes} />
      <Blog data={blogs} />
      <FinalCTA />
    </div>
  );
};

export default Page;
