import Blog from "@/src/components/Blog";
import PageBanner from "@/src/components/common/PageBanner";
import CommonBanner from "@/src/components/CommonBanner";
import LetsStart from "@/src/components/LetsStart";
import OurPortfolio from "@/src/components/OurPortfolio";
function page() {
  return (
    <div>
      <CommonBanner
        breakIndex={5}
        label="OUR PORTFOLIO"
        title="Ideas turned "
        highlight="into real products."
        description="Explore a selection of digital products, websites, applications, and software solutions we’ve designed and built to solve real business challenges."
        breadcrumb="Portfolio"
      />
      <OurPortfolio />
      <LetsStart />
    </div>
  );
}

export default page;
