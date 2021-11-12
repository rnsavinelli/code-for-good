import React from "react";
import { Helmet } from "react-helmet";
import Fe from '../assets/imagennav.png';
// import { makeStyles } from '@mui/styles/makeStyles'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from "@mui/material";
// import { withStyles } from '@mui/styles/withStyles';
// import LoginBtn from '../components/LoginBtn.js';
// import SignUpBtn from '../components/SignUpBtn.js';
// import bg from "../assets/bg.png";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main:"#2e1667",
//     },
//     secondary: {
//       main:"#c7d8ed",
//     },
//   },
//   typography: {
//     fontFamily: [
//       'Roboto'
//     ],
//     h4: {
//       fontWeight: 600,
//       fontSize: 28,
//       lineHeight: '2rem',
//       },
//     h5: {
//       fontWeight: 100,
//       lineHeight: '2rem',
//     },
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`
//   }
// }));

function Landing() {
  return (
    
    <div className="landing">

      <Helmet title="Inicio" />
      
 

      <main id="hero">
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={Fe}
                        class="d-block mx-lg-auto img-fluid" alt="fe y alegria" width="700" height="500"
                        loading="lazy"></img>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Fe y alegria.</h1>
                    <p class="lead">Somos un Movimiento Internacional de Educación Popular y Promoción Social que impulsa desde, con y para las comunidades en las que trabaja, procesos educativos integrales, inclusivos y de calidad, comprometiéndose en la transformación de las personas para construir sistemas sociales justos y democráticos.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Registrate</button>
                        <button type="button" class="btn btn-outline-primary btn-lg px-4">Sobre nosotros</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    </div>
  )
}

// function Landing() {
//   const classes = useStyles();
//   return (
//     <>
//       <Helmet title="Inicio" />

//       <div className={classes.root}>
//         Hello World!
//       </div>
//     </>
//   );
// }

export default Landing;