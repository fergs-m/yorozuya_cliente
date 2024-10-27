import React from "react";
import { IoHeartOutline } from "react-icons/io5";

//Esta es una pequeña sección que le da una idea al usuario sobre que trata la página y quienes la han hecho. 

function Nosotros() {
  return (
    <>
      <section className="nosotros">
        <h2 className="nosotros__titulo">
          Fandom <IoHeartOutline />
        </h2>

        <div className="nosotros__contenedor">
          <div className="nosotros__divParrafos">
            <p className="nosotros__parrafo">
              Yorozuya-Wiki es una página creada por fanáticos de Gintama para
              otros fans, con el objetivo de compartir y celebrar el amor por
              esta icónica serie de anime. En esta plataforma, los usuarios
              pueden explorar información detallada sobre los personajes, desde
              los más conocidos hasta aquellos más secundarios, permitiendo a
              los seguidores descubrir datos curiosos y profundizar en el
              universo de Gintama. La wiki está hecha con la pasión de la
              comunidad, por lo que su contenido refleja el esfuerzo
              colaborativo de los aficionados.
            </p>

            <p className="nosotros__parrafo">
              Además, Yorozuya-Wiki ofrece una experiencia interactiva a sus
              usuarios registrados. Quienes cuenten con una cuenta en la
              plataforma tienen la posibilidad de crear sus propios personajes,
              añadiendo sus historias y características al universo de Gintama.
              No solo pueden crear, sino también editar y borrar los personajes
              que han diseñado, ofreciendo una flexibilidad creativa y dinámica
              que enriquece aún más la experiencia de los fans dentro de la
              comunidad.
            </p>
          </div>

          <img
            src="/gintama.webp"
            alt="Grupo Yorozuya"
            loading="lazy"
            className="nosotros__img"
          />
        </div>
      </section>
    </>
  );
}

export default Nosotros;
