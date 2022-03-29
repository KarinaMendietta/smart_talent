import React from "react";
import { Stack, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";

const FormAcademico = () => { 
    return (
    <FormControl container sx={{display: 'flex', justifyContent:"center"}}>
      <h1>Formulario academico</h1>
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
          name="profesion"
          label="Profesión"
          type="text"
          variant="filled"
        />
        <TextField
          name="lugarEstudios"
          label="Lugar de estudios"
          type="text"
          variant="filled"
        />
        <TextField
          name="fechaEgreso"
          label="Fecha de egreso"
          type="text"
          variant="filled"
        />
        
    </Stack>
    </FormControl>
  );
}
       
export default FormAcademico;