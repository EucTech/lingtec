import AIModels from '@/components/Linguistics/AIModels'
import Dashboard from '@/components/Linguistics/Dashboard'
import LingImage from '@/components/Linguistics/LingImage'
import LinguisticsHero from '@/components/Linguistics/LinguisticsHero'
import Testimonties from '@/components/Testimonties'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <div>
       <LinguisticsHero/>
       <WhyChoose/>
       <AIModels/>
       <Dashboard/>
       <Testimonties/>
       <LingImage/>
    </div>
  )
}

export default page