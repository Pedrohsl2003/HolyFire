import React from 'react';
import { useParams } from 'react-router-dom';
import { cultos, series, treinamentos, especiais } from '../../data';

const contentMap = {
  cultos,
  series,
  treinamentos,
  especiais,
};

const ContentDetalhes: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const content = contentMap[type as keyof typeof contentMap] || [];
  const item = content.find((c) => c.id === id);

  if (!item) {
    return <div>Conteúdo não encontrado!</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner da Imagem */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={`/assets/${item.imagemBanner}`}
          alt={item.tema}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo do Item */}
      <div className="p-6 md:p-12 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          {/* Resumo ou Rascunho */}
          <p className="text-lg md:text-xl leading-relaxed">{item.resumo}</p>
          
          {/* Informações Adicionais Condicionais */}
          {item.local && (
            <p><strong>Local:</strong> {item.local}</p>
          )}
          {item.horario && (
            <p><strong>Horário:</strong> {item.horario}</p>
          )}
          {item.ministrante && (
            <p><strong>Ministrante:</strong> {item.ministrante}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentDetalhes;
