'use client'
import React from 'react'
import { IconArrowRight } from '@tabler/icons-react'
import { BentoGridDemo } from '../ui/bento-grid-demo'

export const handleClick =()=> {
    console.log("You clicked me!")
}
export const OurServices  = () => {
  return (
    <div className='mt-8'>
        <div>
            <h2 className='text-center text-2xl font-extrabold font-sans'>Discover our services</h2>
            <div onClick={handleClick} className='flex justify-center items-center cursor-pointer'>
            <p className=' text-center text-xs text-blue-600'>Learn more about our works</p>
            <IconArrowRight color={'blue'} size={12}/>
            </div>
            <BentoGridDemo/>   
        </div>
    </div>
  )
}
