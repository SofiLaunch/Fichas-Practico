function Tarjeta(props) {
  return (
    <div>
      <h2>{props.nombre} Somir</h2>
      <p>
        La antroposofía, desarrollada por Rudolf Steiner a principios del siglo
        XX, es una "ciencia espiritual" que busca conectar la sabiduría humana
        con el ámbito espiritual universal, promoviendo una visión holística del
        ser humano (cuerpo, alma y espíritu). Sus aplicaciones prácticas
        incluyen la educación Waldorf, agricultura biodinámica y medicina
        antroposófica.
        {props.descripcion}
      </p>
      <p>
        <img
          src="https://www.nuevamujer.com/resizer/v2/TDUB75RFORFZ5AB5OGGQC6AMGU.jpg?auth=d4954fc0c5097bbb28b18d9d3e7fda8cf4baf745228a166af0a1e590b3787b72&width=1200&height=675&smart=true"
          alt="tarot"
        />
        <a href="https://waldorfinspiration.com/es/antroposofia-para-principiantes">
          Ver Información
        </a>
        {props.link}
      </p>
    </div>
  );
}

export default Tarjeta;
