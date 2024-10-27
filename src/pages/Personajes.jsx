import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

//Aqui se muestran los personajes que han creados los usuarios. A través de axios se genera una petición al servidor para
//traer los datos desde la base de datos y mostrarlos en la página.

function Personajes() {
  const [todosPersonajes, setTodosPersonajes] = useState([]);
  const { VITE_PERSONAJES } = import.meta.env;

  useEffect(() => {
    axios.get(VITE_PERSONAJES).then((resultados) => {
      // console.log(resultados.data)
      setTodosPersonajes(resultados.data);
    });
  }, []);

  return (
    <>
      <div className="todosPersonajes">
        <h2 className="todosPersonajes__titulo"> Personajes </h2>

        <p className="todosPersonajes__parrafo">
          Aquí te mostramos los personajes creados por los usuarios de nuestra
          página. Únete a nuestra comunidad y crea el tuyo!{" "}
        </p>

        <div className="todosPersonajes__contenedor">
          {todosPersonajes.map((personaje) => {
            return (
              <div
                key={personaje.id_personaje}
                className="todosPersonajes__div"
              >
                <h3> {personaje.nombre} </h3>
                <p>
                  <span> Edad: </span> {personaje.edad}
                </p>
                <p>
                  <span>Nacimiento: </span> {personaje.nacimiento}
                </p>
                <p>
                  <span> Raza: </span>
                  {personaje.raza}
                </p>
                <p className="todosPersonajes__info">
                  <span> Descripción: </span>
                  {personaje.descripcion}
                </p>
                <p className="todosPersonajes__info">
                  <span> Frase:</span> {personaje.frase}
                </p>
                <p>
                  <span> Creado por: </span> {personaje.usuario_escritor}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Personajes;
