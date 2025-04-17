import AboutHero from '@/components/AboutUs/AboutHero'
import Career from '@/components/AboutUs/Career'
import Value from '@/components/AboutUs/Value'
import WhatSetUs from '@/components/AboutUs/WhatSetUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <WhatSetUs/>
      <Value/>
      <Career/>
    </div>
  )
}

export default page
