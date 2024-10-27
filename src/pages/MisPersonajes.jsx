import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../Context/UsuarioContext";

//Aquí se obtienen los personajes creados por un usuario en concreto.
function MisPersonajes() {
  const [misPersonajes, setMisPersonajes] = useState([]);
  const { usuario } = useContext(UsuarioContext);
  const { VITE_PERSONAJES } = import.meta.env;

  useEffect(() => {
    //me ayudará a que dependiendo del usuario en el que esta me traiga los personajes creados por este
    axios.get(VITE_PERSONAJES + "/" + usuario).then((resultados) => {
      // console.log(resultados.data);
      setMisPersonajes(resultados.data);
    });
  }, []);

  return (
    <>
      <div className="misPersonajes">
        <h2 className="mispersonajes__titulo"> Mis personajes </h2>

        <p className="mispersonajes__parrafo">
          Aquí puedes ver todos los personajes que has creado de Gintama. Revisa
          tu lista de creaciones personalízalos como desees. Para crear un nuevo
          personaje solo debes hacer click en
          <Link to={"/nuevoPersonaje"} className="mispersonajes__link">
            -Crear mi personaje-
          </Link>
          .
        </p>

        <div className="misPersonajes__conteendor">
          {misPersonajes.map((miPersonaje) => {
            return (
              <div
                key={miPersonaje.id_personaje}
                className="misPersonajes__card"
              >
                <h3>
                  <span> Nombre: </span> {miPersonaje.nombre}
                </h3>
                <p>
                  <span> Edad: </span> {miPersonaje.edad}
                </p>
                <p>
                  <span> Nacimiento: </span> {miPersonaje.nacimiento}
                </p>
                <p>
                  <span> Raza: </span>
                  {miPersonaje.raza}
                </p>
                <p className="misPersonajes__info">
                  <span> Descripción: </span> {miPersonaje.descripcion}
                </p>
                <p className="misPersonajes__info">
                  <span> Frase: </span>
                  {miPersonaje.frase}
                </p>

                <div className="miPersonaje__botonesDiv">
                  <button
                    type="botton"
                    name="boton editar"
                    className="misPersonajes__boton"
                  >
                    <Link
                      to={"/editarPeronaje/" + miPersonaje.id_personaje}
                      className="mipersonaje__botonLink"
                    >
                      Editar personaje
                    </Link>
                  </button>

                  <button
                    type="botton"
                    name="boton borrar"
                    className="misPersonajes__boton"
                  >
                    <Link
                      to={"/borrarPersonaje/" + miPersonaje.id_personaje}
                      className="mipersonaje__botonLink"
                    >
                      Borrar personaje
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MisPersonajes;
