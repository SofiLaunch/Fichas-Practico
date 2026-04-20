import { useState } from "react";

function Lista() {
  const familias = ["Ney", "Monica", "Neytiam", "Guillermo"];
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar lista" : "Volver a Mostrar"}
      </button>

      {mostrar && (
        <ul>
          {familias.map((familia, index) => (
            <li key={index}> {familia} </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
