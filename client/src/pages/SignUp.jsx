import React from "react";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet title="Registrarse" />
      <Container>
        <div className="mx-auto mt-5">
          <form
            method="POST"
            action="http://localhost:5000/users"
            target="_blank"
          >
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                placeholder="Marcos"
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Apellido
              </label>
              <input
                name="surname"
                placeholder="Perez"
                type="text"
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Edad
              </label>
              <input
                name="age"
                placeholder="18"
                type="number"
                className="form-control"
                id="validationCustom02"
                min="16"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Telefono
              </label>
              <input
                name="tel_number"
                placeholder="1199990000"
                type="tel"
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group ">
                <input
                  name="email"
                  type="email"
                  placeholder="yo@ejemplo.com"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                Provincia
              </label>
              <input
                name="location"
                placeholder="Misiones"
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="mb-3">
              <label for="validationTextarea" class="form-label">
                Descripción General
              </label>
              <textarea
                name="general_description"
                class="form-control"
                id="validationTextarea"
                placeholder="Una descripción general..."
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="validationTextarea" class="form-label">
                Experencia
              </label>
              <textarea
                name="experience"
                class="form-control"
                id="validationTextarea"
                placeholder="Experiencia laboral..."
                required
              ></textarea>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom04" class="form-label">
                Terminé el secundario
              </label>
              <select
                name="graduated"
                class="form-select"
                id="validationCustom04"
                required
              >
                <option selected value="1">
                  Sí
                </option>
                <option value="0">No</option>
              </select>
            </div>
            <input
              name="degree_id"
              placeholder="Misiones"
              className="form-control d-none"
              id="validationCustom03"
              value="1"
            />
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
