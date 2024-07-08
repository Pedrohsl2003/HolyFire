import './styles/global.css'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Agenda from './components/Agenda'
import Equipe from './routes/Equipe'

function App() {

  return (
    <div> 
      <Home />
      <Sobre />
      <Agenda />
      <Equipe />
    </div>
  )
}

export default App
