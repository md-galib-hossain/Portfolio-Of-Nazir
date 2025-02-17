import { cn } from '@/libs/utils'
import React from 'react'

const Title = ({ className = '', text = 'Default Title' }) => {
  return (
    <p className={cn('text-white text-4xl font-bold mb-8', className)}>
      {text}
    </p>
  )
}

export default Title
