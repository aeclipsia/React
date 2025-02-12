import React, { useState } from "react";

const ProfileExample = () => {
  const initialCode = `const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };`;

  const [code, setCode] = useState(initialCode);
  const [user, setUser] = useState({
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  });

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);

    try {
      const newUser = new Function(`${newCode}; return user;`)();
      setUser(newUser);
    } catch (err) {
      console.error("Error al evaluar el código:", err);
      // Si hay un error, no se actualiza el usuario
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">Mostrar datos en React</h2>
      <p className="text-gray-100">
        JSX te permite escribir marcado directamente dentro de JavaScript. A
        continuación, se muestra un ejemplo de cómo usar JSX para mostrar el
        nombre y la imagen de un usuario. Puedes modificar el código y ver cómo
        los cambios se reflejan automáticamente.
      </p>

      <p>Código de inyección de usuario:</p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        <code>
          {`<h1>{user.name}</h1>
<img
  className="avatar"
  src={user.imageUrl}
  alt={'Foto de ' + user.name}
  style={{
    width: user.imageSize,
    height: user.imageSize,
  }}
/>`}
        </code>
      </pre>

      <p>
        Aqui puedes editar el objeto{" "}
        <code className="text-blue-600 font-mono bg-gray-100 px-1 rounded">
          user
        </code>
        :
      </p>
      <textarea
        className="bg-gray-900 text-white p-4 rounded-lg w-full h-64 font-mono resize-none"
        value={code}
        onChange={handleCodeChange}
      ></textarea>

      <h2>Resultado visual:</h2>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      >
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Foto de " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileExample;
