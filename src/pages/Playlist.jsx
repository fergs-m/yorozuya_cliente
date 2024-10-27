import React from "react";
import Youtube from "react-youtube"; //paquete que em permite usar listas de youtube
import { GiMusicalNotes } from "react-icons/gi";

//Esta página incluye el reproductor de youtube para mostrar openings y endigs del anime. 

function Playlist() {
  const playlistYoutube = "PLTGXZPSNXuQG3En31jcQfMNwhlQQBx5gM"; //id de la playlist sacada del URL

  //opciones que me permite ir modificando la playlist
  const options = {
    playerVars: {
      listType: "playlist",
      list: playlistYoutube,
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="playlist">
        <h2 className="playlist__titulo"> Openings y Endings </h2>

        <p className="playlist__parrafo">
          La Banda Sonora de Gintama está compuesta de una serie de canciones de
          apertura y cierre de los episodios (Opening y Ending), pertenecientes
          a grupos conocidos en Japón para la versión original. La banda sonora
          de Gintama es compuesta por Audio Highs y es publicada por Aniplex.
        </p>

        <p className="playlist__parrafo">
          Sumérgete junto a nosotros en el mundo de Gintama con nuestra playlist
          especial! <GiMusicalNotes />
          Disfruta de todos los openings y endings de la serie en un solo lugar,
          y revive los momentos más icónicos a través de su increíble música.
          Desde temas llenos de energía hasta melodías emotivas, cada canción te
          transportará al universo de Gintama y a las aventuras de tus
          personajes favoritos. ¡Dale play y deja que la música te lleve de
          regreso a Edo junto a Gintoki y su equipo!
        </p>

        <div className="playlist__video">
          {/* Este me permite ver el reproductor de video en la página junto con los ajustes de options */}
          <Youtube opts={options} />
        </div>
      </div>
    </>
  );
}

export default Playlist;
