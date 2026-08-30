import Blog from "@/src/components/Blog";
import PageBanner from "@/src/components/common/PageBanner";
import LetsStart from "@/src/components/LetsStart";
import { staticData } from "@/src/utills/Data";
function page() {
  const { services, caseStudies, process, team, blogs, finalCta } =
    staticData?.home;
  return (
    <div>
      <PageBanner heading={"Our Blog"} />
      <Blog data={blogs} />
      <LetsStart />
    </div>
  );
}

export default page;
