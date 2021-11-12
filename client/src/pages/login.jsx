import React from 'react';
import { Helmet } from "react-helmet"; 

function Login () {
    return (
        <div>
             <Helmet title="Ingresar" />
              <h3> Ingresa acá! </h3>
              <label for="email"><i class="fas fa-user "></i> Email:</label>
              <input type="text" name="email" id="email" placeholder="juan@ejemplo.com"/>
              <label for="password"><i class=" fas fa-key "></i> Password:</label>
              <input type="password" name="password" id="password" placeholder=""/>
         
              <input type="submit" value="Ingresa" />
                <label for="">Ingresar</label>
              <input type="checkbox" name="recordarme" />
                <label for="">Recordarme</label>
        </div>

        )
    
}
 
export default Login;

