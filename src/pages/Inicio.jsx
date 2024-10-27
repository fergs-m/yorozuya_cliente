import React from "react";
import { useRef } from "react";
import Nosotros from "../components/Nosotros";

//La página inicio contiene un acordeón con la información principal del anime, además de tener una 
//sección sobre el fandom creados de la página.

function Inicio() {
  //Con useRef estoy seleccionando el elemento que modificaré sin tener que usar document.getelement
  const paRef = useRef();
  const parraRef = useRef();
  const parrafoRef = useRef();
  const mRef = useRef();
  const maRef = useRef();
  const masRef = useRef();

  // Estas tres funciónes permiten agregar toggle a los párrafos para que una vez que se le de click al título
  //aparezca o desaparezca el párrafo. Además, se adiciona y remueve con toggle una animación al símbolo +

  function muestrate() {
    paRef.current.classList.toggle("mostrar");
    mRef.current.classList.toggle("rotar");
  }

  function muestraOtro() {
    parraRef.current.classList.toggle("mostrar");
    maRef.current.classList.toggle("rotar");
  }

  function muestraUltimo() {
    parrafoRef.current.classList.toggle("mostrar");
    masRef.current.classList.toggle("rotar");
  }

  return (
    <>
      <div className="contenedor">
        <div className="inicioInico">
          <h2 className="inicioInico__titulo">
            Bienvenidos a Yorozuya-WIki!
          </h2>

          <p className="inicioInico__parrafo">
            A continuación, te dejamos información detallada sobre el anime
            Gintama, una serie conocida por su mezcla única de acción, comedia y
            referencias culturales. Aquí podrás descubrir más sobre sus
            personajes, arcos argumentales y momentos icónicos que han hecho de
            Gintama una obra de culto entre los fanáticos del anime. ¡Sigue
            leyendo para adentrarte en el divertido y emocionante mundo de Edo!.
          </p>
        </div>

        {/* Contenedor de imagen y acordeón*/}

        <div className="inicio">
          {/* Contenedor de imagen*/}
          <div className="inicioImagen">
            <img
              src="/grupoyoro.webp"
              alt="yorozuya"
              className="inicioImagen__img"
              loading="lazy"
            />
          </div>

          {/* Contenedor acordeón*/}
          <div className="inicioContenedor">
            <div className="inicioContenedor__item">
              <div className="inicioContenedor__titulo" onClick={muestrate}>
                <h2> Gintama </h2>
                <span className="inicioContenedor__mas" ref={mRef}>
                  +
                </span>
              </div>

              <p className="inicioContenedor__parrafo" ref={paRef}>
                Creado por Hideaki Sorachi, es un anime y manga que combina
                acción, comedia, y elementos de ciencia ficción. Está ambientado
                en un Japón alternativo de la era Edo, donde los alienígenas
                (Amanto) han invadido la Tierra. Como resultado, el gobierno
                japonés se ha vuelto sumiso, prohibiendo a los samuráis portar
                espadas y prácticamente eliminando el estilo de vida samurái.
              </p>
            </div>

            <div className="inicioContenedor__item">
              <div className="inicioContenedor__titulo" onClick={muestraOtro}>
                <h2> Sinopsis </h2>
                <span className="inicioContenedor__mas" ref={maRef}>
                  +
                </span>
              </div>

              <p className="inicioContenedor__parrafo" ref={parraRef}>
                Gintoki Sakata es un ex samurái que junto a Shinpachi Shimura,
                quien sigue los ideales de los samuráis, y Kagura, una chica
                alienígena de fuerza sobrehumana, forman un trío conocido como
                Yorozuya. Ofrecen sus servicios para realizar cualquier tipo de
                trabajo a cambio de dinero, aunque suelen terminar involucrados
                en problemas y aventuras.
              </p>
            </div>

            <div className="inicioContenedor__item">
              <div className="inicioContenedor__titulo" onClick={muestraUltimo}>
                <h2> Temporadas</h2>
                <span className="inicioContenedor__mas" ref={masRef}>
                  +
                </span>
              </div>

              <p className="inicioContenedor__parrafo" ref={parrafoRef}>
                Producida por el estudio Sunrise tiene un total de 367
                episodios, distribuidos en 8 temporadas emitidas entre el año
                2006 y el 2018. Además, cuenta con una película llamada:
                “Gintama: The Final (2021)”.
              </p>
            </div>
          </div>
        </div>
        <Nosotros />
      </div>
    </>
  );
}

export default Inicio;
