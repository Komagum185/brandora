'use client'

import React, { ChangeEvent } from 'react'
import { Input } from '../ui/input'
import { motion } from 'framer-motion'
import { ImagesSlider } from '../ui/features'


const Hero = () => {
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.')
  }
  const images = [
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1828051105/photo/businessman-works-on-laptop-showing-2024-business-trends-dashboard-with-charts-metrics-ai-e.webp?b=1&s=612x612&w=0&k=20&c=7D_dGBLSRtnoJ-Owuvc04FwuKO75yR_5ewA_Vf8jpVs=",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (

    <div>
       <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 2,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-blue-600 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <div className='relative flex justify-start m-10 px-8 gap-4'>
        <Input />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            Get started
          </button>
        </div>
        <p className="mb-8 font-sans text-sm flex flex-col">
          <a href="#" className="">
            Contact Us To Get Your Brand Solution Now!
          </a>
        </p>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    </div>
      </motion.div>
    </ImagesSlider>
     
      
      </div>

          
    
  )
}
export default Hero