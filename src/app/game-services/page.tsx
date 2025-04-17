import GameSericesHero from '@/components/GameServices/GameServicesHero'
import ServicesCard from '@/components/GameServices/ServicesCard'
import WhyYouShouldChoose from '@/components/GameServices/WhyYouShouldChoose'
import FAQs from '@/components/HomePage/FAQs'
import React from 'react'

const page = () => {
  return (
    <div>
      <GameSericesHero/>
      <ServicesCard/>
      <WhyYouShouldChoose/>
      <FAQs/>
    </div>
  )
}

export default page
