import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//Esta página contiene un div en el cual se pregunta al usuario si esta seguro de borra el persoanje,
//si hace click en si, se borrar el personaje en la bese de datos.

function BorrarTuPersonaje() {
  let { id } = useParams(); //para poder usar la id del personaje

  let dirigir = useNavigate(); //redirigir a la ruta deseada

  const { VITE_PERSONAJES } = import.meta.env; //importación de ruta del documento env.

  function noBorrar() {
    dirigir("/misPersonajes");
  }

  function siBorrar() {
    //Borra el personaje de la base de datos

    axios.delete(VITE_PERSONAJES + "/" + id).then((respuesta) => {
      if (respuesta.data.respuesta == "Ok") {
        //si ambas respuestas coinciden, se borra el personaje y redirige a mis personajes.
        dirigir("/misPersonajes");
      }
    });
  }

  return (
    <>
      <div className="borrar">
        <div className="borrar__contenedor">
          <h2 className="borrar__titulo">
            ¿Estás seguro que deseas borrar a este personaje?{" "}
          </h2>

          <img
            src="/kagura-borrar.gif"
            alt="sadaharu triste"
            className="borrar__gif"
          />

          <div className="borrar__botones">
            <button
              type="button"
              name="boton no borrar"
              onClick={noBorrar}
              className="borrar__boton"
            >
              No
            </button>

            <button
              type="button"
              name="boton si borrar"
              onClick={siBorrar}
              className="borrar__boton"
            >
              Si
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BorrarTuPersonaje;
