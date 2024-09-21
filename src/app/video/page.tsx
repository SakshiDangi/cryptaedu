import Videos from '@/components/Videos/Videos'
import React from 'react'
import data from './data'

export default function page() {
  return (
    <div>
      <h1 className='flex justify-center text-[36px] font-extrabold'>Learn Cybersecurity with videos.</h1>
    <div>
      <Videos data = {data} />
    </div>
    </div>
  )
}
