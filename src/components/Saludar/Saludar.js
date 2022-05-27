import React from "react";
import { SaludarNombre } from "./SaludarNombre/SaludarNombre";

export const Saludar = () => {
  const enviarSaludo = (nombre) => {
    console.log(`hola ${nombre}`);
  };

  return (
    <div>
      <SaludarNombre nombre="Robert" enviarSaludo={enviarSaludo} />
      <SaludarNombre />
      <SaludarNombre nombre="calucho" enviarSaludo={enviarSaludo} />
    </div>
  );
};
