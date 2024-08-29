import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import EventDetail from './routes/Eventos/EventDetail.tsx';
import Equipe from './components/Equipe.tsx';
import ContentDetalhes from './routes/Conteudos/ContentDetalhes.tsx';
import ContentPage from './routes/Conteudos/ContentPage.tsx';
import QuemSomos from './components/Sobre.tsx'
import NossaEquipe from './components/Equipe.tsx'
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
