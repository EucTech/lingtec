import AIModels from '@/components/OurServices/AIModels'
import Dashboard from '@/components/OurServices/Dashboard'
import Testimonties from '@/components/Testimonties'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'
import OurServicesHero from '@/components/OurServices/OurServicesHero'
import OurServicesImage from '@/components/OurServices/OurServicesImage'

const page = () => {
  return (
    <div>
       <OurServicesHero/>
       <WhyChoose/>
       <AIModels/>
       <Dashboard/>
       <Testimonties/>
       <OurServicesImage/>
    </div>
  )
}

export default page