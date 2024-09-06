import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon.png'; 

const Footer: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {/* Seção da Igreja */}
        <div>
          <Link to="/" className="flex items-center mb-8">
            <img src={Logo} alt="Logo da Igreja" className="h-12 w-12 rounded-full mr-2" />
            <span className="text-2xl font-semibold">Holyfire</span>
          </Link>
          <p className="text-gray-400">R. Guiomar Novaes, 189 - Jaraguá</p>
          <p className="text-gray-400">Telefone: (00) 1234-5678</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-orange-400">
              <FaFacebookF size={28} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-orange-400">
              <FaInstagram size={28} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-orange-400">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        {/* Sobre Nós */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Sobre Nós</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/quem-somos" className="text-gray-400 hover:text-orange-400">Quem Somos</Link>
            </li>
            <li>
              <Link to="/nossa-equipe" className="text-gray-400 hover:text-orange-400">Nossa Equipe</Link>
            </li>
            <li>
              <Link to="/celulas" className="text-gray-400 hover:text-orange-400">Células</Link>
            </li>
            <li>
              <Link to="/nossa-sede" className="text-gray-400 hover:text-orange-400">Nossa Sede</Link>
            </li>
          </ul>
        </div>

        {/* Agenda e Conteúdo */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Agenda e Conteúdo</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/content/cultos" className="text-gray-400 hover:text-orange-400">Cultos</Link>
            </li>
            <li>
              <Link to="/content/series" className="text-gray-400 hover:text-orange-400">Séries</Link>
            </li>
            <li>
              <Link to="/content/treinamentos" className="text-gray-400 hover:text-orange-400">Treinamentos</Link>
            </li>
            <li>
              <Link to="/content/especiais" className="text-gray-400 hover:text-orange-400">Especiais</Link>
            </li>
          </ul>
        </div>

        {/* Contribua e Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contribua</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/contribua" className="text-gray-400 hover:text-orange-400">Contribua</Link>
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">Contato</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/fale-conosco" className="text-gray-400 hover:text-orange-400">Fale Conosco</Link>
            </li>
            <li>
              <Link to="/voluntarios" className="text-gray-400 hover:text-orange-400">Voluntários</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <span className="block sm:inline">© {new Date().getFullYear()} Holyfire.</span>
        <span className="block sm:inline"> Todos os direitos reservados.</span>
      </div>
      {/* Botão Voltar ao Topo */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8  bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
          aria-label="Voltar ao Topo"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
