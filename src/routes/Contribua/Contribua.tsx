import { MdPix } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import QRCode from '../../assets/QrCode.png';  
import PayPal from '../../assets/Paypal.png';  
import Banner from '../../assets/CongressoOnFire.jpeg';  

const Contribua = () => {
  return (
    <div className="w-full">
      <img src={Banner} alt="Banner" className="w-full h-96" />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contribua</h1>
        <h2 className="text-xl font-semibold text-center mb-8">Formas de Contribuir</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <MdPix className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-semibold text-center">PIX</h3>
                </div>
                <p className="text-center text-gray-600 mb-2">
                  Use a chave de e-mail<br /> contato@igreja.com.br <br /><br />
                  ou <br /><br />
                  Escaneie o QR code abaixo a partir do aplicativo do seu banco ou carteira digital.
                </p>
                <img src={QRCode} alt="QR Code Pix" className="w-32 h-auto"/>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <img src={PayPal} alt="PayPal" className="w-24 h-auto"/>
                <form action="https://www.paypal.com/donate" method="post" target="_top" className="mt-4">
                  <input type="hidden" name="business" value="ZCXT6XPAMR7EW" />
                  <input type="hidden" name="no_recurring" value="0" />
                  <input type="hidden" name="currency_code" value="BRL" />
                  <input 
                    type="image" 
                    src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" 
                    name="submit" 
                    title="Contribua com a Comunidade Holy Fire" 
                    alt="Faça doações com o botão do PayPal" 
                    className="mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <RiBankFill className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-semibold">Depósito Bancário</h3>
            </div>
            <p className="mt-2 text-gray-600">
              CNPJ: 00.000.000/0001-00<br />
              Banco: 000<br />
              Agência: 0000<br />
              Conta: 00000-0
            </p>
            
            <div className="flex items-center mt-8 mb-2">
              <FaEnvelope className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-semibold">Envelope</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Você pode contribuir em espécie utilizando os envelopes de Dízimos e Ofertas ao participar de uma de nossas reuniões presenciais.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-blue-500 text-white p-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Por que contribuímos?</h2>
        <p className="text-center max-w-4xl mx-auto">
          Provérbios 21:26 diz que “o justo ama dar”<br /><br />
          Nós acreditamos no princípio bíblico de dizimar. Em Malaquias 3:10 (NTLH), a Bíblia fala sobre trazer os primeiros 10% (dízimo) de sua renda para os depósitos do templo (igreja).<br /><br />
          Os dízimos e ofertas recebidos na HolyFire financiam a visão e as atividades da nossa igreja.
        </p>
      </div>
    </div>
  );
};

export default Contribua;
