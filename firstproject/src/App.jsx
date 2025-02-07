import { useState } from "react";
import "./App.css";
import AddComponentesGuia from "./componentes/AddComponentesGuia";
import WriteJSX from "./componentes/WriteJSX";

function App() {
  const [componenteActivo, setComponenteActivo] = useState(null);
  const [animacionSalida, setAnimacionSalida] = useState(false);

  const abrirComponente = (componente) => {
    setComponenteActivo(componente);
  };

  const cerrarComponente = () => {
    setAnimacionSalida(true);
    setTimeout(() => {
      setComponenteActivo(null);
      setAnimacionSalida(false);
    }, 300);
  };

  const renderPopup = (componente, content) => (
    <div
      className={`popup-overlay fixed inset-0 bg-black bg-opacity-90 flex items-end justify-center transition-opacity duration-300 ${
        animacionSalida ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`popup bg-gray-700 w-full sm:w-[95%] md:w-[85%] lg:w-[50%] xl:w-[50%] max-w-[1000px] rounded-lg p-6 shadow-lg transition-transform transform ${
          animacionSalida ? "translate-y-100" : "translate-y-0"
        }`}
      >
        <button
          className="close-btn absolute top-4 right-10 text-2xl text-white hover:text-blue-600 focus:outline-none focus:ring-0 bg-transparent"
          onClick={cerrarComponente}
        >
          ×
        </button>

        <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          Aprende React
        </h1>
        <p className="text-lg text-gray-100 mb-6">
          React es una biblioteca de JavaScript desarrollada por Facebook para
          la construcción de interfaces de usuario interactivas y eficientes. Se
          utiliza principalmente para desarrollar aplicaciones web de una sola
          página (Single Page Applications o SPA) y para la creación de
          componentes reutilizables.
        </p>

        {/* Botón para abrir el primer componente */}
        <button
          onClick={() => abrirComponente("apartado1")}
          className="px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-blue-950 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out mb-4"
        >
          1. Cómo crear y anidar un componente
        </button>
        <br />
        {/* Botón para abrir el segundo componente */}
        <button
          onClick={() => abrirComponente("apartado2")}
          className="px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-blue-950 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          2. Otro componente
        </button>

        {/* Condicional para renderizar el primer componente */}
        {componenteActivo === "apartado1" &&
          renderPopup("apartado1", <AddComponentesGuia />)}

        {/* Condicional para renderizar el segundo componente */}
        {componenteActivo === "apartado2" &&
          renderPopup("apartado2", <WriteJSX />)}
      </div>
    </>
  );
}

export default App;
