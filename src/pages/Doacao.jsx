import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const DoacaoPopup = ({ onClose }) => {
  const [currentTab, setCurrentTab] = useState('pix');

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleCopyClick = () => {
    const emailText = 'igreja@holyfire.com.br';
    const textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg max-w-4xl text-center">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <h2 className="text-xl font-bold text-orange-600 mb-4">Doações</h2>
        <p className="text-3xl font-bold text-gray-600 mb-6">
          Selecione o método de doação
        </p>
        <div className="mt-4 flex justify-center">
          <button
            className={`font-semibold px-6 py-3 mr-4 focus:outline-none rounded-md ${
              currentTab === 'pix'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleTabClick('pix')}
          >
            Pix
          </button>
          <button
            className={`px-6 py-3 focus:outline-none rounded-md ${
              currentTab === 'transferencia'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleTabClick('transferencia')}
          >
            Transferência
          </button>
        </div>
        <div className="mt-8">
          {currentTab === 'pix' && (
            <div>
              <p className="text-2xl font-bold text-orange-600 mb-4">
                Capture o QRCode
              </p>
              <img
                src="https://igrejabatistaatitude.com.br/wp-content/uploads/sites/3/2022/06/QR-BRADESCO-IBA-SEDE-e1654722070862-300x300.png"
                alt="QR Code Pix"
                className="mx-auto"
              />
              <p className="text-2xl mt-4 text-gray-600">
                Faça o pagamento via Pix. Prático e seguro!
              </p>
              <p
                className="text-xl mt-4 text-black cursor-pointer border rounded-md p-2 inline-block border-orange-600"
                onClick={handleCopyClick}
              >
                igreja@holyfire.com.br
              </p>
            </div>
          )}
          {currentTab === 'transferencia' && (
            <div>
              <p>Conteúdo da aba Transferência</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoacaoPopup;
