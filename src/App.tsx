import './styles/global.css'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Eventos from './components/Eventos'
import Contribuir from './components/Generosa'
import Semanal from './components/Semanal'


function App() {

  return (
    <div> 
      <Home />
      <Sobre />
      <Eventos />
      <Contribuir />
      <Semanal />
    </div>
  )
}

export default App
