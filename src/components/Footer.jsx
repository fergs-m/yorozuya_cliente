import React from "react";
import { Link } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import { BsMusicPlayer } from "react-icons/bs";
import { PiEyeglasses } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";

//Aquí se encuentra el componente del footer que estara en main para que así aparezca en todas las páginas.
//Este footer tambièn te reedirige a las rutas deseadas. 

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__contenedor">
          <h1 className="footer__logo"> Yorozuya-Wiki</h1>

          <ul className="footer__lista">
            <li className="footer__elementoLista">
              <Link to={"/"} className="footer__link">
                <RiHomeHeartLine /> Inicio
              </Link>
            </li>
            <li className="footer__elementoLista">
              <Link to={"/personajes"} className="footer__link">
                <PiEyeglasses /> Personajes
              </Link>
            </li>
            <li className="footer__elementoLista">
              <Link to={"/imagenes"} className="footer__link">
                <AiOutlinePicture /> Imagenes
              </Link>
            </li>
            <li className="footer__elementoLista">
              <Link to={"/playlist"} className="footer__link">
                <BsMusicPlayer /> Playlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__contenedorPie">
          <div className="footer__vacio"> </div>

          <ul className="footer__otrasListas">
            <li className="footer__listaPie">Todos los derechos reservados</li>
            <li className="footer__listaPie">Aviso legal</li>
            <li className="footer__listaPie">Privacidad</li>
            <li className="footer__listaPie">Cookies</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
