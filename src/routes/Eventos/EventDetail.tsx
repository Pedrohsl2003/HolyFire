import React from 'react';
import { useParams } from 'react-router-dom';
import { eventos, ItemConteudo } from '../../data';
import Header from '../../components/Header';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const evento = eventos.find((e: ItemConteudo) => e.id === id);

  if (!evento) return <div>Evento não encontrado</div>;

  return (
    <div className="min-h-screen pb-2">
      <Header />

      <div className="relative w-full h-96">
        <img
          src={evento.imagemBanner}
          alt={`Imagem do Evento ${evento.tema}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white z-10 text-center">{evento.tema}</h1>
        </div>
      </div>

      <div className="flex justify-center p-8">
        <div className="bg-white p-8 sm:rounded-lg shadow-lg max-w-5xl w-full">
          <h2 className="text-3xl font-semibold mb-4">Sobre o Evento</h2>
          <p className="mb-6 text-lg text-gray-700">{evento.resumo}</p>
          
          {evento.local && (
            <>
              <h3 className="text-2xl font-semibold mb-4">Local</h3>
              <p className="mb-6 text-lg text-gray-700">{evento.local}</p>
            </>
          )}
          
          {evento.horario && (
            <>
              <h3 className="text-2xl font-semibold mb-4">Horário</h3>
              <p className="mb-6 text-lg text-gray-700">{evento.horario}</p>
            </>
          )}

          {evento.ministrante && (
            <>
              <h3 className="text-2xl font-semibold mb-4">Ministrante</h3>
              <p className="mb-6 text-lg text-gray-700">{evento.ministrante}</p>
            </>
          )}

          <div className="text-center">
            <a
              href="https://home.e-inscricao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Inscreva-se Agora
            </a>
          </div>
        </div>
      </div>

      {/* Container do Mapa */}
      <div className="flex justify-center my-16">
        <div className="bg-white sm:p-8 py-12 sm:rounded-lg shadow-lg max-w-5xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Local do Evento</h2>
          <p className="mb-6 text-lg text-gray-700 text-center">
            <strong>Local:</strong> {evento.local}
          </p>
          <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.081070876422!2d-46.74784743037546!3d-23.44876446832832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb8a1d580999%3A0x65acf13a5779b32c!2sR.%20Guiomar%20Novaes%2C%20189%20-%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005185-000!5e0!3m2!1spt-BR!2sbr!4v1719236836070!5m2!1spt-BR!2sbr&zoom=14&center=-23.44876446832832,-46.74784743037546&maptype=roadmap&output=embed"
              style={{ border: "1px solid #ccc" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Evento"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
