import React, { useState, useContext } from 'react'
import { TaskDataContext } from '@/contexts/Task'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CirclePlus } from 'lucide-react'
import type { TaskType } from '@/types/taskSchema'

const CreateTaskForm = () => {
  const { allTasks, setAllTasks } = useContext(TaskDataContext)

  const [contentTask, setContentTask] = useState('')

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask: TaskType = {
      id : Math.round(Math.random() * 10000),
      task: contentTask,
      completed: false
    }


    setAllTasks([...allTasks, newTask])
    setContentTask('')
  }

  return (
    <form onSubmit={createTask} className="flex flex-col p-4 sm:flex-row sm:p-0 items-center justify-center gap-6">
      <Input 
        type="text" 
        value={contentTask}
        onChange={(e) => setContentTask(e.target.value)}
        placeholder="Adicione uma nova tarefa" 
        size="lg" 
        className="font-semibold placeholder:font-normal" 
        />

      <Button 
        icon={<CirclePlus size={18} />} 
        className="bg-blue-dark py-3.5 text-gray-100 font-semibold transition hover:scale-90"
        type='submit'
        >
        Criar
      </Button>
    </form>
  );
};

export default CreateTaskForm;
