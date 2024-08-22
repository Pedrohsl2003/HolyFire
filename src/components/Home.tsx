import React from 'react';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 mt-16 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          className="absolute w-full h-full"
        >
          <source src="/src/assets/videohome.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
};

export default Home;
