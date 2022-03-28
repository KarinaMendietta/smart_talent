import React from "react";
import { Stack, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";

const FormPostulante = () => { 
    return (
        <FormControl>
        <h1>Formulario de datos</h1>

        <Stack 
      component="form"
      sx={{
        width: '500px',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField  
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Nombre"
        variant="filled"
        
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Apellido"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Dni"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Correo"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Fecha de nacimiento"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Genero"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Paid de nacimiento"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Numero de celular"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Telefono fijo"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Departamento"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Provincia"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Distrito"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Direccion"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Estado"
        variant="filled"
      />
    </Stack>
    </FormControl>
  );
}

export default FormPostulante;
