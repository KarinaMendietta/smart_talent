import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Button,
  Select,
  MenuItem,
  Stack,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
} from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";
//import { Formik } from "formik";
//import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes, registerLaboral } from "../../service/firestore";
import swal from "sweetalert";
import "../../styles/page/formEstilo.scss";

const FormLaboral = () => {
  const [idPostulante, setIDPostulante] = useState(
    localStorage.getItem("idPostulante")
  );

  const [values, setValues] = useState({
    id_postulante: "",
    nombre_empresa: "",
    ruc: "",
    telefono: "",
    direccion: "",
    cargo_desempenho: "",
    fecha_inicio: new Date(),
    fecha_termino: new Date(),
    breve_descripcion_actividad: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,

      fecha_inicio: FechaInicio,
      fecha_termino: FechaFinal,
    });
  };

  const handleClickRegister = async () => {
    await registerLaboral(idPostulante, values);
    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
  };

  const [FechaInicio, setFechaInicio] = useState(null);
  const [FechaFinal, setFechaFinal] = useState(null);

  const handleChangeFechaInicio = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleChangeFechaFinal = (event) => {
    setFechaFinal(event.target.value);
  };

  return (
      <FormControl
        container
        className="formEstilo"
        mt={2}
      >
        <Stack
          component="form"
          sx={{
            width: "auto",       
            margin: "20px auto",
            background: "#fff",
            padding: "2rem",
            borderRadius: "1rem",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <h1>Formulario Laboral</h1>
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
          <Box>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                sx={{ color: "gray", position: "relative", top: "15px" }}
                label="Fecha Inicio"
                value={FechaInicio}
                onChange={(newFechaInicio) => {
                  setFechaInicio(newFechaInicio);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                sx={{ color: "gray", position: "relative", top: "15px" }}
                label="Fecha Termino"
                value={FechaFinal}
                onChange={(newFechaFin) => {
                  setFechaFinal(newFechaFin);
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
      </FormControl>
  );
};

export const TextButtons = () => {
  return (
    <Link to="/form-psicologico">
      <Stack direction="row" spacing={2}>
        <Button
          sx={{
            display: "flex",
            justifycontent: "center",
            size: "large",
            backgroundColor: "#000",
          }}
          href="#text-buttons"
        >
          Siguiente
        </Button>
      </Stack>
    </Link>
  );
};
export default FormLaboral;
