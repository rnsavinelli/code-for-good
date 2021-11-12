import React from "react";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet"; 

function Card() {
    return (
      <>
        <Helmet title="Mi perfil" />
        <Container>
      
        <div className="mx-auto mt-5">
        <div>
            <h3>Mi Perfil</h3>
            <p>Foto de perfil</p>
            <input type="submit" value="Editar" />
         
            <p>Nombre:</p>
            <p>Apellido:</p>
            <p>Edad:</p>
            <p>Acerca de mi:</p>
            <p>Intereses:</p>


        </div>
        </div>
    
      </Container>
      </>
    );
  }

export default Card;
