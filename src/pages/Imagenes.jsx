import React from "react";
import { useState, useEffect } from "react";

//La página imagenes contiene las imagenes de cada personajes traidas a través de una llamada a una api creada en 
//controllers en servidor

function Imagenes() {
  const [imagenes, setImagenes] = useState([]);
  const {VITE_IMAGENES} = import.meta.env;

  useEffect(() => {
    let controller = new AbortController();
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    };

    fetch(VITE_IMAGENES, options)
      .then((res) => res.json())
      .then((data) => setImagenes(data))
      .catch((err) => console.log(err))
      .finally(() => controller.abort());
  });
  return (
    <>
      <div className="imagenes">
        <h2 className="imagenes__titulo"> Imagenes de personajes</h2>

        <p className="imagenes__parrafo">
          En esta página, podrás explorar el fascinante universo de Gintama a
          través de una selección de imágenes de sus personajes más icónicos.
          Cada imagen te acercará a las personalidades y peculiaridades que
          hacen de esta serie un clásico. ¡Sumérgete en la diversión y descubre
          quiénes son estos entrañables personajes!
        </p>

        <div className="imagenes__contenedor">
          {imagenes.map((imagen) => {
            return (
              <div key={imagen.nombre} className="imagenes__contenedorImg">
                <img
                  src={imagen.img}
                  alt="imagen personaje"
                  className="imagenes__img"
                  loading="lazy"
                />
                <h3> {imagen.nombre} </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Imagenes;
