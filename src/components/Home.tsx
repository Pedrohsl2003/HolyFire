import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
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
