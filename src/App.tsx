import Logo from '@/assets/Logo.png'
import Form from '@/components/CreateTaskForm'
import Tasks from '@/components/Tasks'

const App = () => {
  return (
    <section className='h-dvh bg-gray-600'>
      <div className='h-48 bg-gray-700 flex justify-center items-center'>
        <img src={Logo} alt='Logo Rocket'/>
      </div>
      <div className='-my-6 w-3xl mx-auto'>
        <Form/>
        <Tasks/>
      </div>
    </section>
  )
}

export default App
