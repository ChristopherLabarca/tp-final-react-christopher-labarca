import React from "react";
export default function Error() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "white" }}>Ups, Error 404 Not Found</h1>
      <p>Algo ha sucedido, Lo sentimos, Ocurrio un error, la página que estás buscando no existe.</p>
      <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
      <img
        src="https://www.checkupdown.com/wp-content/uploads/2023/12/pasted-image-0-2023-12-21T171213.083.png"
        alt="Error 404"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}
