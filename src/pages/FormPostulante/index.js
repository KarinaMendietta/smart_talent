import { React, useState, useEffect } from "react";
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
import { getPostulantes,registerPostulante } from "../../service/firestore";
import swal from "sweetalert";
import { getMonth } from "date-fns";

const FormPostulante = () => {

  const [values,setValues] = useState({
    nombre_postulante:"",
    apellido_postulante:"",
    dni_postulante:"",
    correo_electronico:"",
    fecha_nacimiento: new Date,
    genero:"",
    pais_nacimiento:"",
    numero_celular:"",
    departamento:"",
    provincia:"",
    direccion:"",
    estado:"",
    fecha_postulacion:"",
    mes:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
     ...values,
      [name]: value,

      genero:Genero,
      departamento:Departamento,
      provincia:Provincia,
      fecha_nacimiento: Fecha,
      estado: "activo",
      fecha_postulacion: new Date,
      mes: new Date().getMonth(),
    });
  };

  const [respuesta, setRespuesta] = useState([]);

  const [idPostulante, setIdPostulante] = useState(0);

  const [Fecha, setFecha] = useState(null);
  const [Genero, setGenero] = useState(null);
  const [Departamento, setDepartamento] = useState(null);
  const [Provincia, setProvincia] = useState(null);

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  };

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const handleChangeProvincia = (event) => {
    setProvincia(event.target.value);
  };

 
  const handleClickRegisterPostulante = async () => {

    await registerPostulante(idPostulante,values)

    localStorage.setItem("idPostulante", idPostulante);
    localStorage.setItem("idConvocatoria", 3);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente el Postulante",
    });
  }

  const handleIdPostulante = async () => {

    const id = await getPostulantes()
    setIdPostulante(id +1)
    console.log("este es el id",idPostulante)
  }

  useEffect(() => {
    handleIdPostulante()
  }, [idPostulante]);

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
        <TextField name="nombre_postulante" label="Nombre" type="text" variant="filled" />
        <TextField
          name="apellido_postulante"
          label="Apellido"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField name="dni_postulante" label="Dni" type="text" variant="filled" onChange={handleInputChange} />
        <TextField name="correo_electronico" label="Correo" type="mail" variant="filled" onChange={handleInputChange} />

        <Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}
              label="Fecha de nacimiento"
              value={Fecha}
              onChange={(newFecha) => {
                setFecha(newFecha);
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
            value={Genero}
            label="Genero"
            onChange={handleChangeGenero}
            variant="filled"
          >
            <MenuItem value={"Femenino"}>Femenino</MenuItem>
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
          </Select>
        </Box>
        <TextField
          name="pais_nacimiento"
          label="Pais de nacimiento"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          name="numero_celular"
          label="Celular"
          type="text"
          variant="filled"
          onChange={handleInputChange}
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
            value={Departamento}
            label="Departamento"
            onChange={handleChangeDepartamento}
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
            value={Provincia}
            label="Provincia"
            onChange={handleChangeProvincia}
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
          onChange={handleInputChange}
        />
        <Button onClick={handleClickRegisterPostulante} variant="contained">
            Guardar
        </Button> 
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