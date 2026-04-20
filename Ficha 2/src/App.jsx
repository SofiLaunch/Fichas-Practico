import "./App.css";
import React from "react";
import "./components/Tarjeta.jsx";
import Tarjeta from "./components/Tarjeta.jsx";
import Lista from "./components/Lista.jsx";

function App() {
  const peliculas = [
    "BabyGirl",
    "Matrix",
    "Avatar 2",
    "Lucy",
    "El Caballo Indomable",
  ];

  const personas = [
    { nombre: "Sofia", rol: "Ingeniera" },
    { nombre: "Juliana", rol: "Gerente" },
    { nombre: "Maria", rol: "Empresaria" },
  ];

  return (
    <>
      <h1>Ejercicio 1 - Peliculas</h1>
      <ul>
        {peliculas.map((pelicula, index) => (
          <li key={index}> {pelicula} </li>
        ))}
      </ul>
      <h1>Ejercico 2 - Tarjetas</h1>
      <div className="contenedor">
        {personas.map((persona, index) => (
          <Tarjeta key={index} nombre={persona.nombre} rol={persona.rol} />
        ))}
      </div>
      <div>
        <h1>Ejercicio 3</h1>
      </div>
      <Lista />
    </>
  );
}
export default App;
