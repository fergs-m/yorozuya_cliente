import React, { useState } from "react";
import { useRef, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UsuarioContext } from "../Context/UsuarioContext";

//Esta página permite poder crear nuevos personajes que se almacenaran en la base de datos y serán mostrados
//en la pagina de Mis personajes

function MisNuevosPersonajes() {
  //constantes ref
  const nombreRef = useRef();
  const edadRef = useRef();
  const nacimientoRef = useRef();
  const razaRef = useRef();
  const descripcionRef = useRef();
  const fraseRef = useRef();

  const { usuario } = useContext(UsuarioContext);

  const { VITE_PERSONAJES } = import.meta.env;

  const dirigir = useNavigate(); //redirige a la ruta deseada

  //funcion para parar envio de formulario y asi enviar los datos al servidor

  function crearPersonaje(e) {
    e.preventDefault();

    //información a enviar al servidor
    let infoAEnviar = {
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
      nacimiento: nacimientoRef.current.value,
      raza: razaRef.current.value,
      descripcion: descripcionRef.current.value,
      frase: fraseRef.current.value,
      usuario_escritor: usuario,
    };
    axios.post(VITE_PERSONAJES, infoAEnviar).then((resultados) => {
      if (resultados.data.insercion == "Ok") {
        dirigir("/misPersonajes");
      }
    });
  }

  return (
    <>
      <div className="formCrear">
        <h2 className="formCrear__titulo"> Crea tus personajes!</h2>

        <p className="formCrear__parrafo">
          Bienvenido creador de personajes de Gintama! Aquí tienes la
          oportunidad de diseñar tus propios personajes únicos dentro del
          universo de Gintama. Podrás personalizar cada detalle: elige su
          nombre, edad, lugar de nacimiento, raza, y crea una descripción que
          capture su esencia. Además, podrás agregar una frase característica
          que represente su personalidad o estilo. ¡Deja volar tu imaginación y
          dale vida a nuevos personajes que podrían formar parte de este icónico
          mundo de samuráis y alienígenas!.{" "}
        </p>

        <div className="formCrear__contenedor">
          <form
            action="#"
            method="post"
            name="formulario crear"
            onSubmit={crearPersonaje}
            className="formCrear__formulario"
          >
            <label htmlFor="nom"> Nombre personaje:</label>
            <input type="text" name="nombre" id="nom" ref={nombreRef} />
            <br />
            <label htmlFor="age"> Edad: </label>
            <input type="text" name="edad" id="age" ref={edadRef} />
            <br />
            <label htmlFor="nac"> Fecha nacimiento:</label>
            <input type="text" name="nacimiento" id="nac" ref={nacimientoRef} />
            <br />
            <label htmlFor="raz"> Raza:</label>
            <input type="text" name="raza" id="raz" ref={razaRef} />
            <br />
            <label htmlFor="desc"> Descripción: </label>
            <textarea
              name="descripcion"
              id="desc"
              ref={descripcionRef}
            ></textarea>
            <br />
            <label htmlFor="fra"> Frase: </label>
            <textarea name="frase" id="fra" ref={fraseRef}></textarea>
            <br />
            <input
              type="submit"
              value="Crear Personaje"
              className="formCrear__submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MisNuevosPersonajes;
