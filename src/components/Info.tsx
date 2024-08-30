import { FaCompass as FaCompassRegular, FaCheckCircle as FaCheckCircleRegular, FaMapMarkerAlt as FaMapMarkerAltRegular, FaHeart as FaHeartRegular, FaYoutube, FaInstagram, FaFacebook, FaHandsHelping, FaUsers } from 'react-icons/fa';
import Recent from '../assets/CongressoOnFire.jpeg';

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-6 max-w-6xl mx-auto w-full">
      {/* Card Principal */}
      <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg grid grid-cols-4 items-center">
        <div className="col-span-2 flex flex-col items-center text-center">
          <h2 className="text-base font-thin text-gray-800">Campus Jaraguá</h2>
          <p className="font-medium text-lg text-gray-700 mt-2">
            Domingo: <a className='font-bold'>09h00 - 17h00 - 19h00</a>
          </p>
        </div>
        <div className="w-px bg-gray-400 h-16"></div>
        <div className="col-span-2 col-start-4 flex justify-center space-x-6">
          <FaYoutube className="text-gray-800 text-3xl" />
          <FaInstagram className="text-gray-800 text-3xl" />
          <FaFacebook className="text-gray-800 text-3xl" />
        </div>
      </div>

      {/* Dois Cards 3x2 (um abaixo do outro) */}
      <div className="space-y-3 col-span-2">
        <a href="/" className="bg-white p-4 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaMapMarkerAltRegular className="text-2xl text-gray-800 mr-4" />
          <p className="text-base font-bold text-gray-700">Saiba onde estamos. Confira nosso endereço e horários.</p>
        </a>
        <a href="#" className="bg-white p-4 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaHeartRegular className="text-2xl text-gray-800 mr-4" />
          <p className="text-base font-bold text-gray-700">Venha viver uma vida em comunhão. Participe de uma Célula.</p>
        </a>

        {/* Card com Imagem Grande */}
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
              <button className="bg-blue-500 text-white py-2 px-6 rounded text-base">Acessar</button>
              <button className="bg-gray-500 text-white py-2 px-6 rounded text-base">Cultos</button>
            </div>
          </div>
        </div>
      </div>

      {/* Card à Direita (ocupando 1 col) */}
      <div className="flex flex-col space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Envolva-se</h3>
          <p className="text-sm text-gray-600">com um propósito: Salvar vidas!</p>
          <ul className="mt-4 space-y-4">
            <li className="cursor-pointer text-base flex items-center">
              <FaHandsHelping className="text-2xl mr-2" /> Voluntários
            </li>
            <li className="cursor-pointer text-base flex items-center">
              <FaUsers className="text-2xl mr-2" /> Células
            </li>
            <li className="cursor-pointer text-base flex items-center">
              <FaCompassRegular className="text-2xl mr-2" /> Nossa Sede
            </li>
            <li className="cursor-pointer text-base flex items-center">
              <FaCheckCircleRegular className="text-2xl mr-2" /> Contribua
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Siga a Holy Fire</h3>
          <p className="text-sm text-gray-600">Conecte-se conosco!</p>
          <div className="space-y-6 mt-4">
            <div className="flex items-center space-x-2">
              <FaYoutube className="text-red-600 text-2xl" />
              <span className="text-base">YouTube</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-pink-500 text-2xl" />
              <span className="text-base">Instagram</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebook className="text-blue-600 text-2xl" />
              <span className="text-base">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
