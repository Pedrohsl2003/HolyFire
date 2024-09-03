import { MdPix } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import QRCode from '../../assets/QrCode.png';  
import PayPal from '../../assets/Paypal.png';  
import Banner from '../../assets/Contribuicao.jpg';  

const Contribua = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-96">
        <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-extrabold text-white text-center">Contribua</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="flex items-center">
              <MdPix className="w-10 h-10 text-cyan-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">PIX e PayPal</h3>
            </div>
            <p className="text-gray-600">
              Contribua através de PIX utilizando a chave:<br />
              <span className="font-medium text-gray-800">contato@igreja.com.br</span>
            </p>
            <p className="text-gray-600">
              Ou escaneie o QR code abaixo a partir do aplicativo do seu banco ou carteira digital.
            </p>
            <div className="flex justify-center">
              <img src={QRCode} alt="QR Code Pix" className="w-32 h-auto mb-4" />
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-center mb-4">Também aceitamos doações via PayPal:</p>
              <div className="flex justify-center">
                <img src={PayPal} alt="PayPal" className="w-24 h-auto mb-4"/>
              </div>
              <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex justify-center">
                <input type="hidden" name="business" value="ZCXT6XPAMR7EW" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="currency_code" value="BRL" />
                <input 
                  type="image" 
                  src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" 
                  name="submit" 
                  title="Contribua com a Comunidade Holy Fire" 
                  alt="Faça doações com o botão do PayPal" 
                />
              </form>
            </div>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <RiBankFill className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Depósito Bancário</h3>
              </div>
              <p className="text-gray-600">
                <span className="font-medium">CNPJ:</span> 00.000.000/0001-00<br />
                <span className="font-medium">Banco:</span> 000<br />
                <span className="font-medium">Agência:</span> 0000<br />
                <span className="font-medium">Conta:</span> 00000-0
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <FaEnvelope className="w-10 h-10 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Envelope</h3>
              </div>
              <p className="text-gray-600">
                Você pode contribuir em espécie utilizando os envelopes de Dízimos e Ofertas ao participar de uma de nossas reuniões presenciais.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-blue-700 text-white p-12 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Por que contribuímos?</h2>
        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed">
          Provérbios 21:26 diz que “o justo ama dar”.<br /><br />
          Nós acreditamos no princípio bíblico de dizimar. Em Malaquias 3:10 (NTLH), a Bíblia fala sobre trazer os primeiros 10% (dízimo) de sua renda para os depósitos do templo (igreja).<br /><br />
          Os dízimos e ofertas recebidos na Holy Fire financiam a visão e as atividades da nossa igreja.
        </p>
      </div>
    </div>
  );
};

export default Contribua;
