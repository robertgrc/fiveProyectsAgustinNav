import React, { useEffect, useState } from "react";

export const CarUseEffect = () => {
  const [encendido, setEncendido] = useState(false);
  const [countKm, setCountKm] = useState(0);

  useEffect(() => {
    document.title = `coche ${encendido}`;
  }, [encendido]);

  const checkStateCar = () => {
    if (encendido) {
      return <span style={{ color: "green" }}>"Encendido"</span>;
    }
    return <span style={{ color: "red" }}>"Apagado"</span>;
  };

  const increaseKm = (num) => {
    if (encendido) {
      setCountKm(countKm + num);
    } else {
      alert("El coche esta apagado");
    }
  };

  return (
    <div>
      <h2>Nuestro Coche esta: {checkStateCar()}</h2>
      <h2>Kilometros Recorridos: {countKm}</h2>
      <button
        onClick={() => {
          setEncendido(!encendido);
        }}
      >
        Encendido/Apagado
      </button>

      <button
        onClick={() => {
          increaseKm(5);
        }}
      >
        Incrementar km
      </button>
    </div>
  );
};
