import React from "react";
import { useContext } from "react";
import { UsuarioContext } from "../Context/UsuarioContext";
import { redirect, useNavigate } from "react-router-dom";

//Aquí se le pregunta al usuario si está seguro de cerrar sesión para que no se cierre por equivocación.

function Logout() {
  const { logout } = useContext(UsuarioContext);

  const dirigir = useNavigate();

  //Funciones de Javascript
  function noSalir() {
    dirigir("/");
  }

  function siSalir() {
    logout();
    redirect("logout");
  }

  return (
    <>
      <div className="logout">
        <div className="logout__contenedor">
          <h2 className="logout__titulo">
            ¿Estás seguro que deseas cerrar sesión?
          </h2>

          <img
            src="/sadaharu-triste.webp"
            alt="sadaharu triste"
            className="logout__gif"
          />

          <div className="logout__botones">
            <button
              type="button"
              name="boton no"
              onClick={noSalir}
              className="logout__boton"
            >
              No
            </button>

            <button
              type="button"
              name="boton si"
              onClick={siSalir}
              className="logout__boton"
            >
              Si
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
