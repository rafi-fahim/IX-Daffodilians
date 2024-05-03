import RenderStudentCards from '@/components/RenderStudentCards'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <RenderStudentCards />
    </div>
  )
}

export default page