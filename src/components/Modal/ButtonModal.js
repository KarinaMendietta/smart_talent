//Importando Hooks
import { useState } from "react";
//icon
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
// icon information
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import TodayIcon from "@mui/icons-material/Today";
import LanguageIcon from "@mui/icons-material/Language";
//material
import {
  Dialog,
  DialogContent,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import "./ButtonModal.css";

export const ButtonModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(!open);
  };
  // console.log(props.applicant)
  // console.log(props.announcements)
  // console.log(props.qualifications)

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleOpenDialog}
        aria-label="modal"
        variant="contained"
      >
        <FontAwesomeIcon className="icon" icon={faEye} />
      </IconButton>
      <Dialog open={open} onClose={handleOpenDialog} fullWidth maxWidth={"xl"}>
        <DialogContent className="modal">
          <IconButton onClick={handleOpenDialog}>
            <CloseIcon
              className="icon-exit"
              color="error"
              variant="contained"
              fontSize="large"
            />
          </IconButton>

          <img className="img-user" src={props.applicant.photo} alt="" />

          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item md={4}>
                <h1>informacion</h1>
                <Card>
                  <CardContent>
                    <div>
                      <p>
                        Nombre y Apellido:
                        <span>
                          {props.applicant.nombre_postulante}{" "}
                          {props.applicant.apellido_postulante}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p>
                        <AssignmentIndIcon />
                        DNI:
                      </p>
                      <span>{props.applicant.dni_postulante}</span>
                    </div>

                    <div>
                      <p>
                        <LocationOnIcon />
                        Direccion:
                      </p>
                      <span>{props.applicant.direccion}</span>
                    </div>

                    <div>
                      <p>
                        <LocationCityIcon />
                        Provincia:
                      </p>
                      <span>{props.applicant.provincia}</span>
                    </div>

                    <p>
                      Departamento:
                      <span>{props.applicant.departamento}</span>
                    </p>

                    <div>
                      <p>
                        <PhoneIphoneIcon />
                        Celular:
                      </p>
                      <span>{props.applicant.numero_celular}</span>
                    </div>

                    <div>
                      <p>
                        <LocalPhoneIcon />
                        Telefono:
                      </p>
                      <span>{props.applicant.telefono_fijo}</span>
                    </div>

                    <div>
                      <p>
                        <AlternateEmailIcon />
                        Correo:
                      </p>
                      <span>{props.applicant.correo_electronico}</span>
                    </div>

                    <div>
                      <p>
                        <ToggleOnIcon />
                        Estado:
                      </p>
                      <span>{props.applicant.estado}</span>
                    </div>

                    <div>
                      <p>
                        <ChildFriendlyIcon />
                        F. nacimiento:
                      </p>
                      <span>{+props.applicant.fecha_nacimiento}</span>
                    </div>

                    <div>
                      <p>
                        <TodayIcon />
                        F. postulacion:
                      </p>
                      <span>{+props.applicant.fecha_postulacion}</span>
                    </div>

                    <div>
                      <p>
                        <LanguageIcon />
                        Pais:
                      </p>
                      <span>{props.applicant.pais_nacimiento}</span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <h1>Information: </h1>
              </Grid>
              <Grid item md={4}>
                <h1>informacion</h1>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};
