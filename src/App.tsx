import Logo from './assets/Logo.png'
const App = () => {
  return (
    <section className='h-dvh bg-gray-500'>
      <div className='h-48 bg-gray-700 flex justify-center items-center'>
        <img src={Logo} alt='Logo Rocket'/>
      </div>
    </section>
  )
}

export default App
