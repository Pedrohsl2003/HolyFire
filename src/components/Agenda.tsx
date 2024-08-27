// src/components/Agenda.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventos, weeklySchedule, ItemConteudo } from '../data';

const Agenda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Agenda</h2>

      {/* Subtítulo Semanal */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          <span className="border-b-2 border-gray-500 pb-1">Semanal</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(weeklySchedule).map(([day, schedule]) => (
            <div
              key={day}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
              style={{ height: '150px', width: '100%' }} // Tamanho fixo
            >
              <p className="text-lg font-semibold text-gray-800">{day}</p>
              <p className="text-gray-600 mt-2">{schedule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subtítulo Próximos Eventos */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          <span className="border-b-2 border-gray-500 pb-1">Próximos Eventos</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventos.map((event: ItemConteudo) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative group">
              <img
                src={event.imagemCard}
                alt={event.tema}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                <div className="text-white">
                  <p className="text-xl font-semibold">{event.tema}</p>
                  <p className="text-gray-300 mt-1">{event.data}</p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                    onClick={() => navigate(`/evento/${event.id}`)}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Agenda;
