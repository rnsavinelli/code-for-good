import React from "react";
import { Helmet } from "react-helmet";

function SignUp() {
  return (
    <>
      <Helmet title="Inicio" />
      <div>
        <form>
          <label>
            Nombre:
            <input type="text" name="Nombre" />
          </label>
        </form>
        <form>
          <label>
            Apellido:
            <input type="text" name="Apellido" />
          </label>
        </form>
        <form>
          <label>
            Edad:
            <input type="text" name="Edad" />
          </label>
        </form>
        <form>
          <label>
            Ubicacion:
            <input type="text" name="Ubicacion" />
          </label>
        </form>
        <form>
          <label>
            Telefono:
            <input type="text" name="Telefono" />
          </label>
        </form>
        <form>
          <label>
            Email:
            <input type="text" name="Email" placeholder="juan@ejemplo.com" />
          </label>
        </form>
        <form>
          <label>
            Descripcion:
            <input
              type="text"
              id="Descripcion"
              name="name"
              required
              minlength="4"
              maxlength="100"
              size="100"
            />
          </label>
        </form>
        Secundario terminado
        <input type="checkbox" name="secundario" value="1" />
        <input type="submit" value="Registrarse" />
      </div>
    </>
  );
}

export default SignUp;
