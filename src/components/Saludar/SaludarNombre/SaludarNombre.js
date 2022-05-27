import React from "react";

export const SaludarNombre = ({ nombre = "anonimo", enviarSaludo }) => {
  console.log(nombre);
  console.log(enviarSaludo);
  return (
    <div>
      <div>Hola {nombre}</div>
      {enviarSaludo && (
        <button onClick={() => enviarSaludo(nombre)}>Enviar Saludo</button>
      )}
    </div>
  );
};
