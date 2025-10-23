import Badge from '@/components/ui/Badge'

const Tasks = () => {
  return (
    <section className='mt-12'>
      <div className='flex justify-between'>
        <Badge amount='5' className='text-blue'>Tarefas criadas</Badge>
        <Badge amount='2 de 5' className='text-purple'>Concluidas</Badge>        
      </div>
    </section>
  )
}

export default Tasks
