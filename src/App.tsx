import './styles/global.css'

import Home from './components/Home'
import Sobre from './components/Sobre'
import Eventos from './components/Eventos'
import BannerContribuir from './components/IgrejaGenerosa'
import Semanal from './components/Semanal'


function App() {

  return (
    <div> 
      <Home />
      <Sobre />
      <Eventos />
      <BannerContribuir />
      <Semanal />
    </div>
  )
}

export default App
