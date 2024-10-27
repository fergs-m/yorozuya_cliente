import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../Context/UsuarioContext";
import { Link } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import { BsMusicPlayer } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { PiEyeglasses } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";

//Este componente contiene dos header, uno es el que esta en pantallas grandes, y el otro es un header cortina
//que aparece cuando el ancho de la página es menor a 1240px.
function Header() {
  const { usuario } = useContext(UsuarioContext);
  const cortinaRef = useRef();
  //Con useRef estoy seleccionando el elemento que modificaré sin tener que usar document.getelement

  //EVENTOS DE JAVASCRIPT

  //Esta función me permite que aparezca el menú cortina
  function holaCortina() {
    cortinaRef.current.style.width = "55%";
    document.getElementById("lista").classList.remove("desaparece"); //Remueve la clase 'desaparece' creada en css
    document.getElementById("lista").classList.add("aparece");//Añade la clase 'aparece' creada en css
  }

  //Esta función me permite que desaparezca el menú cortina
  function adiosCortina() {
    cortinaRef.current.style.width = "0%";
    document.getElementById("lista").classList.add("desaparece"); //Adhiere la clase 'desaparece creada en css'
    document.getElementById("lista").classList.remove("aparece");//Remueve la clase 'aparece' creada en css
  }

  return (
    <>
      {/* Header principal */}

      <header className="header">
        <h1 className="header__logo"> Yorozuya-Wiki</h1>

        <nav className="header__nav">
          <button
            type="button"
            className="header__barras header__barras--desaparece"
            name="boton barras"
            onClick={holaCortina}
          >
            &#9776;
          </button>

          <ul className="header__listas">
            <li className="header__elementoLista">
              <Link to={"/"} className="header__link">
                <RiHomeHeartLine /> Inicio
              </Link>
            </li>

            <li className="header__elementoLista">
              <Link to={"/personajes"} className="header__link">
                <PiEyeglasses /> Personajes
              </Link>
            </li>

            <li className="header__elementoLista">
              <Link to={"/imagenes"} className="header__link">
                <AiOutlinePicture /> Imagenes
              </Link>
            </li>

            {/*LOGIN: si usuario es nulo que me lleve a login, si está, que muestre el nombre del usuario */}
            {usuario == null ? (
              <li className="header__elementoLista">
                <Link to={"/login"} className="header__link">
                  <LuUser2 /> Login
                </Link>
              </li>
            ) : (
              <>
                <li className="header__usuario">{usuario} </li>
              </>
            )}

            {/*PERSONAJES: si usuario distinto de nulo que me lleve a mis personajes, si es nulo, que no muestre nada */}
            {usuario != null ? (
              <li className="header__elementoLista">
                <Link to={"/misPersonajes"} className="header__link">
                  Mis Personajes
                </Link>
              </li>
            ) : (
              <> </>
            )}

            {/*LOGOUT: si usuario distinto de nulo que me lleve a logout, si está, que no muestre nada */}
            {usuario != null ? (
              <li className="header__elementoLista">
                <Link to={"/logout"} className="header__link">
                  Cerrar Sesión
                </Link>
              </li>
            ) : (
              <> </>
            )}

            <li className="header__elementoLista">
              <Link to={"/playlist"} className="header__link">
                <BsMusicPlayer /> Playlist
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header cortina que aparece en responsive*/}

      <div className="headerCortina" ref={cortinaRef}>
        <div className="headerCortina__contenedor" id="lista">
          <button
            type="button"
            className="headerCotina__botonX"
            name="boton X"
            onClick={adiosCortina}
          >
            &times;
          </button>

          <nav className="headerCortina__nav">
            <ul className="headerCortina__listas">
              <li className="headerCortina__elementoLista">
                <Link to={"/"} className="headerCortina__link">
                  <RiHomeHeartLine /> Inicio
                </Link>
              </li>

              <li className="headerCortina__elementoLista">
                <Link to={"/personajes"} className="headerCortina__link">
                  <PiEyeglasses /> Personajes
                </Link>
              </li>

              <li className="headerCortina__elementoLista">
                <Link to={"/imagenes"} className="headerCortina__link">
                  <AiOutlinePicture /> Imagenes
                </Link>
              </li>

              {/*LOGIN: si usuario es nulo que me lleve a login, si está, que muestre el nombre del usuario */}
              {usuario == null ? (
                <li className="headerCortina__elementoLista">
                  <Link to={"/login"} className="headerCortina__link">
                    <LuUser2 /> Login
                  </Link>
                </li>
              ) : (
                <>
                  <li className="headerCortina__usuario">{usuario} </li>
                </>
              )}

              {/*PERSONAJES: si usuario distinto de nulo que me lleve a mis personajes, si es nulo, que no muestre nada */}
              {usuario != null ? (
                <li className="headerCortina__elementoLista">
                  <Link to={"/misPersonajes"} className="headerCortina__link">
                    Mis Personajes
                  </Link>
                </li>
              ) : (
                <> </>
              )}

              {/*LOGOUT: si usuario distinto de nulo que me lleve a logout, si está, que no muestre nada */}
              {usuario != null ? (
                <li className="headerCortina__elementoLista">
                  <Link to={"/logout"} className="headerCortina__link">
                    Cerrar Sesión
                  </Link>
                </li>
              ) : (
                <> </>
              )}

              <li className="headerCortina__elementoLista">
                <Link to={"/playlist"} className="headerCortina__link">
                  <BsMusicPlayer /> Playlist
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
