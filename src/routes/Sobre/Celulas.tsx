import React, { useState } from "react";
import IconMDA from "../../assets/IconMDA.png";
import CongressoOnFire from "../../assets/CongressoOnFire.jpeg";

const MDAComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    maritalStatus: "",
    address: "",
    neighborhood: "",
    postalCode: "",
    phone: "",
    cityState: "",
    preferredDay: "",
    observation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className="font-sans">
      <div className="relative w-full h-96">
        <img
          src={CongressoOnFire}
          alt="Congresso On Fire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">Visão MDA</h1>
        </div>
      </div>

      {/* Cartão de Texto */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <p className="mb-6 text-gray-800 text-lg leading-relaxed">
              Na Visão do MDA, é possível à Igreja Local ganhar multidões para Jesus sem deixar de cuidar bem de cada cristão.
            </p>
            <p className="mb-6 text-gray-800 text-lg leading-relaxed">
              O MDA abrange diversos fatores desenvolvidos na Igreja Local. Sem dúvida, o fator central desse poderoso modelo é o <strong>discipulado</strong>, que todos na igreja recebem, seja individualmente, seja através do pastoreio eficaz da célula.
            </p>
            <p className="mb-6 text-gray-800 text-lg leading-relaxed">
              A Célula — é a Igreja no Lar. Um lugar de pastoreio, de grandes amizades, de estudo da Palavra de Deus e de oração intensa. Um ambiente cheio de fé, alegria e muito amor.
            </p>
            <p className="mb-6 text-gray-800 text-lg leading-relaxed">
              Na <a href="https://www.visaomda.com/" className="text-blue-600 font-semibold hover:underline">Visão do MDA</a> cada cristão compromissado deve estar sendo e fazendo discípulos, participar de uma Célula, abraçar a visão da Igreja Local, buscar a Unidade da Igreja Mundial e colocar em primeiro lugar o Reino de Deus.
            </p>
            
            {/* Barra horizontal */}
            <hr className="my-6 border-gray-300" />

            <a
              href="https://www.visaomda.com/"
              className="block text-blue-600 font-semibold text-lg hover:underline"
            >
              - Saiba mais sobre a Visão do MDA
            </a>
          </div>
          
          {/* Imagem MDA */}
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
            <img src={IconMDA} alt="MDA" className="w-48 mx-auto" />
          </div>
        </div>
      </div>

      {/* Cartão de Formulário */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Faça parte de uma Célula</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Nome Completo</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Idade</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Sexo</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Est. Civil</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Selecione</option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viúvo(a)">Viúvo(a)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Endereço</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Bairro</label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">CEP</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Fone/Whatsapp</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Cidade/Estado</label>
              <input
                type="text"
                name="cityState"
                value={formData.cityState}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 font-medium">Melhor dia para você participar?</label>
              <select
                name="preferredDay"
                value={formData.preferredDay}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
                required
              >
                <option value="">Selecione</option>
                <option value="Quarta (noite)">Quarta (noite)</option>
                <option value="Quinta (noite)">Quinta (noite)</option>
                <option value="Sábado (noite)">Sábado (noite)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 font-medium">Observação (Opcional)</label>
              <textarea
                name="observation"
                value={formData.observation}
                onChange={handleChange}
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-blue-700 mt-6"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MDAComponent;
