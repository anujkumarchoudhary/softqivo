import Client from '@/src/components/Client'
import PageBanner from '@/src/components/common/PageBanner'
import WhatWeDo from '@/src/components/WhatWeDo'
import React from 'react'
import { staticData } from '@/src/utills/Data'

const page = () => {
    const { whatWeDo } = staticData.home || {};

  return (
    <div>
        <PageBanner heading={'Our Services'}/>
        <WhatWeDo data={whatWeDo} />
        <Client/>
    </div>
  )
}

export default page