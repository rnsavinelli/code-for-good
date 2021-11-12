import React from "react";
import { Helmet } from "react-helmet";
// import { makeStyles } from '@mui/styles/makeStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from "@mui/material";
// import { withStyles } from '@mui/styles/withStyles';
import LoginBtn from '../components/LoginBtn.js';
import SignUpBtn from '../components/SignUpBtn.js';
import bg from "../assets/bg.png";

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`
//   }
// }));

function Landing() {
  return (
    
    <div className="landing">

      {/* <Helmet title="Inicio" /> */}
      
      <ThemeProvider theme ={theme}>
        <LoginBtn/>
        <SignUpBtn/>
      </ThemeProvider>

      <style>
        
      </style>

        <a class="navbar-brand" href="#">App Name</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Demo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
    
        </div>
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