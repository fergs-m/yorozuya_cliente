import React from "react";
import axios from "axios";
import { useRef, useState, useContext } from "react";
import { UsuarioContext } from "../Context/UsuarioContext";
import { useNavigate } from "react-router-dom";

//En este login se ingresaran el usuario y contraseña y a través de la conexión del servidor con el cliente se
//determinará si el usuario esta o no guardado en la base de datos.

function Login() {
  const { login } = useContext(UsuarioContext); //usar el contexto

  const [error, setError] = useState(""); //esto es para que si el usuario se equivoca en escribir contraseña o nombre, aparezca
  //abajo 'usuario o contraseña no validos'.

  const usuarioRef = useRef();
  const passRef = useRef();

  const dirigir = useNavigate();
  
  function revisarUsuario(e) {
    e.preventDefault();

    let objetoAMandar = {
      //objetos enviado a usuariosController del servidor.

      usuario: usuarioRef.current.value,
      contrasena: passRef.current.value,
    };

    axios
      .post(import.meta.env.VITE_URL_USUARIOS, objetoAMandar)
      .then((datos) => {
        if (datos.data.mensajeError == "Usuario o contraseña incorrecto") {
          //si los datos concuerdan con el mensaje de error del servidor
          //mostrar el mensaje

          setError("Usuario o contraseña incorrecto");
        } else {
          //si esta todo ok permitir entrar a la página y redireccionar a inicio

          login(datos.data.nombre);
          dirigir("/");
        }
      });
  }

  return (
    <>
      <div className="formulario">
        <div className="formulario__contenedor">
          <form action="#" method="post" onSubmit={revisarUsuario}>
            <label htmlFor="nomUsu"> Nombre de usuario:</label>
            <br />
            <input type="text" name="nombre" id="nomUsu" ref={usuarioRef} />
            <br />
            <label htmlFor="passUsu"> Contraseña: </label>
            <br />
            <input type="password" name="password" id="passUsu" ref={passRef} />
            <br />
            <input
              type="submit"
              value="Iniciar Sesión"
              className="formulario__boton"
            />
            <br />
            <p className="formulario__error"> {error} </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
