import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FaleConosco: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Contato
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16">
          Fale Conosco
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações da Igreja */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              Comunidade Holy Fire
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center text-lg">
                <FaMapMarkerAlt className="text-blue-500 mr-4" />
                <span className="text-gray-700">Rua Exemplo, 123, São Paulo - SP</span>
              </li>
              <li className="flex items-center text-lg">
                <FaPhoneAlt className="text-blue-500 mr-4" />
                <span className="text-gray-700">(11) 98765-4321</span>
              </li>
              <li className="flex items-center text-lg">
                <FaEnvelope className="text-blue-500 mr-4" />
                <span className="text-gray-700">contato@holyfire.com</span>
              </li>
            </ul>
          </div>

          {/* Formulário de Contato */}
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Deixe aqui sua mensagem. Nossa equipe entrará em contato assim que possível!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
