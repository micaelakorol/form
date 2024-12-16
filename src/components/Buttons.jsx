import { Button } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <>
      <Button variant="contained" color="success" size="small" type="submit">
        Registrarse
      </Button>
      <Button variant="outlined" color="success" size="small">
        Iniciar sesión
      </Button>
    </>
  );
};

export default Buttons;
