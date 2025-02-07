import React from "react";

const AddComponentesGuia = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-100">
        Cómo crear y anidar componentes
      </h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-300">
        <li>
          <strong>Para crear el componente:</strong> Dentro de la carpeta{" "}
          <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
            src/components
          </code>
          , crea un nuevo archivo, por ejemplo,{" "}
          <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
            MiComponente.jsx
          </code>
          .
        </li>
        <li>
          <strong>
            Escribir la función de tu componente en{" "}
            <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
              MyComponent.jsx
            </code>
            .
          </strong>
          <pre className="bg-gray-800 text-white p-6 rounded-lg overflow-x-auto w-full">
            {`import React from 'react';

const MiComponente = () => {
  return <div>Hola, Soy un nuevo componente!</div>;
};

export default MiComponente;`}
          </pre>
        </li>
        <li>
          <strong>Importar y usar tu componente:</strong> En{" "}
          <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
            App.jsx
          </code>
          , importamos y usamos el componente.
          <pre className="bg-gray-800 text-white p-6 rounded-lg overflow-x-auto w-full">
            {`import React from 'react';
import MiComponente from './componentes/MiComponente';

const App = () => {
  return (
    <div>
      <h1>Esto es mi ejemplo</h1>
      <MiComponente />
    </div>
  );
};

export default App;`}
          </pre>
        </li>
      </ol>
    </div>
  );
};

export default AddComponentesGuia;
