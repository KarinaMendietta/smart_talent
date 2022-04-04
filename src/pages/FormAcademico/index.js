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
  Grid,
  Checkbox,
  Button
} from "@mui/material";

import { TextFieldsOutlined } from "@mui/icons-material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { getPostulantes,registerAcademico } from "../../service/firestore";
import swal from "sweetalert";



const FormAcademico = () => {

  const [idPostulante, setIDPostulante] = useState(
    localStorage.getItem("idPostulante")
  );

  const [values,setValues] = useState({
    profesion:"",
    area_profesional:"",
    nivel_academico:"",
    centro_estudios:"",
    fecha_egreso: new Date,
    curso_adicional_1:"",
    curso_adicional_2:"",
    nivel_ingles:"",
    estado:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
     ...values,
      [name]: value,

      area_profesional:Areaprofesional,
      nivel_academico:Nivelacademico,
      fecha_egreso:Fecha,
      nivel_ingles:Nivelingles,
      estado: "activo"
      
    });
  };

  const handleClickRegister = async () => {
    await registerAcademico(idPostulante,values)
    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
}

  const [Fecha, setFecha] = useState(null);
  const [Areaprofesional, setAreaprofesional] = useState(null);
  const [Nivelacademico, setNivelacademico] = useState(null);
  const [Nivelingles, setNivelingles] = useState(null);



  const handleChangeAreaprofesional = (event) => {
    setAreaprofesional(event.target.value);
  };

  const handleChangeNivelacademico = (event) => {
    setNivelacademico(event.target.value);
  };

  const handleChangeNivelingles = (event) => {
    setNivelingles(event.target.value);
  };


  return (
    <FormControl container sx={{ display: "flex", justifyContent: "center" }}>
      <h1>Formulario academico</h1>
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
        <TextField
          name="profesion"
          label="Profesión"
          type="text"
          variant="filled"
        />
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-profesion-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Area profesional
          </InputLabel>
          <Select
            fullWidth
            labelId="select-profesion-label"
            id="select-profesion"
            value={Areaprofesional}
            label="Area profesional"
            onChange={handleChangeAreaprofesional}
            variant="filled"
          >
            <MenuItem value={"ComerVentasNeg "}>
              Comercial, Ventas Y Negocios
            </MenuItem>
            <MenuItem value={"AdminContabFin "}>
              Administracion, Contabilidad Y Finanzas
            </MenuItem>
            <MenuItem value={"OficiosOtros "}>Oficios Y Otros</MenuItem>
            <MenuItem value={"TecSistTelecom"}>
              Tecnologia, Sistemas Y Telecomunicaciones
            </MenuItem>
            <MenuItem value={"ProdManuf"}>Produccion y Manufactura</MenuItem>
            <MenuItem value={"AtencCallCentTelemark "}>
              Atencion Al Cliente, Call Center Y Telemarketing
            </MenuItem>
            <MenuItem value={"AbastLogist "}>
              Abastecimiento y Logistica
            </MenuItem>
            <MenuItem value={"Ingenierias "}>Ingenierias</MenuItem>
            <MenuItem value={"SaludMedicFarma"}>
              Salud, Medicina y Farmacia
            </MenuItem>
            <MenuItem value={"RecHumCapacit"}>
              Recursos Humanos y Capacitacion
            </MenuItem>
            <MenuItem value={"MinPetroGas "}>Mineria, Petroleo Y Gas</MenuItem>
            <MenuItem value={"MarkPubli "}>Marketing Y Publicidad</MenuItem>
            <MenuItem value={"IngCivilConstr"}>
              Ingenieria Civil y Construccion
            </MenuItem>
            <MenuItem value={"EducDocencInvest "}>
              Educacion, Docencia e Investigacion
            </MenuItem>
            <MenuItem value={"GastroTurismo "}>Gastronomia Y Turismo</MenuItem>
            <MenuItem value={"Legales "}>Legales</MenuItem>
            <MenuItem value={"Diseno "}>Diseno</MenuItem>
            <MenuItem value={"ComuniRelacionesInstPubli "}>
              Comunicacion, Relaciones Institucionales Y Publicas
            </MenuItem>
            <MenuItem value={"SecretariasRecepcion "}>
              Secretarias y Recepcion
            </MenuItem>
            <MenuItem value={"AduanaComercioExterior "}>
              Aduana y Comercio Exterior
            </MenuItem>
            <MenuItem value={"Seguros "}>Seguros</MenuItem>
            <MenuItem value={"GerenciaDireccionGeneral "}>
              Gerencia y Direccion General
            </MenuItem>
            <MenuItem value={"Enfermeria "}>Enfermeria</MenuItem>
          </Select>
        </Box>
        <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-nivelAcademico-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Nivel Academico
          </InputLabel>
          <Select
            fullWidth
            labelId="select-nivelAcademico-label"
            id="select-nivelAcademico"
            value={Nivelacademico}
            label="Nivel Academico"
            onChange={handleChangeNivelacademico}
            variant="filled"
          >
            <MenuItem value={"Secundaria"}>Secundaria</MenuItem>
            <MenuItem value={"Tecnico"}>Tecnico</MenuItem>
            <MenuItem value={"Universitario"}>Universitario</MenuItem>
            <MenuItem value={"Titulado"}>Titulado</MenuItem>
            <MenuItem value={"Maestria"}>Maestria</MenuItem>
            <MenuItem value={"Doctorado"}>Doctorado</MenuItem>
          </Select>
        </Box>
        <TextField
          name="centro_estudios"
          label="Centro de estudios"
          type="text"
          variant="filled"
        />        
        <Box  >
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              sx={{ color: "gray", position: "relative", top: "15px" }}  
              label="Fecha de egreso"
              value={Fecha}
              onChange={(newFecha) => {
                setFecha(newFecha);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <TextField
          name="curso_adicional_1"
          label="Curso adicional 1"
          type="text"
          variant="filled"
        />
        <TextField
          name="curso_adicional_2"
          label="Curso adicional 2"
          type="text"
          variant="filled"
        />
      
      <Box fullWidth>
          <InputLabel
            fullWidth
            id="select-ingles-label"
            variant="filled"
            sx={{ color: "gray", position: "relative", top: "15px" }}
          >
            Nivel de ingles
          </InputLabel>
          <Select
            fullWidth
            labelId="select-ingles-label"
            id="select-ingles"
            value={Nivelingles}
            label="Nivel de ingles"
            onChange={handleChangeNivelingles}
            variant="filled"
          >
            <MenuItem value={"Nulo"}>Nulo</MenuItem>
            <MenuItem value={"Basico"}>Basico</MenuItem>
            <MenuItem value={"Intermedio"}>Intermedio</MenuItem>
            <MenuItem value={"Avanzado"}>Avanzado</MenuItem>
            <MenuItem value={"Nativo"}>Nativo</MenuItem>
          </Select>
          
        </Box>
        </Stack>
        <TextButtons />
    </FormControl>
  );
};

export const TextButtons = () => {
  return (
    <Link to="/form-laboral">
      <Stack direction="row" spacing={2}>
        <Button href="#text-buttons">Siguiente</Button>
      </Stack>
    </Link>
  );
};

export default FormAcademico;
