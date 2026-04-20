import React from "react";

function Tarjeta({ nombre, rol }) {
  return (
    <div className="Tarjeta">
      <h3 className="letras">{nombre}</h3>
      <p className="letras">{rol}</p>
    </div>
  );
}

export default Tarjeta;
