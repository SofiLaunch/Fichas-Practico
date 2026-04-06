function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h2 className="titulo">{props.name} </h2>
      <h4>{props.subtitulo} </h4>
      <p>{props.descripcion}</p>
      <img className="img" alt="link" src={props.url} />
      <a href={props.link}>Ver Link</a>
    </div>
  );
}

export default Tarjeta;
