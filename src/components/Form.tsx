import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CirclePlus } from 'lucide-react'

const Form = () => {
  return (
    <form className="flex items-center justify-center gap-6">
      <Input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        size="lg" 
        className="font-semibold placeholder:font-normal" 
        />

      <Button 
        icon={<CirclePlus size={18} />} 
        className="bg-blue-dark py-3.5 text-gray-100 font-semibold transition hover:scale-90"
        >
        Criar
      </Button>
    </form>
  );
};

export default Form;
