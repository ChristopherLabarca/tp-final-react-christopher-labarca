import React from "react";
export default function Error() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "white" }}>404 Not Found</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <img
        src="https://www.checkupdown.com/wp-content/uploads/2023/12/pasted-image-0-2023-12-21T171213.083.png"
        alt="Error 404"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}
