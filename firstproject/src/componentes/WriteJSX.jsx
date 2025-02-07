import React from "react";

const WriteJSX = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">
        Escribir marcado con JSX
      </h2>
      <p className="text-gray-100">
        La sintaxis de marcado que viste arriba se llama JSX. Es totalmente
        opcional, pero la mayoría de los proyectos de React usan JSX por la
        comodidad que ofrece. Todas las herramientas que recomendamos para el
        desarrollo local son compatibles con JSX sin ningún tipo de
        configuración.
      </p>
      <p className="text-gray-100">
        JSX es más estricto que HTML. Tienes que cerrar etiquetas como{" "}
        <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
          {"<br />"}
        </code>
        . Tu componente tampoco puede devolver múltiples etiquetas de JSX. Debes
        envolverlas en un padre compartido, como{" "}
        <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
          &lt;div&gt;...
        </code>{" "}
        o en un envoltorio vacío{" "}
        <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
          &lt;&gt;...
        </code>
        :
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        {`function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  );
}`}
      </pre>
      <p className="text-gray-100">
        Si tienes mucho HTML que convertir a JSX, puedes utilizar un convertidor
        en línea.
      </p>
    </div>
  );
};

export default WriteJSX;
