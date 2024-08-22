import React from 'react';
import { Link } from 'react-router-dom';

interface Culto {
  id: string;
  imagem: string;
  tema: string;
  data: string;
}

interface CultosPageProps {
  cultos: Culto[];
}

const CultosPage: React.FC<CultosPageProps> = ({ cultos }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Cultos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cultos.map((culto) => (
          <div key={culto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={culto.imagem} alt={culto.tema} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{culto.tema}</h2>
              <p className="text-gray-600">{culto.data}</p>
              <Link to={`/culto/${culto.id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Ver Detalhes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultosPage;
