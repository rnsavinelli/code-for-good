import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UseSession from "../../api/UseSession";

function Navbar() {
  const [isLogged, setIsLogged] = useState(UseSession());

  useEffect(() => {
    setIsLogged(UseSession());
  }, [isLogged]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fe y Alegría
          </Typography>

          {!isLogged ? (
            <Button color="inherit" href="../login">
              Iniciar Sesión
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsLogged(false);
                localStorage.setItem("session", "false");
              }}
            >
              Cerrar Sesión
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
