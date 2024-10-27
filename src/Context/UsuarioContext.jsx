import { useState,createContext } from "react";

const UsuarioContext = createContext(); //permite crear el contexto.

const UsuarioProvider = ({children}) => {

    const [usuario, setUsuario] = useState(localStorage.getItem('usuario')); //permite guardar usuario en localStorage.

    const login = (datosUsuario) => { 

        localStorage.setItem('usuario', datosUsuario); //permite que la sesión se mantenga abierta aunque se cambie de página o se recargue.
        setUsuario(datosUsuario);

    }

    const logout = () => {

        localStorage.removeItem('usuario') //permite que aunque se cierre la aplicación la sesion quede abierta. 
        setUsuario(null);

    }

    return(
        <UsuarioContext.Provider value={{usuario, login, logout}}> 
        
            {children}

        </UsuarioContext.Provider>
    )

}

export {UsuarioContext, UsuarioProvider}