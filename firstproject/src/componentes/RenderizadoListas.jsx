import React, { useState } from "react";

const RenderizadoDeListas = () => {
  const [codigoFrutas, setCodigoFrutas] = useState(
    `const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Pera"];

return (
  <ul>
    {frutas.map((fruta, index) => (
      <li key={index}>{fruta}</li>
    ))}
  </ul>
);`
  );

  const [codigoPersonas, setCodigoPersonas] = useState(
    `const personas = [
  { id: 1, nombre: "Carlos", edad: 28 },
  { id: 2, nombre: "Ana", edad: 34 },
  { id: 3, nombre: "Luis", edad: 25 },
  { id: 4, nombre: "Maria", edad: 40 },
];

return (
  <ul>
    {personas.map((persona) => (
      <li key={persona.id}>
        {persona.nombre} - Edad: {persona.edad}
      </li>
    ))}
  </ul>
);`
  );

  const [frutas, setFrutas] = useState([
    "Manzana",
    "Banana",
    "Cereza",
    "Durazno",
    "Pera",
  ]);
  const [personas, setPersonas] = useState([
    { id: 1, nombre: "Carlos", edad: 28 },
    { id: 2, nombre: "Ana", edad: 34 },
    { id: 3, nombre: "Luis", edad: 25 },
    { id: 4, nombre: "Maria", edad: 40 },
  ]);

  const actualizarFrutas = (nuevoCodigo) => {
    try {
      // Extraer el array de frutas del código
      const match = nuevoCodigo.match(/const frutas = \[(.*?)\];/s);
      if (match) {
        const frutasArray = JSON.parse(`[${match[1]}]`);
        setFrutas(frutasArray);
      } else {
        throw new Error(
          "No se pudo encontrar 'const frutas'. Revisa tu código."
        );
      }
    } catch (error) {
      console.error("Error al procesar el código de frutas:", error.message);
    }
  };

  const actualizarPersonas = (nuevoCodigo) => {
    try {
      // Extraer el array de personas del código
      const match = nuevoCodigo.match(/const personas = \[(.*?)\];/s);
      if (match) {
        const personasArray = JSON.parse(`[${match[1]}]`);
        setPersonas(personasArray);
      } else {
        throw new Error(
          "No se pudo encontrar 'const personas'. Revisa tu código."
        );
      }
    } catch (error) {
      console.error("Error al procesar el código de personas:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">
        Renderizado de Listas en React
      </h2>
      <p className="text-gray-100">
        Este ejemplo permite editar directamente el código del renderizado de
        listas. Los cambios se reflejan inmediatamente en el resultado visual.
      </p>

      {/* Ejemplo 1: Frutas */}
      <h3 className="text-xl font-semibold text-white mt-6">
        Ejemplo 1: Lista de Frutas
      </h3>
      <p className="text-gray-100">
        Edita el código para cambiar la lista de frutas.
      </p>
      <pre
        className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          setCodigoFrutas(e.target.innerText);
          actualizarFrutas(e.target.innerText);
        }}
      >
        {codigoFrutas}
      </pre>

      <h4 className="text-lg text-white mt-4">Resultado:</h4>
      <ul className="bg-gray-800 text-white p-4 rounded-lg">
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>

      {/* Ejemplo 2: Personas */}
      <h3 className="text-xl font-semibold text-white mt-6">
        Ejemplo 2: Lista de Personas
      </h3>
      <p className="text-gray-100">
        Edita el código para cambiar la lista de personas.
      </p>
      <pre
        className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          setCodigoPersonas(e.target.innerText);
          actualizarPersonas(e.target.innerText);
        }}
      >
        {codigoPersonas}
      </pre>

      <h4 className="text-lg text-white mt-4">Resultado:</h4>
      <ul className="bg-gray-800 text-white p-4 rounded-lg">
        {personas.map((persona) => (
          <li key={persona.id}>
            {persona.nombre} - Edad: {persona.edad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderizadoDeListas;
