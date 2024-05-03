import RenderGroupCards from '@/components/RenderGroupCards'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen gap-3'>
        <RenderGroupCards />
    </div>
  )
}

export default page