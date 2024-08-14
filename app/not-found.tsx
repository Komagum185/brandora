import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center gap-8'>
      <h2 className='font-sans text-red-600'>Not Found</h2>
      <p>Sorry the page you are looking for does not exist</p>
      <Link href={'/'} className='text-blue-600'> Return Home</Link>
    </div>
  )
}

export default NotFound
