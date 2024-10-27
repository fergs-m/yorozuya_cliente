import React from "react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

//En esta página se editan los datos de los personajes ya creados. Permite editar desde el cliente-servidor-base de datos
//y que los cambios queden modificados en la base de datos. 

function EditaTuPersonaje() {
  //Variables ref
  let nombreRef = useRef();
  let edadRef = useRef();
  let nacimientoRef = useRef();
  let razaRef = useRef();
  let descripcionRef = useRef();
  let fraseRef = useRef();

  let { id } = useParams();

  const dirigir = useNavigate();

  let {VITE_PERSONAJES} = import.meta.env;

  useEffect(() => {
    axios
      .get(VITE_PERSONAJES + "/cualesPersonajes/" + id)
      .then((resultados) => {
        nombreRef.current.value = resultados.data.nombre;
        edadRef.current.value = resultados.data.edad;
        nacimientoRef.current.value = resultados.data.nacimiento;
        razaRef.current.value = resultados.data.raza;
        descripcionRef.current.value = resultados.data.descripcion;
        fraseRef.current.value = resultados.data.frase;
      });
  }, []);

  function editarInfo(e) {
    e.preventDefault();

    let infoEnviar = {
      //se le debe decir que objetos se quieren actialuzar
      id_personaje: id,
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
      nacimiento: nacimientoRef.current.value,
      raza: razaRef.current.value,
      descripcion: descripcionRef.current.value,
      frase: fraseRef.current.value,
    };

    axios.put(VITE_PERSONAJES, infoEnviar).then((resolucion) => {
      if (resolucion.data.mensaje == "Ok") {
        dirigir("/misPersonajes");
      }
    });
  }

  return (
    <>
      <div className="formEditar">
        <h2 className="formEditar__titulo"> Editar Tus personajes </h2>

        <p className="formEditar__parrafo">
          ¡Personaliza a tus personajes de Gintama como nunca antes! Ahora
          tienes la posibilidad de editar cada aspecto de los personajes que has
          creado en nuestra plataforma, desde su apariencia y vestimenta hasta
          sus habilidades y estilos de combate. Explora las diferentes opciones
          y haz que tus personajes favoritos reflejen tu propio estilo.
          ¡Diviértete moldeando a tus héroes y villanos en el universo de
          Gintama y crea historias únicas!.
        </p>

        <div className="formEditar__contenedor">
          <form
            action="#"
            method="post"
            name="formulario editar"
            className="formEditar__formulario"
            onSubmit={editarInfo}
          >
            <label htmlFor="nomb"> Nombre personaje:</label>
            <input type="text" name="nombre" id="nomb" ref={nombreRef} />
            <br />
            <label htmlFor="agee"> Edad: </label>
            <input type="text" name="edad" id="agee" ref={edadRef} />
            <br />
            <label htmlFor="naci"> Fecha nacimiento:</label>
            <input
              type="text"
              name="nacimiento"
              id="naci"
              ref={nacimientoRef}
            />
            <br />
            <label htmlFor="ra"> Raza:</label>
            <input type="text" name="raza" id="ra" ref={razaRef} />
            <br />
            <label htmlFor="des"> Descripción: </label>
            <textarea
              name="descripcion"
              id="des"
              ref={descripcionRef}
            ></textarea>
            <br />
            <label htmlFor="fras"> Frase: </label>
            <textarea name="frase" id="fras" ref={fraseRef}></textarea>
            <br />
            <input
              type="submit"
              value="Editar Personaje"
              className="formEditar__submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default EditaTuPersonaje;
