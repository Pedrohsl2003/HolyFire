import React from 'react';
import { Link } from 'react-router-dom';
import { eventos } from '../data';

const Eventos: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Eventos</h1>
      <div className="space-y-4">
        {eventos.map((evento) => (
          <div key={evento.id} className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
            <img 
              src={evento.imagemCard} 
              alt={evento.tema} 
              className="w-full md:w-1/4 object-cover max-h-36 md:max-h-40"
            />
            <div className="flex-grow p-4 flex flex-col md:flex-row">
              <div className="flex flex-col justify-center text-center border-b-2 md:border-b-0 md:border-r-2 w-16 border-gray-200 pr-4">
                <span className="text-2xl font-bold">{new Date(evento.data).getDate()}</span>
                <span className="uppercase">{new Date(evento.data).toLocaleDateString('pt-BR', { month: 'short' })}</span>
              </div>
              <div className="mt-4 md:mt-0 md:pl-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{evento.tema}</h2>
                  <div className="text-gray-500 mt-1 flex items-center">
                    <span className="mr-2"><i className="far fa-clock"></i> {evento.horario}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {evento.local}</span>
                  </div>
                  <div className="text-gray-600 mt-1">
                    <p>{evento.local}</p>
                  </div>
                </div>
              </div>
              <Link to={`/evento/${evento.id}`} className="mt-4 md:mt-0 ml-auto bg-black text-white py-2 px-6 h-max self-center rounded hover:bg-gray-800">
                Ver evento
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
