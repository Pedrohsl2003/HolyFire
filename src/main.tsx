import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import EventDetail from './routes/Eventos/EventDetail.tsx';
import Equipe from './routes/Sobre/NossaEquipe.tsx';
import ContentDetalhes from './routes/Conteudos/ContentDetalhes.tsx';
import ContentPage from './routes/Conteudos/ContentPage.tsx';
import QuemSomos from './routes/Sobre/QuemSomos.tsx'
import NossaEquipe from './routes/Sobre/NossaEquipe.tsx'
import Celulas from './routes/Sobre/Celulas.tsx'
import Agenda from './routes/Agenda/Agenda.tsx'
import Contribua from './routes/Contribua/Contribua.tsx'
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/evento/:id',
    element: <EventDetail />,
  },
  {
    path: '/Equipe',
    element: <Equipe />,
  },
  {
    path: '/content/:type',
    element: <ContentPage />,
  },
  {
    path: '/content/:type/:id',
    element: <ContentDetalhes />,
  },
  {
    path: '/quem-somos',
    element: <QuemSomos />,
  },
  {
    path: '/nossa-equipe',
    element: <NossaEquipe />
  },
  {
    path: '/celulas',
    element: <Celulas />
  },
  {
    path: '/agenda',
    element: <Agenda />
  },
  {
    path: '/contribua',
    element: <Contribua />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
