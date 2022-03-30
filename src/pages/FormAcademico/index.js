import { React, useState } from "react";
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
} from "@mui/material";
import { TextFieldsOutlined } from "@mui/icons-material";

const FormAcademico = () => {
  const [academ, setAcadem] = useState("");

  const handleChange = (event) => {
    setAcadem(event.target.value);
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
            value={academ}
            label="Profesion"
            onChange={handleChange}
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
            <MenuItem value={"ProdManuf"}>
              Produccion y Manufactura
            </MenuItem>
            <MenuItem
              value={"AtencCallCentTelemark "}
            >
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
            <MenuItem value={"MinPetroGas "}>
              Mineria, Petroleo Y Gas
            </MenuItem>
            <MenuItem value={"MarkPubli "}>
              Marketing Y Publicidad
            </MenuItem>
            <MenuItem value={"IngCivilConstr"}>
              Ingenieria Civil y Construccion
            </MenuItem>
            <MenuItem value={"EducDocencInvest "}>
              Educacion, Docencia e Investigacion
            </MenuItem>
            <MenuItem value={"GastroTurismo "}>
              Gastronomia Y Turismo
            </MenuItem>
            <MenuItem value={"Legales "}>Legales</MenuItem>
            <MenuItem value={"DiseÑO "}>DiseÑO</MenuItem>
            <MenuItem
              value={"ComuniRelacionesInstPubli "}
            >
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
            value={academ}
            label="Nivel Academico"
            onChange={handleChange}
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
          name="centroEstudios"
          label="Centro de estudios"
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
};

export default FormAcademico;
