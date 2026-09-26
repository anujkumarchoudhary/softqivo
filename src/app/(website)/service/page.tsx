import Client from '@/src/components/Client'
import PageBanner from '@/src/components/common/PageBanner'
import WhatWeDo from '@/src/components/WhatWeDo'
import React from 'react'
import { staticData } from '@/src/utills/Data'
import CommonBanner from '@/src/components/CommonBanner'
import Services from '@/src/components/Services'
import FinalCTA from '@/src/components/FinalCTA'
import ProcessSection from '@/src/components/ProcessSection'
import WhySoftQivo from '@/src/components/WhySoftQivo'
import ProcessSection2 from '@/src/components/ProcessSection2'
import OurServices from '@/src/components/OurServices'

const page = () => {
    const { whatWeDo } = staticData.home || {};
  const { services, caseStudies, process, team, blogs, technologes, finalCta } =
    staticData?.home;
  return (
    <div>
      {/* Banner */}
      <CommonBanner
      breakIndex={4}
        label="OUR SERVICES"
        title="Digital solutions built"
        highlight="for real growth."
        description="From websites and web applications to custom software, mobile apps, and scalable backend systems, we build digital products designed to perform and grow with your business."
        breadcrumb="Services"
      />

      {/* Services */}
      <OurServices data={services} />

      {/* Why SoftQivo */}
      <WhySoftQivo />

      {/* Process */}
      <ProcessSection2/>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}

export default page