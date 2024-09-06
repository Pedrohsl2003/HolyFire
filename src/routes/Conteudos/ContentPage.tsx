import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cultos, series, treinamentos, especiais, ItemConteudo } from '../../data';

const contentMap: Record<string, ItemConteudo[]> = {
  cultos,
  series,
  treinamentos,
  especiais,
};

const ContentPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [searchTema, setSearchTema] = useState('');
  const [searchData, setSearchData] = useState('');
  const [filteredContent, setFilteredContent] = useState(contentMap[type as keyof typeof contentMap] || []);

  const normalizeString = (str: string) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filterContent = () => {
    setFilteredContent(
      (contentMap[type as keyof typeof contentMap] || []).filter(item =>
        normalizeString(item.tema).includes(normalizeString(searchTema)) &&
        (searchData === '' || (item.data && item.data.includes(searchData)))
      )
    );
  };

  const handleSearchTema = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTema(e.target.value);
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const handleSearchClick = () => {
    filterContent();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-10 capitalize">{type}</h1>

      {/* Campos de Pesquisa */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-5xl">
        {/* Campo de Pesquisa por Tema */}
        <input 
          type="text" 
          placeholder="Pesquisar por tema..." 
          value={searchTema}
          onChange={handleSearchTema}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
        />

        {/* Campo de Pesquisa por Data */}
        <input 
          type="date" 
          value={searchData}
          onChange={handleSearchData}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
        />

        {/* Botão de Pesquisa */}
        <button 
          onClick={handleSearchClick} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pesquisar
        </button>
      </div>
      
      {/* Container com fundo neutro e bordas arredondadas */}
      <div className="bg-white rounded-2xl p-12 w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div 
              key={item.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img src={item.imagemCard} alt={item.tema} className="w-full h-56 object-cover mb-4 rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">{item.tema}</h2>
                <p className="text-gray-500 mb-4">{item.data}</p>
                <Link to={`/content/${type}/${item.id}`}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Ver Detalhes
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;