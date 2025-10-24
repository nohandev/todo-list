import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

interface TaskProps {
  content: string
}

const Task: React.FC<TaskProps> = ({content}) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div 
    className={`flex gap-5 items-center justify-between p-4 border bg-gray-500 rounded-xl 
    ${isChecked ? 'border-gray-500' : 'border-gray-400'}` }>
      <Checkbox checked={isChecked} onChange={setIsChecked}/>

      <p 
        className={`font-medium ${isChecked ? 'text-gray-300 line-through' : 'text-gray-100'}`}
        >
          {content}
      </p>

      <Button 
        className='p-0 text-gray-300 hover:text-danger'
        icon={<Trash2/>}
      />
    </div>
  )
}

export default Task
