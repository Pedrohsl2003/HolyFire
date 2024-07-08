import React from 'react';
import Header from '../../components/Header';

const ImersaoDeCasais: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center items-center w-full h-auto">
        <img
          src="https://via.placeholder.com/1080x608"
          alt="Imagem do Evento"
          className="mt-24 object-cover shadow-lg sm:rounded-xl"
        />
      </div>
      <h1 className="text-4xl font-bold my-12 text-center">Imersão de Casais</h1>
      <div className="flex justify-center">
        <div className="bg-white p-8 sm:rounded-lg shadow-lg max-w-5xl w-full">
          <h2 className="text-3xl font-semibold mb-4">O que é a Imersão de Casais?</h2>
          <p className="mb-6 text-lg text-gray-700">
            A Imersão de Casais é um evento especial organizado pela nossa igreja, projetado para fortalecer
            relacionamentos e promover a união entre casais. Durante este encontro, os participantes terão a
            oportunidade de participar de ministrações inspiradoras, workshops práticos, e diversas atividades que
            visam enriquecer a vida conjugal.
          </p>
          <h3 className="text-2xl font-semibold mb-4">O que está incluso na inscrição?</h3>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Hospedagem completa em um ambiente acolhedor</li>
            <li>Refeições deliciosas, preparadas com carinho</li>
            <li>Atividades interativas e palestras enriquecedoras</li>
            <li>Materiais de apoio para auxiliar no crescimento conjugal</li>
            <li>Sessões de sorteios com prêmios especiais para os participantes</li>
          </ul>
          <div className="text-center">
            <a
              href="https://home.e-inscricao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Inscreva-se Agora
            </a>
          </div>
        </div>
      </div>
      {/* Container do Mapa */}
      <div className="flex justify-center my-16">
        <div className="bg-white sm:p-8 py-12 sm:rounded-lg shadow-lg max-w-5xl w-full">
          {/* Adicionado `sm:p-8 p-0` para aplicar padding em telas maiores e nenhum padding em telas menores */}
          <h2 className="text-2xl font-semibold mb-4 text-center">Local do Evento</h2>
          <p className="mb-6 text-lg text-gray-700 text-center">
            <strong>Local:</strong> R. Guiomar Novaes, 189 - Jaraguá
          </p>
          <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.081070876422!2d-46.74784743037546!3d-23.44876446832832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb8a1d580999%3A0x65acf13a5779b32c!2sR.%20Guiomar%20Novaes%2C%20189%20-%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005185-000!5e0!3m2!1spt-BR!2sbr!4v1719236836070!5m2!1spt-BR!2sbr&zoom=14&center=-23.44876446832832,-46.74784743037546&maptype=roadmap&output=embed"
              style={{ border: "1px solid #ccc" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImersaoDeCasais;
