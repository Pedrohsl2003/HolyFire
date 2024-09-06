import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
import App from './App.tsx';
import './styles/global.css';
import FaleConosco from './routes/Contato/FaleConoso.tsx';

const router = (
  <Router>
    <Routes>
      <Route path="/HolyFire/" element={<Layout><App /></Layout>} />
      <Route path="/HolyFire/evento/:id" element={<Layout><EventDetail /></Layout>} />
      <Route path="/HolyFire/equipe" element={<Layout><Equipe /></Layout>} />
      <Route path="/HolyFire/content/:type" element={<Layout><ContentPage /></Layout>} />
      <Route path="/HolyFire/content/:type/:id" element={<Layout><ContentDetalhes /></Layout>} />
      <Route path="/HolyFire/quem-somos" element={<Layout><QuemSomos /></Layout>} />
      <Route path="/HolyFire/nossa-equipe" element={<Layout><NossaEquipe /></Layout>} />
      <Route path="/HolyFire/celulas" element={<Layout><Celulas /></Layout>} />
      <Route path="/HolyFire/agenda" element={<Layout><Agenda /></Layout>} />
      <Route path="/HolyFire/contribua" element={<Layout><Contribua /></Layout>} />
      <Route path="/HolyFire/nossa-sede" element={<Layout><NossaSede /></Layout>} />
      <Route path="/HolyFire/voluntarios" element={<Layout><Voluntarios /></Layout>} />
      <Route path="/HolyFire/fale-conosco" element={<Layout><FaleConosco /></Layout>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);
