import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { UsuarioProvider } from "./Context/UsuarioContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FallBackSuspense from "./components/FallBackSuspense";
import RutaPrivada from "./RutaPrivada";
import Inicio from "./pages/Inicio";
import Playlist from "./pages/Playlist";
import Personajes from "./pages/Personajes";
import Imagenes from "./pages/Imagenes";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MisPersonajes from "./pages/MisPersonajes";
import MisNuevosPersonajes from "./pages/MisNuevosPersonajes";
import EditaTuPersonaje from "./pages/EditaTuPersonaje";
import BorrarTuPersonaje from "./pages/BorrarTuPersonaje";
import "./css/inicioPlaylist.css";
import "./css/loginLogout.css";
import "./css/personajes.css";
import "./css/editarBorrar.css";
import "./css/imagenes.css";
import "./css/style.css";

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <UsuarioProvider>
        <Header />

        <main>
          <Suspense fallback={<FallBackSuspense />}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/personajes" element={<Personajes />} />
              <Route path="/imagenes" element={<Imagenes />} />
              <Route
                path="/misPersonajes"
                element={<RutaPrivada RutaQueMostrar={<MisPersonajes />} />}
              />
              <Route
                path="/nuevoPersonaje"
                element={
                  <RutaPrivada RutaQueMostrar={<MisNuevosPersonajes />} />
                }
              />
              <Route
                path="/editarPeronaje/:id"
                element={<RutaPrivada RutaQueMostrar={<EditaTuPersonaje />} />}
              />
              <Route
                path="/borrarPersonaje/:id"
                element={<RutaPrivada RutaQueMostrar={<BorrarTuPersonaje />} />}
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/logout"
                element={<RutaPrivada RutaQueMostrar={<Logout />} />}
              />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </UsuarioProvider>
    </Router>
  </>
);
