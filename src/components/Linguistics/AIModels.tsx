import Link from 'next/link'
import React from 'react'

const AIModels = () => {
  return (
    <div className='w-full flex md:flex-row flex-col items-center justify-between gap-10 font-sf  bg-[#F9F5FF] py-10 px-5 sm:px-10 md:px-20 lg:px-16 xl:px-20 2xl:px-40'>
        <div className='flex flex-col gap-2 md:text-start text-center'>
            <h1 className='text-[22px] tetxt-[#fff] font-[700]'>Ready to take your AI models level?</h1>
            <p className='text-[15px] text-[#292D32] font-[400]'>Get up and running in less than 5 minutes.</p>
        </div>

        <Link href="#">
        <button className="flex items-center cursor-pointer bg-tpurple text-[#fff] hover:bg-tpurple/60 transition-colors duration-300 px-10 py-4 gap-2 rounded-md">
          <p className="text-[15px] font-[700]">Get started</p>
        </button>
      </Link>
    </div>
  )
}

export default AIModels