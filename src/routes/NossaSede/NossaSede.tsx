import React, { useEffect } from "react";
import { AiOutlineDesktop } from "react-icons/ai"; 
import ImagemIgreja from '../../assets/CongressoOnFire.jpeg';

const NossaSede: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pb-8">
      {/* Banner */}
      <div
        className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${ImagemIgreja})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          Nossa Sede
        </h1>
      </div>

      {/* Card Container */}
      <div className="flex justify-center w-full mt-10 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row items-center">
          {/* Google Maps - Agora maior */}
          <div className="w-full md:w-3/5 h-64 sm:h-80 md:h-96">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.081070876422!2d-46.74784743037546!3d-23.44876446832832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb8a1d580999%3A0x65acf13a5779b32c!2sR.%20Guiomar%20Novaes%2C%20189%20-%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005185-000!5e0!3m2!1spt-BR!2sbr!4v1719236836070!5m2!1spt-BR!2sbr&zoom=14&center=-23.44876446832832,-46.74784743037546&maptype=roadmap&output=embed"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Evento"
            ></iframe>
          </div>

          {/* Informações */}
          <div className="w-full md:w-2/5 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Comunidade Holy Fire</h2>
            <p className="text-base text-gray-700">R. Guiomar Novaes, 189 - Jaraguá, São Paulo - SP, 05185-000</p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Culto de Celebração</h3>
              <p className="text-base text-gray-700">Domingo - 9h00, 17h00, 19h00</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Tadel | Treinamento Avançado de Líderes</h3>
              <p className="text-base text-gray-700">Terça-feira - 20h30</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Escola do Espírito</h3>
              <p className="text-base text-gray-700">Quinta-feira - 20h00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Componente da Live com Ícone */}
      <div className="w-full flex justify-center mt-8 px-4">
        <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-5xl flex flex-col sm:flex-row items-center text-center sm:text-left">
          {/* Ícone da Live */}
          <AiOutlineDesktop className="text-4xl sm:text-5xl mr-0 sm:mr-8 mb-4 sm:mb-0" />
          
          {/* Informações da Live */}
          <div className="flex-1">
            <p className="text-lg font-semibold">Transmitimos o Culto Online em nosso Canal do Youtube.</p>
            <p className="text-base mt-2">Domingo: às 9h30 e 18h30 | Segunda: às 20h30</p>
          </div>

          {/* Botão */}
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 mt-4 sm:mt-0 rounded font-medium hover:bg-gray-200">
            Clique aqui
          </button>
        </div>
      </div>
    </div>
  );
};

export default NossaSede;
