'use client'
import React from 'react'
import { IconArrowRight } from '@tabler/icons-react'
import { BentoGridDemo } from '../ui/bento-grid-demo'
const handleClick =()=> {
    console.log("You clicked me!")
}
const OurServices  = () => {
  return (
    <div className='mt-8'>
        <div>
            <h2 className='text-center text-2xl font-extrabold font-sans'>Discover our services</h2>
            <div onClick={handleClick} className='flex justify-center items-center cursor-pointer'>
            <p className=' text-center text-xs text-blue-600'>Learn more about our works</p>
            <IconArrowRight color={'blue'} size={12}/>
            </div>
            <BentoGridDemo />
        </div>
        <div className='px-8 gap-10 mt-8'>
            <h2 className='text-center text-2xl font-extrabold font-sans'>Our success stories</h2>
            <div onClick={handleClick} className='px-8 flex justify-center items-center cursor-pointer'>
            <p className=' text-center text-xs text-blue-600'>Learn more about our works</p>
            <IconArrowRight color={'blue'} size={12}/>
            </div>
            <BentoGridDemo/>
        </div>
    </div>
  )
}

export default OurServices 