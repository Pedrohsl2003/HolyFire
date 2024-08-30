import './styles/global.css'

import Home from './components/Home'
import Info from './components/Info'
import Eventos from './components/Eventos'
import BannerContribuir from './components/BannerContribuir'
import Semanal from './components/Semanal'


function App() {

  return (
    <div> 
      <Home />
      <Info />
      <Eventos />
      <BannerContribuir />
      <Semanal />
    </div>
  )
}

export default App
