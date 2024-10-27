import React from "react";

//Este componenete se muestra mientras carga el contenido de la página. 

function FallBackSuspense() {
  return (
    <>
      <div className="suspense">
        <h1 className="suspense__titulo"> Estamos cargando su página...</h1>
        <img
          src="/suspense.webp"
          alt="sadaharu mordiendo"
          className="suspense__imagen"
        />
      </div>
    </>
  );
}

export default FallBackSuspense;
