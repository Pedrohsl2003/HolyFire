import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-8 p-8">
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
              Na <a href="https://www.visaomda.com/" className="text-blue-600 font-semibold hover:text-blue-700">Visão do MDA</a> cada cristão compromissado deve estar sendo e fazendo discípulos, participar de uma Célula, abraçar a visão da Igreja Local, buscar a Unidade da Igreja Mundial e colocar em primeiro lugar o Reino de Deus.
            </p>
            
            {/* Barra horizontal */}
            <hr className="my-6 border-gray-300" />

            <a
              href="https://www.visaomda.com/"
              className="block text-blue-600 font-semibold text-lg hover:text-blue-700"
            >
              - Saiba mais sobre a Visão do MDA
            </a>
          </div>
          
          {/* Imagem MDA */}
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
            <img src={IconMDA} alt="MDA" className="w-52 mx-auto" />
          </div>
        </div>
      </div>

      {/* Cartão de Formulário */}
      <div className="max-w-5xl mx-auto bg-gradient-to-tl from-sky-300 to-cyan-300 rounded-lg shadow-lg overflow-hidden my-8 p-12">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
          Faça parte de uma Célula
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Nome Completo</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Idade</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Sexo</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Est. Civil</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
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
              <label className="block text-gray-800 mb-2 font-semibold">Endereço</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Bairro</label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">CEP</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Fone/Whatsapp</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2 font-semibold">Cidade/Estado</label>
              <input
                type="text"
                name="cityState"
                value={formData.cityState}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-800 mb-2 font-semibold">Melhor dia para você participar?</label>
              <select
                name="preferredDay"
                value={formData.preferredDay}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
                required
              >
                <option value="">Selecione</option>
                <option value="Quarta (noite)">Quarta (noite)</option>
                <option value="Quinta (noite)">Quinta (noite)</option>
                <option value="Sábado (noite)">Sábado (noite)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-800 mb-2 font-semibold">Observação (Opcional)</label>
              <textarea
                name="observation"
                value={formData.observation}
                onChange={handleChange}
                rows={4}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-tl from-indigo-400 to-sky-400 text-white py-3 px-6 rounded-lg shadow-lg hover:from-indigo-500 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 mt-8"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MDAComponent;
