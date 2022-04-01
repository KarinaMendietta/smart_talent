import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
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
  Button,
} from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";

const FormPostulante = () => {
  const [post, setPost] = useState(null);

  const handleChange = (event) => {
    setPost(event.target.value);
  };
  return (
    <FormControl container sx={{ display: "flex", justifyContent: "center" }}>
      <h1>Formulario de datos</h1>
      <Stack
        component="form"
        sx={{
          width: "500px",
          margin: "0 auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField name="nombre" label="Nombre" type="text" variant="filled" />
        <TextField
          name="apellido"
          label="Apellido"
          type="text"
          variant="filled"
        />
        <TextField name="dni" label="Dni" type="text" variant="filled" />
        <TextField name="correo" label="Correo" type="mail" variant="filled" />

        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}
              label="Fecha de nacimiento"
              value={post}
              onChange={(newPost) => {
                setPost(newPost);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-genero-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Genero
          </InputLabel>
          <Select
            fullWidth
            labelId="select-genero-label"
            id="select-genero"
            value={post}
            label="Genero"
            onChange={handleChange}
            variant="filled"
          >
            <MenuItem value={"Femenino"}>Femenino</MenuItem>
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
          </Select>
        </Box>
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
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-departamento-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Departamento
          </InputLabel>
          <Select
            fullWidth
            labelId="select-departamento-label"
            id="select-departamento"
            value={post}
            label="Departamento"
            onChange={handleChange}
            variant="filled"
          >
            <MenuItem value={"Amazonas "}>Amazonas</MenuItem>
            <MenuItem value={"Áncash "}>Áncash</MenuItem>
            <MenuItem value={"Apurímac "}>Apurímac</MenuItem>
            <MenuItem value={"Arequipa "}>Arequipa</MenuItem>
            <MenuItem value={"Ayacucho "}>Ayacucho</MenuItem>
            <MenuItem value={"Cajamarca "}>Cajamarca</MenuItem>
            <MenuItem value={"Callao "}>Callao</MenuItem>
            <MenuItem value={"Cusco "}>Cusco</MenuItem>
            <MenuItem value={"Huancavelica "}>Huancavelica</MenuItem>
            <MenuItem value={"Huánuco "}>Huánuco</MenuItem>
            <MenuItem value={"Ica "}>Ica</MenuItem>
            <MenuItem value={"Junín "}>Junín</MenuItem>
            <MenuItem value={"La Libertad "}>La Libertad</MenuItem>
            <MenuItem value={"Lambayeque "}>Lambayeque</MenuItem>
            <MenuItem value={"Lima "}>Lima</MenuItem>
            <MenuItem value={"Loreto "}>Loreto</MenuItem>
            <MenuItem value={"Madre de Dios "}>Madre de Dios</MenuItem>
            <MenuItem value={"Moquegua "}>Moquegua</MenuItem>
            <MenuItem value={"Pasco "}>Pasco</MenuItem>
            <MenuItem value={"Piura "}>Piura</MenuItem>
            <MenuItem value={"Puno "}>Puno</MenuItem>
            <MenuItem value={"San Martín "}>San Martín</MenuItem>
            <MenuItem value={"Tacna "}>Tacna</MenuItem>
            <MenuItem value={"Tumbes "}>Tumbes</MenuItem>
            <MenuItem value={"Ucayali "}>Ucayali</MenuItem>
          </Select>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-provincia-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Provincia
          </InputLabel>
          <Select
            fullWidth
            labelId="select-provincia-label"
            id="select-provincia"
            value={post}
            label="Provincia"
            onChange={handleChange}
            variant="filled"
          >
            <MenuItem value={"Abancay "}>Abancay</MenuItem>
            <MenuItem value={"Arequipa "}>Arequipa</MenuItem>
            <MenuItem value={"Ayacucho "}>Ayacucho</MenuItem>
            <MenuItem value={"Cajamarca "}>Cajamarca</MenuItem>
            <MenuItem value={"Callao "}>Callao</MenuItem>
            <MenuItem value={"Cerro de Pasco "}>Cerro de Pasco</MenuItem>
            <MenuItem value={"Chachapoyas "}>Chachapoyas</MenuItem>
            <MenuItem value={"Chiclayo "}>Chiclayo</MenuItem>
            <MenuItem value={"Cuzco "}>Cuzco</MenuItem>
            <MenuItem value={"Huancavelica "}>Huancavelica</MenuItem>
            <MenuItem value={"Huancayo "}>Huancayo</MenuItem>
            <MenuItem value={"Huánuco "}>Huánuco</MenuItem>
            <MenuItem value={"Huaraz "}>Huaraz</MenuItem>
            <MenuItem value={"Ica "}>Ica</MenuItem>
            <MenuItem value={"Iquitos "}>Iquitos</MenuItem>
            <MenuItem value={"Lima "}>Lima</MenuItem>
            <MenuItem value={"Moquegua "}>Moquegua</MenuItem>
            <MenuItem value={"Moyobamba "}>Moyobamba</MenuItem>
            <MenuItem value={"Piura "}>Piura</MenuItem>
            <MenuItem value={"Pucallpa "}>Pucallpa</MenuItem>
            <MenuItem value={"Puerto Maldonado "}>Puerto Maldonado</MenuItem>
            <MenuItem value={"Puno "}>Puno</MenuItem>
            <MenuItem value={"Tacna "}>Tacna</MenuItem>
            <MenuItem value={"Trujillo "}>Trujillo</MenuItem>
            <MenuItem value={"Tumbes "}>Tumbes</MenuItem>
            <MenuItem value={"Otro "}>Otro</MenuItem>
          </Select>
        </Box>

        <TextField
          name="direccion"
          label="Direccion"
          type="text"
          variant="filled"
        />
      </Stack>
      <TextButtons />
    </FormControl>
  );
};

export const TextButtons = () => {
  return (
    <Link to="/form-academico">
      <Stack direction="row" spacing={2}>
        <Button href="#text-buttons">Siguiente</Button>
      </Stack>
    </Link>
  );
};

export default FormPostulante;
