import React from "react";
import {Select, MenuItem, Stack, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";

const FormLaboral = () => {
    return (
        <FormControl container sx={{display: 'flex', justifyContent:"center"}}>
        <h1>Formulario Laboral</h1>
            &nbsp;&nbsp;
            
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
                name="nombre_empresa"
                label="Nombre Empresa"
                type="text"          
                variant="filled"      
            />
            <TextField
                name="ruc"
                label="RUC"
                type="text"          
                variant="filled"
            />
            <TextField
                name="telefono"
                label="Telefono"
                type="text"          
                variant="filled"
            />
            <TextField
                name="direccion"
                label="Direccion"
                type="text"          
                variant="filled"
            />
            <TextField
                name="cargo_desempenho"
                label="Cargo que Desempeño"
                type="text"          
                variant="filled"
            />
            <TextField
                name="fecha_inicio"
                label="Fecha Inicio"
                type="text"          
                variant="filled"
            />
            <TextField
                name="fecha_termino"
                label="Fecha Termino"
                type="text"          
                variant="filled"
            />
            <TextField
                name="breve_descripcion_actividad"
                label="Descripcion Actividad (Breve)"
                type="text"          
                variant="filled"
            />    

            </Stack>
    </FormControl> 

    )

    
}

export default FormLaboral;