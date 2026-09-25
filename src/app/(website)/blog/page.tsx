import Blog from "@/src/components/Blog";
import PageBanner from "@/src/components/common/PageBanner";
import CommonBanner from "@/src/components/CommonBanner";
import LetsStart from "@/src/components/LetsStart";
import { staticData } from "@/src/utills/Data";
function page() {
  const { services, caseStudies, process, team, blogs, finalCta } =
    staticData?.home;
  return (
    <div>
      <CommonBanner title={"Ideas, insights & digital thinking."} description="Browse our latest articles to learn practical tips, emerging trends, and innovative solutions that empower businesses to increase visibility,attract customers."/>
      <Blog data={blogs} />
      <LetsStart />
    </div>
  );
}

export default page;
