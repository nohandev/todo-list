import { useContext } from 'react'
import { TaskDataContext } from '@/contexts/Task'
import Task from '@/components/ui/Task'


const TaskList = () => {

  const {allTasks} = useContext(TaskDataContext)

  return (
    <section className='mt-8'>
      <div className='flex flex-col gap-4 mt-10 '>
        {allTasks.map(task => ( 
          <Task 
            key={task.id} 
            content={`${task.task}`}
            id={task.id}
            isCompleted={task.completed}
          />
         ))
        }
      </div>
    </section>
  )
}

export default TaskList
