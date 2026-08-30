import Blog from "@/src/components/Blog";
import PageBanner from "@/src/components/common/PageBanner";
import LetsStart from "@/src/components/LetsStart";
function page() {
  return (
    <div>
      <PageBanner heading={"Our Portfolio"}/>
      {/* <Blog /> */}
      <LetsStart />
    </div>
  );
}

export default page;
