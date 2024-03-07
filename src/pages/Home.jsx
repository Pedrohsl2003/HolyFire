import React from 'react';
import Navbar from './Navbar'; 

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Renderizando o Navbar acima do conteúdo da página */}
      <Navbar /> 
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/videohome.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        {/* Mensagem centralizada */}
        <div className="text-white text-center z-10">
          <h1 className="text-7xl font-bold mb-6">HolyFire</h1>
          <p className="text-lg">Seja Bem-Vindo!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
