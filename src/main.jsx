import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>HolyFire</title>
      <meta charset="UTF-8" />
      <link rel="icon" href="/src/assets/favicon.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Language" content="pt-BR" />
      <meta name="description" content="Somos uma igreja evangélica localizada em Jaraguá. Venha nos visitar!" />
      <meta name="keywords" content="igreja evangélica, Jaraguá, HolyFire, evangelismo" />
      <meta name="author" content="HolyFire" />
      <meta name="geo.placename" content="R. Guiomar Novaes, 189 - Jaragua" />
      <meta name="geo.position" content="-23.448606412775188, -46.74762458214988" />
      <meta name="geo.street" content="R. Guiomar Novaes" />
      <meta name="geo.streetnumber" content="189" />
      <meta name="geo.city" content="São Paulo" />
      <meta name="geo.region" content="SP" />
      <meta name="geo.country" content="BR" />
      <meta name="geo.postalcode" content="05185-000" />
      <meta property="og:site_name" content="HolyFire" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.holyfire.com.br" />
    </Helmet>
    <App />
  </React.StrictMode>
);
