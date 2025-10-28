import { useState } from 'react'
import { TaskDataContext } from '@/contexts/Task'
import type { TaskType } from '@/types/taskSchema'
import Logo from '@/assets/Logo.png'
import CreateTaskForm from '@/components/CreateTaskForm'
import TaskList from '@/components/TaskList'
import TaskInfo from '@/components/TaskInfo'
import EmptyTaskPage from '@/pages/EmptyTaskPage'

const App = () => {
  const [allTasks, setAllTasks] = useState<TaskType[]>([])

  return (
    <TaskDataContext.Provider value={{allTasks, setAllTasks}}>
    <section className='min-h-dvh bg-gray-600'>
      <div className='hidden h-48 bg-gray-700 sm:flex justify-center items-center'>
        <img src={Logo} alt='Logo Rocket'/>
      </div>
      <div className='sm:-my-6 sm:w-3xl mx-auto'>
        <CreateTaskForm/>
        <TaskInfo/>
        {allTasks.length ? <TaskList/> : <EmptyTaskPage/>}
      </div>
    </section>
    </TaskDataContext.Provider>
  )
}

export default App
