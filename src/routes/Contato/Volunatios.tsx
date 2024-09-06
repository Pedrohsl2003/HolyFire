import React, { useState, useEffect } from 'react';
import voluntario from '../../assets/voluntario.jpg';

const Voluntarios: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    ministerio: '',
    habilidades: '',
    porque: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${voluntario})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl text-center font-bold">Seja um voluntário</h1>
        </div>
      </div>

      {/* Texto sobre o voluntariado */}
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold mb-4 text-left">Nossa Cultura</h2>
        <h3 className="text-2xl font-semibold mb-4 text-left">A Cultura do Voluntariado</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cremos, verdadeiramente, que ser um voluntário na Igreja (em qualquer área ou ministério) é uma tarefa tão santa quanto ministrar o louvor ou pregar a Palavra. O nosso objetivo é o mesmo: derramar o Amor de Deus sobre as pessoas!
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Quando, ao final de um culto, uma pessoa decide se entregar totalmente a Cristo, todas as pessoas que serviram naquele culto têm participação nisso! Somos um time, e o papel que cada voluntário desempenha é essencial para que mais pessoas conheçam a Jesus.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Todas as atividades que os voluntários exercem se tornam as mais empolgantes e importantes do mundo quando se entende que por trás disso tudo existe um propósito: salvar vidas!
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          A Comunidade Holy Fire dá a você a oportunidade de fazer parte de nosso time de voluntários para cuidar das pessoas e servir na obra do Senhor. Temos ministérios de entrada que recomendamos para você servir como voluntário. Conheça um pouco mais sobre cada um e se envolva nesse precioso serviço do Reino de Deus. Caso queira servir, acesse o ministério específico e faça a sua inscrição.
        </p>
      </div>

      {/* Formulário de cadastro */}
      <div className="max-w-5xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-left">Inscreva-se para servir</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Ministério</label>
              <select
                name="ministerio"
                value={formData.ministerio}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                required
              >
                <option value="">Selecione o ministério</option>
                <option value="KIDS">KIDS</option>
                <option value="Acolhimento">Acolhimento</option>
                <option value="Estacionamento">Estacionamento</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Por que você quer servir?</label>
            <textarea
              name="porque"
              value={formData.porque}
              onChange={handleChange}
              placeholder="Escreva o motivo pelo qual deseja servir"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700">Quais são suas habilidades?</label>
            <textarea
              name="habilidades"
              value={formData.habilidades}
              onChange={handleChange}
              placeholder="Descreva suas habilidades"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="text-center mt-8">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Voluntarios;