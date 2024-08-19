import React from 'react'
import { ServiceList } from './service-item'
import Features from '@/components/ui/why-us'

const Service = () => {
  return (
    <main className='w-screen'>
    <div className='font-sans -mx-4 sm:-mx-6 lg:-mx-8'>
      <ServiceList />
      <Features />
    </div>

    </main>
  )
}

export default Service