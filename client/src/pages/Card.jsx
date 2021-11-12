import React from "react";
import { Helmet } from "react-helmet"; 

function Card() {
    return (
      <>
        <Helmet title="Mi perfil" />
        <div>
            <h3>Mi Perfil</h3>
            <h4>Foto de perfil</h4>
            <input type="submit" value="Editar" />
            <h4>Nombre:</h4>
            <h4>Apellido:</h4>
            <h4>Edad:</h4>
            <h4>Acerca de mi:</h4>
            <h4>Intereses:</h4>


        </div>
      </>
    );
  }

export default Card;
