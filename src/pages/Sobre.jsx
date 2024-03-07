// ChurchSection.js
import React from 'react';
import { FaRegHandshake, FaBible, FaGlobe, FaHeart, FaHistory } from 'react-icons/fa'; // Importando ícones do React
import churchImage from '../assets/church.jpg'; // Importando a imagem da igreja

const ChurchSection = () => {
  const infoCards = [
    {
      title: 'Quem Somos',
      icon: <FaRegHandshake className="text-black text-3xl mr-2" />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris nec erat placerat, sit amet sollicitudin sapien dapibus.',
    },
    {
      title: 'Missão',
      icon: <FaBible className="text-black text-3xl mr-2" />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris nec erat placerat, sit amet sollicitudin sapien dapibus.',
    },
    {
      title: 'Visão',
      icon: <FaGlobe className="text-black text-3xl mr-2" />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris nec erat placerat, sit amet sollicitudin sapien dapibus.',
    },
    {
      title: 'Valores',
      icon: <FaHeart className="text-black text-3xl mr-2" />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris nec erat placerat, sit amet sollicitudin sapien dapibus.',
    },
    {
      title: 'Nossa História',
      icon: <FaHistory className="text-black text-3xl mr-2" />,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris nec erat placerat, sit amet sollicitudin sapien dapibus.',
    },
  ];

  return (
    <section className="bg-white text-black min-h-screen flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">HolyFire Church</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-orange-600 rounded-lg p-6 flex items-center">
              <div className="flex items-center">
                {card.icon}
                <h3 className="text-3xl font-bold mb-4 ml-2">{card.title}</h3>
              </div>
              <p className="text-lg">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <img src={churchImage} alt="Igreja HolyFire" className="w-full md:w-2/3 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ChurchSection;
