import React, { useState } from 'react';
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
  const [search, setSearch] = useState('');
  const [filteredCultos, setFilteredCultos] = useState(cultos);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    filterCultos(query);
  };

  const filterCultos = (query: string) => {
    const results = cultos.filter(
      (culto) =>
        culto.tema.toLowerCase().includes(query) ||
        culto.data.toLowerCase().includes(query)
    );
    setFilteredCultos(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold my-8">Cultos</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Buscar por tema ou data..."
        className="mb-8 p-2 border border-gray-300 rounded-lg w-full max-w-md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {filteredCultos.map((culto) => (
          <div key={culto.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={culto.imagem} alt={culto.tema} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{culto.tema}</h2>
              <p className="text-gray-600 mb-4">{culto.data}</p>
              <Link to={`/culto/${culto.id}`}>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
