import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

const Task = () => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='flex gap-5 items-center justify-between bg-gray-500 p-4 border border-gray-400 rounded-xl'>
      <Checkbox checked={isChecked} onChange={setIsChecked}/>
      <p className='text-gray-100 font-medium'>a</p>
      <Button 
        className='p-0 text-gray-300 hover:text-danger'
        icon={<Trash2/>}
      />
    </div>
  )
}

export default Task
