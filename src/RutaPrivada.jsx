import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UsuarioContext } from './Context/UsuarioContext'

function RutaPrivada({RutaQueMostrar}) {

    const {usuario} = useContext(UsuarioContext);



    //si el usuario en nulo me redirige a login para que acceda, si no es nulo me muestra la página privada
  return (
    <>

    {usuario == null ? <Navigate to={'/login'}/> : RutaQueMostrar }
    
    </>
  )
}

export default RutaPrivada
