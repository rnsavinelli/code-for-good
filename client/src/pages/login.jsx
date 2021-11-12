import React from 'react';
 import Container from "@mui/material/Container"; 
import { Helmet } from "react-helmet"; 

function Login () {
    return (
        <>
             <Helmet title="Ingresar" />
             <Container>
              <div className="mx-auto mt-5">
                  
                <h3> Ingresa acá! </h3>
                <label for="email"><i class="fas fa-user "></i> Email:</label><br />
                <input type="text" name="email" id="email" placeholder="juan@ejemplo.com"/><br/>
                <label for="password"><i class=" fas fa-key "></i> Password:</label><br/>
                <input type="password" name="password" id="password" placeholder=""/><br/>
         
                <input type="submit" value="Ingresa" />
                <label for=""></label><br />
                <input type="checkbox" name="recordarme" />
                <label for="">Recordarme</label>
            </div>
            </Container>
        </>
       
      
         
        );
    
}
 
export default Login;

