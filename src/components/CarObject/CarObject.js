import React, { useState } from "react";

export const CarObject = () => {
  //   const [encendido, setEncendido] = useState(false);
  //   const [countKm, setCountKm] = useState(0);

  const [carState, setCarState] = useState({
    encendido: false,
    countKm: 0,
  });

  const checkStateCar = () => {
    if (carState.encendido) {
      return <span style={{ color: "green" }}>"Encendido"</span>;
    }
    return <span style={{ color: "red" }}>"Apagado"</span>;
  };

  const increaseKm = (num) => {
    if (carState.encendido) {
      setCarState({
        ...carState,
        countKm: carState.countKm + num,
      });
    } else {
      alert("El coche esta apagado");
    }
  };

  return (
    <div>
      <h2>Nuestro Coche esta: {checkStateCar()}</h2>
      <h2>Kilometros Recorridos: {carState.countKm}</h2>
      <button
        onClick={() => {
          setCarState({
            ...carState,
            encendido: !carState.encendido,
          });
        }}
      >
        Encendido/Apagado
      </button>

      <button
        onClick={() => {
          increaseKm(10);
        }}
      >
        Incrementar km
      </button>
    </div>
  );
};
