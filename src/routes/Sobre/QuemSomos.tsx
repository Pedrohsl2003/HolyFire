import React from 'react';
import { FaCross, FaBullseye, FaLightbulb, FaHeart } from 'react-icons/fa';
import BannerImage from '../../assets/CongressoOnFire.jpeg';

const QuemSomos: React.FC = () => {
  return (
    <div className="relative w-full h-96">
        <img
          src={BannerImage}
          alt="Congresso On Fire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Conheça Nossa Equipe Pastoral</h1>
        </div>

      {/* Container principal */}
      <div className="max-w-5xl mx-auto p-8">

        {/* Título e Texto sobre a igreja */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
            Comunidade Holy Fire
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A Comunidade Holy Fire nasceu com a missão de ser um ponto de encontro
            entre a tradição cristã e as necessidades espirituais do mundo moderno.
            Nosso foco é viver uma fé vibrante e acessível, promovendo transformação
            pessoal e comunitária através de um relacionamento autêntico com Deus.
          </p>
        </div>

        {/* MISSÃO */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaBullseye className="mr-2" /> Missão
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossa missão é impactar vidas com o fogo do Espírito Santo, inspirando
            uma jornada de fé autêntica e relevante que transcende gerações.
          </p>
        </div>

        {/* VISÃO */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaLightbulb className="mr-2" /> Visão
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossa visão é ser uma comunidade cristã vibrante e acolhedora, que
            prepara e envia líderes transformadores para o mundo.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Empoderar a próxima geração de líderes espirituais.</li>
            <li>Promover um ambiente de adoração e crescimento espiritual contínuo.</li>
            <li>Expandir nosso alcance através de iniciativas inovadoras.</li>
          </ul>
        </div>

        {/* PROPÓSITO */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaCross className="mr-2" /> Propósito
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nosso propósito é ser um farol de esperança e renovação, conectando
            pessoas a Cristo e entre si, em um ambiente de amor, respeito e crescimento espiritual.
          </p>
        </div>

        {/* VALORES */}
        <div className="bg-white shadow-lg rounded-lg p-8 mx-auto">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaHeart className="mr-2" /> Valores
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Amor e Compaixão</li>
            <li>Integridade e Transparência</li>
            <li>Inovação e Relevância</li>
            <li>Comunhão e Unidade</li>
            <li>Serviço e Impacto Comunitário</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default QuemSomos;
