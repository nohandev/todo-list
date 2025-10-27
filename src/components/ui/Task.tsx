import React, { useState, useContext } from 'react'
import { TaskDataContext } from '@/contexts/Task'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Trash2 } from 'lucide-react'

interface TaskProps {
  id: number;
  content: string;
  isCompleted: boolean
}

const Task: React.FC<TaskProps> = ({content, id, isCompleted}) => {

  const {allTasks, setAllTasks} = useContext(TaskDataContext)
  const [ isChecked, setIsChecked ] = useState(false)

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const taskId = e.currentTarget.dataset.id 
    
    const updatedTasks = allTasks.filter(task => task.id !== Number(taskId))

    setAllTasks(updatedTasks)
  }

  const ChangeCompletedTask = (e: React.MouseEvent<HTMLInputElement>) => {
    const taskId = Number(e.currentTarget.dataset.id)

   const taskUpdated = allTasks.map(task => {
    return task.id === taskId ? {...task, completed : !task.completed} : task 
  })
  

    setAllTasks(taskUpdated)
  }

  return (
    <div 
    className={`flex gap-5 items-center justify-between p-4 border bg-gray-500 rounded-xl 
    ${isCompleted? 'border-gray-500' : 'border-gray-400'}` }>
      <Checkbox checked={isChecked} onChange={setIsChecked} data={id} onClick={ChangeCompletedTask}/>

      <p 
        className={`font-medium ${isChecked ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
          {content}
      </p>

      <Button 
        className='p-0 text-gray-300 hover:text-danger'
        icon={<Trash2/>}
        data={id}
        onClick={deleteTask}
      />
    </div>
  )
}

export default Task
