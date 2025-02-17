import { cn } from '@/libs/utils'
import React from 'react'

const Title = ({ className = '', text = 'Default Title',subTitle }) => {
  return (
    <>
    
    
    <p className={cn('text-white text-4xl font-bold mb-8', className)}>
      {text}
    </p>
    {
      subTitle ? <p className='font-proxima font-thin text-white text-base'>{subTitle}</p>:null
    }
    </>
  )
}

export default Title
