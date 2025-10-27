import React from 'react'
import type { ButtonProps } from '@/types/buttonType'

export const Button : React.FC<ButtonProps> = ({
  children,
  icon,
  className = '',
  data,
  ...props
}) => {
  return (
    <div>
      <button 
        className={`rounded-md px-4 py-2 inline-flex items-center justify-center gap-2 cursor-pointer ${className}`}
        data-id={data}
        {...props}
        >
        {children && <span>{children}</span>}
        {icon && <span>{icon}</span>}
      </button>
    </div>
  )
}
