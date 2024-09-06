import React, { useEffect } from "react";
import { semanal } from "../../data";
import Eventos from "../../components/Eventos";

const Agenda: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center">AGENDA</h1>

      {/* Semanal */}
      <div>
        <div className="container mx-auto max-w-6xl p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8">
            Programação Semanal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(semanal).map(([activity, schedule], index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-2xl font-bold text-blue-600">{activity}</p>
                <p className="text-gray-700 mt-2">{schedule}</p>
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Comunidade Holy Fire
            </h2>
            <div className="w-full h-96 bg-gray-100 rounded-md overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.081070876422!2d-46.74784743037546!3d-23.44876446832832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb8a1d580999%3A0x65acf13a5779b32c!2sR.%20Guiomar%20Novaes%2C%20189%20-%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005185-000!5e0!3m2!1spt-BR!2sbr!4v1719236836070!5m2!1spt-BR!2sbr&zoom=14&center=-23.44876446832832,-46.74784743037546&maptype=roadmap&output=embed"
                style={{ border: "2px solid #ccc" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Igreja"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Eventos */}
      <div>
        <Eventos />
      </div>
    </div>
  );
};

export default Agenda;
