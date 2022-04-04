import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Select, MenuItem, Stack, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Container } from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";
//import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes,registerLaboral } from "../../service/firestore";
//import swal from "sweetalert";

const FormLaboral = () => {  
  const [values,setValues] = useState({
    id_postulante:"",
    nombre_empresa:"",
    ruc:"",
    telefono:"",
    direccion:"",
    cargo_desempenho:"",
    fecha_inicio:"",
    fecha_termino:"",
    breve_descripcion_actividad:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickRegister = async () => {
      await registerLaboral(1,values)
  }

  const [Fecha, setFecha] = useState(null);
      
  const handleChange = (event) => {
    setFecha(event.target.value);
  };

  return (
    <Container maxWidth="lg" >
      <form >
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
                onChange={handleInputChange}
            />
            <TextField
                name="ruc"
                label="RUC"
                type="text"          
                variant="filled"
                onChange={handleInputChange}
            />
            <TextField
                name="telefono"
                label="Telefono"
                type="text"          
                variant="filled"
                onChange={handleInputChange}
                
            />
            <TextField
                name="direccion"
                label="Direccion"
                type="text"          
                variant="filled"
                onChange={handleInputChange}
            />
            <TextField
                name="cargo_desempenho"
                label="Cargo que Desempeño"
                type="text"          
                variant="filled"
                onChange={handleInputChange}
            />            
            <Box  >
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}  
              label="Fecha Inicio"
              value={Fecha}
              onChange={(newFecha) => {
                setFecha(newFecha);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
            <Box  >
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}  
              label="Fecha Termino"
              value={Fecha}
              onChange={(newFecha) => {
                setFecha(newFecha);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
          <TextField
                name="breve_descripcion_actividad"
                label="Descripcion Actividad (Breve)"
                type="text"          
                variant="filled"
                onChange={handleInputChange}
          />
          <Button onClick={handleClickRegister} variant="contained">
            Guardar
          </Button>    

        </Stack>
        <TextButtons />
      </form>
    </Container> 

  )

    
}

export const TextButtons = () => {
    return (
      <Link to="/form-psicologico">
        <Stack direction="row" spacing={2}>
          <Button  href="#text-buttons">Siguiente</Button>
        </Stack>
      </Link>
    );
  };
export default FormLaboral;