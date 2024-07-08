// Agenda.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImersaoCasais from '../assets/ImersaoCasais.jpeg';
import CongressoOnFire from '../assets/CongressoOnFire.jpeg';
import CultoDeHomens from '../assets/CultoDeHomens.jpeg';

const eventsData = [
  { id: 1, name: 'Congresso OnFire', date: '15/07', image: CongressoOnFire, path: '/CongressoOnFire' },
  { id: 2, name: 'Imersão De Casais', date: '20/07', image: ImersaoCasais, path: '/ImersaoDeCasais' },
  { id: 3, name: 'Culto De Homens', date: '25/07', image: CultoDeHomens, path: '/CultoDeHomens' },
  // Adicione quantos eventos desejar
];

const weeklySchedule = {
  'Terça Feira': 'TADEL - 20h30',
  'Sábado ': '09h00 Escola de Líderes',
  'Quarta Feira': '20h00 - Célula',
  'Sábado': 'Célula de Jovens - 19h00',
  'Quinta Feira': '20h00 Escola do Espírito',
  'Domingo': '09h00, 17h00, 19h00 - Culto de Celebração',
};

const Agenda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center">
      <h2 className="text-5xl font-bold mb-6">Agenda</h2>

      {/* Subtítulo Semanal */}
      <h3 className="text-xl font-semibold mb-4">
        <span className="border-gray-600 border px-2 pb-0.5 rounded-lg">Semanal</span>
      </h3>

      {/* Container Semanal */}
      <div className="bg-white p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(weeklySchedule).map(([day, schedule]) => (
            <div
              key={day}
              className="rounded-2xl overflow-hidden p-6 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
            >
              <p className="text-xl font-semibold">{day}</p>
              <p>{schedule}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtítulo Próximos Eventos */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          <span className="border-gray-600 border px-2 pb-0.5 rounded-lg">Próximos Eventos</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map(event => (
            <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden relative">
              <div className="relative">
                <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">{event.name}</p>
                    <p className="text-gray-300">{event.date}</p>
                    <button
                      className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none"
                      onClick={() => navigate(event.path)}
                    >
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
