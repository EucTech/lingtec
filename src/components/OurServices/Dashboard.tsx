import { Images } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <Image
              src={Images.l6}
              alt="Hero Image"
              width={3000}
              height={3000}
              className="w-full"
            />
    </div>
  )
}

export default Dashboard
