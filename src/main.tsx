import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.tsx'
import ImersaoDeCasais from './routes/Eventos/ImersaoDeCasais.tsx'
import CongressoOnFire from './routes/Eventos/CongressoOnFire.tsx'
import CultoDeHomens from './routes/Eventos/CultoDeHomens.tsx'
import Equipe from './components/Equipe.tsx'

import ContentDetalhes from './routes/Conteudos/ContentDetalhes.tsx';
import ContentPage from './routes/Conteudos/ContentPage.tsx';

import './styles/global.css'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />
  },
  {
    path: '/ImersaoDeCasais',
    element: <ImersaoDeCasais/>
  },
  {
    path: '/CongressoOnFire',
    element: <CongressoOnFire/>
  },
  {
    path: '/CultoDeHomens',
    element: <CultoDeHomens/>
  },
  {
    path: '/Equipe',
    element: <Equipe/>
  },
  {
    path: '/content/:type',
    element: <ContentPage />,
  },
  { 
    path: '/content/:type/:id', 
    element: <ContentDetalhes /> 
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
