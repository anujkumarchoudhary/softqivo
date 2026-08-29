import PageBanner from "@/src/components/common/PageBanner";
import PointOfService from "@/src/components/PointOfService";
import TeamWork from "@/src/components/TeamWork";
import WeCreate from "@/src/components/WeCreate";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner heading={"Web Development"}/>
      <PointOfService />
      <WeCreate />
      <TeamWork />
    </div>
  );
};

export default page;
