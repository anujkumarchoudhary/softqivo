import { staticData } from '@/src/utills/Data'
import CommonBanner from '@/src/components/CommonBanner'
import FinalCTA from '@/src/components/FinalCTA'
import WhySoftQivo from '@/src/components/WhySoftQivo'
import ProcessSection2 from '@/src/components/ProcessSection2'
import OurServices from '@/src/components/OurServices'

const page = () => {
  const { services } =
    staticData?.home;
  return (
    <div>
      {/* Banner */}
      <CommonBanner
        breakIndex={6}
        label="OUR SERVICES"
        title=" Digital solutions built "
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