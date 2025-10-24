import Badge from '@/components/ui/Badge'
import Task from '@/components/ui/Task'

const Tasks = () => {
  return (
    <section className='mt-12'>
      <div className='flex justify-between'>
        <Badge amount='5' className='text-blue'>Tarefas criadas</Badge>
        <Badge amount='2 de 5' className='text-purple'>Concluidas</Badge>        
      </div>

      <div className='flex flex-col gap-4 mt-10'>
       <Task content='Algum exemplo de tarefa que vai vim de algum lugar xD'/>
       <Task content='Algum exemplo de tarefa que vai vim de algum lugar xD'/>
       <Task content='Algum exemplo de tarefa que vai vim de algum lugar xD'/>
       <Task content='Algum exemplo de tarefa que vai vim de algum lugar xD'/>
       
      </div>
    </section>
  )
}

export default Tasks
