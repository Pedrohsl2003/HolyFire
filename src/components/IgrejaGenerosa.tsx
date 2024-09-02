const IgrejaGenerosa = () => {
    return (
      <div className="bg-indigo-500 p-16 text-center mt-12 text-white shadow-lg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Uma Igreja Generosa</h1>
          <p className="text-xl my-8">
            A força da igreja Holy Fire pode ser encontrada na generosidade e comprometimento das pessoas.
            Saiba mais sobre as formas de contribuir clicando no botão abaixo.
          </p>
          <a 
            href="/contribur" 
            className="bg-white text-indigo-500 py-3 px-6 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Contribuir
          </a>
        </div>
      </div>
    );
  };
  
  export default IgrejaGenerosa;  