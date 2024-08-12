'use client'

import React, { ChangeEvent } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateUI'

const Hero = () => {
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='pb-20 pt-36'>
        <div> 
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-4[80v]' fill='purple' />
        <Spotlight className='top-28 left-80 h-s[80vh w-50v]' fill='blue' />
        </div>
        <div className="h-screen w-full dark:bg-gray-900 bg-gray-900  dark:bg-grid-white/[0.03] bg-grid-gray/[0.2] flex items-center justify-center relative top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center 
        justify-center dark:bg-gray-900 bg-gray-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center'>
          <h2 className='uppercase tracking-widest text-2xl text-start font-bold text-white max-w-80'>UNLEASH THE POWER OF YOUR BRAND</h2>
          <TextGenerateEffect 
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='We use our professional marketing capabilities to help your brand move towards the future.'
          />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero