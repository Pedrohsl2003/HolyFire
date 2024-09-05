import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import EventDetail from './routes/Eventos/EventDetail.tsx';
import Equipe from './routes/Sobre/NossaEquipe.tsx';
import ContentDetalhes from './routes/Conteudos/ContentDetalhes.tsx';
import ContentPage from './routes/Conteudos/ContentPage.tsx';
import QuemSomos from './routes/Sobre/QuemSomos.tsx';
import NossaEquipe from './routes/Sobre/NossaEquipe.tsx';
import Celulas from './routes/Sobre/Celulas.tsx';
import Agenda from './routes/Agenda/Agenda.tsx';
import Contribua from './routes/Contribua/Contribua.tsx';
import NossaSede from './routes/NossaSede/NossaSede.tsx';
import Voluntarios from './routes/Contato/Volunatios.tsx';
import App from './App.tsx'
import './styles/global.css';
import FaleConosco from './routes/Contato/FaleConoso.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/evento/:id',
    element: <Layout><EventDetail /></Layout>,
  },
  {
    path: '/Equipe',
    element: <Layout><Equipe /></Layout>,
  },
  {
    path: '/content/:type',
    element: <Layout><ContentPage /></Layout>,
  },
  {
    path: '/content/:type/:id',
    element: <Layout><ContentDetalhes /></Layout>,
  },
  {
    path: '/quem-somos',
    element: <Layout><QuemSomos /></Layout>,
  },
  {
    path: '/nossa-equipe',
    element: <Layout><NossaEquipe /></Layout>,
  },
  {
    path: '/celulas',
    element: <Layout><Celulas /></Layout>,
  },
  {
    path: '/agenda',
    element: <Layout><Agenda /></Layout>,
  },
  {
    path: '/contribua',
    element: <Layout><Contribua /></Layout>,
  },
  {
    path: '/nossa-sede',
    element: <Layout><NossaSede /></Layout>,
  },
  {
    path: '/voluntarios',
    element: <Layout><Voluntarios /></Layout>,
  },
  {
    path: '/fale-conosco',
    element: <Layout><FaleConosco /></Layout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
