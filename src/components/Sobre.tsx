import React from 'react';
import { FaCross, FaHandsHelping, FaEye, FaHistory } from 'react-icons/fa';

const Sobre: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-indigo-700">Bem-vindo à Nossa Família</h1>
        <p className="text-xl text-center mb-12 text-gray-700 max-w-2xl mx-auto">
          Nossa igreja é um lugar onde você pode encontrar paz, comunidade e apoio. Estamos aqui para acolher você de braços abertos e caminhar junto em sua jornada espiritual.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaCross className="text-indigo-700 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">Missão</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Nossa missão é ser uma igreja vibrante e relevante, que transforma vidas por meio do poder do Evangelho. Buscamos alcançar as pessoas em todas as esferas da vida e ajudá-las a crescer espiritualmente, emocionalmente e socialmente.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaHandsHelping className="text-indigo-700 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">Propósito</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Nosso propósito é glorificar a Deus em tudo o que fazemos, servindo uns aos outros com amor e compartilhando a esperança encontrada em Cristo. Estamos comprometidos em viver vidas que refletem os ensinamentos e o exemplo de Jesus.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaEye className="text-indigo-700 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">Visão</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Nossa visão é ser uma comunidade acolhedora e inclusiva, onde todos se sintam amados, aceitos e valorizados. Sonhamos em ver vidas transformadas, famílias restauradas e nossa cidade impactada positivamente pelo amor de Cristo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaHistory className="text-indigo-700 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">História</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              Desde a nossa fundação, em [ano de fundação], a Holyfire tem sido uma luz na comunidade, oferecendo esperança, cura e transformação para milhares de pessoas. Estamos gratos pela jornada que percorremos e animados com o que Deus tem preparado para o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
