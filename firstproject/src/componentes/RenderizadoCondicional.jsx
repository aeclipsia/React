import React, { useState } from "react";

const RenderizadoCondicional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">
        Renderizado Condicional en React
      </h2>
      <p className="text-gray-100">
        El renderizado condicional en React permite mostrar diferentes
        componentes o contenido dependiendo de ciertas condiciones. Usa los
        botones para cambiar el estado de <code>isLoggedIn</code> y observar
        cómo cambia el resultado visual.
      </p>

      <p>Código inicial de renderizado (no editable):</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        <code>
          {`<div>
  {isLoggedIn ? (
    <h1>Bienvenido de nuevo!</h1>
  ) : (
    <h1>Por favor, inicia sesión.</h1>
  )}
</div>`}
        </code>
      </pre>

      <p>Código de los botones (no editable):</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        <code>
          {`<button
  onClick={() => toggleLogin(true)}
  disabled={isLoggedIn}
>
  Iniciar sesión
</button>
<button
  onClick={() => toggleLogin(false)}
  disabled={!isLoggedIn}
>
  Cerrar sesión
</button>`}
        </code>
      </pre>

      <p>
        Control del estado <code>isLoggedIn</code>:
      </p>
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 rounded-lg ${
            isLoggedIn
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => toggleLogin(true)}
          disabled={isLoggedIn}
        >
          Iniciar sesión
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            !isLoggedIn
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
          onClick={() => toggleLogin(false)}
          disabled={!isLoggedIn}
        >
          Cerrar sesión
        </button>
      </div>

      <h2>Resultado visual:</h2>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      >
        {isLoggedIn ? (
          <h1>Bienvenido de nuevo!</h1>
        ) : (
          <h1>Por favor, inicia sesión.</h1>
        )}
      </div>
    </div>
  );
};

export default RenderizadoCondicional;
