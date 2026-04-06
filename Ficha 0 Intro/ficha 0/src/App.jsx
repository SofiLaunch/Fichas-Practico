import { useState } from "react";
import Tarjeta from "./components/Tarjeta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor-tarjetas">
        <Tarjeta
          name="Antroposofía"
          subtitulo=""
          descripcion="La antroposofía, desarrollada por Rudolf Steiner a principios del siglo
        XX, es una ciencia espiritual  que busca conectar la sabiduría humana
        con el ámbito espiritual universal, promoviendo una visión holística del
        ser humano cuerpo, alma y espíritu. Sus aplicaciones prácticas
        incluyen la educación Waldorf, agricultura biodinámica y medicina
        antroposófica."
          url="https://wakeupplatform.com/wp-content/uploads/2024/07/metafisica-espiritual.webp"
          link="https://antroposofiamexico.org/la-antroposofia/"
        ></Tarjeta>
        <Tarjeta
          name="Desarollo de Software"
          subtitulo="Descripción del software"
          descripcion="El desarrollo de software hace referencia a un conjunto de actividades informáticas dedicadas al proceso de creación, diseño, implementación y soporte de software.
          El software puede diseñarse como software personalizado o comercial. El desarrollo de software a medida consiste en diseñar, crear, implementar y mantener software para un conjunto específico de usuarios, funciones u organizaciones.
          Los programadores, ingenieros de software y desarrolladores de software se dedican principalmente al desarrollo de software. Estos roles interactúan, se superponen y tienen requisitos similares, como escribir código y probar software. La dinámica entre ellos varía mucho según los departamentos de desarrollo y las organizaciones."
          url="https://colombia.unir.net/wp-content/uploads/sites/4/2025/01/Tendencias-en-desarrollo-de-software2.jpg"
          link="https://www.ibm.com/es-es/think/topics/software-development"
        ></Tarjeta>
        <Tarjeta
          name="Metafísica"
          subtitulo="¿Qué es la Metafísica Espiritual?"
          descripcion="La metafísica espiritual es una rama de la filosofía que se adentra en lo que va más allá de la realidad física. Se ocupa de preguntas fundamentales sobre el ser, la existencia y el significado de la vida. A través de prácticas como la meditación, la lectura de registros akáshicos y el asesoramiento espiritual, las personas se sumergen en una exploración profunda de su alma y su conexión con el universo.
          
          Desde la perspectiva de la metafísica espiritualista, el ser humano y su energía no se limita a su cuerpo físico, sino que posee una esencia espiritual que trasciende lo material. Esta visión propone que la realidad es multidimensional, compuesta por planos de existencia que van más allá de lo perceptible por los sentidos físicos.

La naturaleza del ser, según esta filosofía, es fundamentalmente espiritual. El cuerpo físico se considera un vehículo temporal para el espíritu, que es eterno y evoluciona a través de experiencias en diferentes planos de existencia. Esta concepción implica que la realidad última es de carácter espiritual, y que el mundo material es una manifestación o expresión de esta realidad superior."
          url="https://wakeupplatform.com/wp-content/uploads/2024/07/espiritualidad-en-metafisica.webp"
          link="https://reikiesmas.com/servicios/metafisica-espiritual/"
        ></Tarjeta>
      </div>
    </>
  );
}

export default App;
