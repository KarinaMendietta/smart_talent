import React from "react";
import {Select, MenuItem, Stack, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";

const FormPostulante = () => { 
    return (
      <FormControl container sx={{display: 'flex', justifyContent:"center"}}>
      <h1>Formulario de datos</h1>
      <Stack
        component="form"
        sx={{
          width: "500px",
          margin: "0 auto",
          background:'#fff',
          padding:'2rem', 
          borderRadius:'1rem'
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="nombre"
          label="Nombre"
          type="text"          
          variant="filled"      
        />
        <TextField
          name="apellido"
          label="Apellido"
          type="text"          
          variant="filled"
        />
        <TextField
          name="dni"
          label="Dni"
          type="text"          
          variant="filled"
        />
        <TextField
          name="correo"
          label="Correo"
          type="mail"          
          variant="filled"
        />
        <TextField
          name="fechaDeNacimiento"
          label="Fecha de nacimiento"
          type="text"          
          variant="filled"
        />
        <TextField
          name="genero"
          label="Genero"
          type="text"          
          variant="filled"
        />
        <TextField
          name="PaisDeNacimiento"
          label="Pais de nacimiento"
          type="text"          
          variant="filled"
        />
        <TextField
           name="celular"
           label="Celular"
           type="text"          
           variant="filled"
        />
        <TextField
          name="departamento"
          label="Departamento"
          type="text"          
          variant="filled"
        />
        <TextField
          name="provincia"
          label="Provincia"
          type="text"          
          variant="filled"
        />
        <TextField
          name="distrito"
          label="Distrito"
          type="text"          
          variant="filled"
        />
        <TextField
          name="direccion"
          label="Direccion"
          type="text"          
          variant="filled"
        />
      </Stack>
    </FormControl>
  );
}

export default FormPostulante;
