import React from 'react'

interface BadgeProps  {
  amount: string;
  children?: React.ReactNode;
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ 
  amount = 0, 
  children,
  className
}) => {
  return (
    <div className="flex items-center font-bold gap-3">
      <p className={`text-100 ${className}`}>{children}</p>
      <span className="bg-gray-400 text-gray-100 rounded-xl px-2.5 flex items-center justify-center">{amount}</span>
    </div>
  )
}

export default Badge
