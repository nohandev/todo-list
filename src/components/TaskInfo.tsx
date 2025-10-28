import Badge from '@/components/ui/Badge'
import { TaskDataContext } from '@/contexts/Task'
import { useContext, useEffect, useState } from 'react'

const TaskInfo = () => {
  const { allTasks } = useContext(TaskDataContext)

  const [tasksCompleted, setTaskCompleted] = useState(0)

   useEffect(() => {
    const allTasksCompleted  = allTasks.filter(task => task.completed === true)
    setTaskCompleted(allTasksCompleted.length)
   })
 

  return (
    <div className='flex p-4 sm:p-0 justify-between mt-8'>
      <Badge amount={allTasks.length} className='text-blue'>Tarefas criadas</Badge>
      <Badge amount={`${tasksCompleted} de ${allTasks.length}`} className='text-purple'>Concluidas</Badge>        
    </div>
  )
}

export default TaskInfo
