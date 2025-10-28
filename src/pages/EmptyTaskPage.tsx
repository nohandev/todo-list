import { ClipboardList } from 'lucide-react'

const EmptyTaskPage = () => {
  return (
    <div className='mt-8 text-gray-300 flex flex-col items-center gap-1 border-t pt-6'>
      <ClipboardList size={56}/>
      <p className='font-bold'>Você ainda não tem tarefas cadastradas!</p>
      <span className='font-norma'>Crie tarefas e organize seus itens a fazer.</span>
    </div>
  )
}

export default EmptyTaskPage
