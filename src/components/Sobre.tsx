import { FaCompass as FaCompassRegular, FaCheckCircle as FaCheckCircleRegular, FaMapMarkerAlt as FaMapMarkerAltRegular, FaHeart as FaHeartRegular, FaYoutube, FaInstagram, FaFacebook, FaHandsHelping, FaUsers } from 'react-icons/fa';
import Recent from '../assets/CongressoOnFire.jpeg';

const Sobre = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-6 max-w-6xl mx-auto w-full">
      {/* Card Topo */}
      <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg flex items-center">
        {/* Seção de Texto */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-base font-thin text-gray-800">Culto de Celebração</h2>
          <p className="font-medium text-lg text-gray-700 mt-2">
            Domingo: <a className='font-bold'>09h00 - 17h00 - 19h00</a>
          </p>
        </div>
        {/* Barra Vertical */}
        <div className="w-px bg-gray-400 h-24 mx-4"></div>
        {/* Seção de Ícones */}
        <div className="flex-1 flex flex-row items-center justify-center space-x-4">
          <a href="https://www.youtube.com" className="group transition-transform duration-300 hover:scale-110">
            <FaYoutube className="text-gray-800 text-3xl group-hover:text-red-600 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" className="group transition-transform duration-300 hover:scale-110">
            <FaInstagram className="text-gray-800 text-3xl group-hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com" className="group transition-transform duration-300 hover:scale-110">
            <FaFacebook className="text-gray-800 text-3xl group-hover:text-blue-600 transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Cards Retangulo */}
      <div className="space-y-3 col-span-2">
        <a href="/" className="bg-white p-4 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaMapMarkerAltRegular className="text-2xl text-gray-800 mr-4" />
          <p className="text-base font-bold text-gray-700">Saiba onde estamos. Confira nosso endereço e horários.</p>
        </a>
        <a href="/celulas" className="bg-white p-4 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaHeartRegular className="text-2xl text-gray-800 mr-4" />
          <p className="text-base font-bold text-gray-700">Venha viver uma vida em comunhão. Participe de uma Célula.</p>
        </a>

        {/* Card Imagem */}
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <img 
            src={Recent} 
            alt="Conteúdo Recente" 
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-white p-4">
            <p className="text-sm font-light">PALAVRA RECENTE</p>
            <h3 className="text-lg font-bold">Título da Palavra Específica</h3>
            <div className="flex space-x-2 mt-2">
              <button className="bg-blue-500 text-white py-2 px-6 rounded text-base"><a href="">Acessar</a></button>
              <button className="bg-gray-500 text-white py-2 px-6 rounded text-base"><a href="/content/cultos">Cultos</a></button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Direita */}
      <div className="flex flex-col space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Envolva-se</h3>
          <p className="text-sm text-gray-600">com um propósito: Salvar vidas!</p>
          <ul className="mt-4 space-y-4">
            <li className="cursor-pointer text-base flex items-center hover:text-blue-500 transition-colors duration-300">
              <a href="/" className="flex items-center space-x-2">
                <FaHandsHelping className="text-2xl mr-2" /> 
                <span>Voluntários</span>
              </a>
            </li>
            <li className="cursor-pointer text-base flex items-center hover:text-blue-500 transition-colors duration-300">
              <a href="/celulas" className="flex items-center space-x-2">
                <FaUsers className="text-2xl mr-2" /> 
                <span>Células</span>
              </a>
            </li>
            <li className="cursor-pointer text-base flex items-center hover:text-blue-500 transition-colors duration-300">
              <a href="/" className="flex items-center space-x-2">
                <FaCompassRegular className="text-2xl mr-2" /> 
                <span>Nossa Sede</span>
              </a>
            </li>
            <li className="cursor-pointer text-base flex items-center hover:text-blue-500 transition-colors duration-300">
              <a href="/contribua" className="flex items-center space-x-2">
                <FaCheckCircleRegular className="text-2xl mr-2" /> 
                <span>Contribua</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Siga a Holy Fire</h3>
          <p className="text-sm text-gray-600">Conecte-se conosco!</p>
          <div className="space-y-6 mt-4">
            <a href="https://www.youtube.com" className="flex items-center space-x-2 hover:text-red-600 transition-colors duration-300">
              <FaYoutube className="text-red-600 text-2xl" />
              <span className="text-base">YouTube</span>
            </a>
            <a href="https://www.instagram.com" className="flex items-center space-x-2 hover:text-pink-500 transition-colors duration-300">
              <FaInstagram className="text-pink-500 text-2xl" />
              <span className="text-base">Instagram</span>
            </a>
            <a href="https://www.facebook.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaFacebook className="text-blue-600 text-2xl" />
              <span className="text-base">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
