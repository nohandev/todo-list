import React from 'react'
import type { InputProps } from '@/types/InputType.ts'
 
export const Input: React.FC<InputProps> = ({
  size= 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-3",
    lg: "text-lg py-3 px-4",
  }
  return (
    <div className='flex flex-col gap-1 w-full'>
      <input 
      className={`rounded-md bg-gray-500 text-gray-100 placeholder-gray-300 outline-none focus:ring-1 focus:ring-purple-dark ${sizes[size]} ${className}`}
      {...props}
      />
    </div>
  )
}
