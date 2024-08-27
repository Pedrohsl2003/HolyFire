import './styles/global.css'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Agenda from './components/Agenda'
import Equipe from './components/Equipe'

function App() {

  return (
    <div className='bg-gray-50 text-black'> 
      <Home />
      <Sobre />
      <Agenda />
      <Equipe />
    </div>
  )
}

export default App
