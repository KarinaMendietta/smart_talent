import { React, useState } from "react";
//icon
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from '@mui/icons-material/Close';
// icon information
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import TodayIcon from '@mui/icons-material/Today';
import LanguageIcon from '@mui/icons-material/Language';
//material
import { Dialog, DialogContent,Card, CardContent, Grid } from '@mui/material';
import './ButtonModal.css';


export const ButtonModal = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        console.log(open)
        setOpen(!open);
    };

    return(
        <>
        
            <IconButton color="primary" onClick={handleOpenDialog} aria-label="modal" variant="contained">
                <FontAwesomeIcon  className="icon" icon={faEye} />
            </IconButton>
        
            <Dialog open={open} onClose={handleOpenDialog} fullWidth={"md"} maxWidth={"md"}>
                <DialogContent className="modal">
                    <IconButton onClick={handleOpenDialog}>
                        <CloseIcon className="icon-exit" color="error" variant="contained" fontSize="large"/>
                    </IconButton>

                    <img className="img-user" src={props.applicantPhoto} alt=""/>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    {/*applicantPhoto
applicantNombre
applicantApellido
applicantDepartamento
applicantProvincia
applicantDireccion
applicantCelular
applicantFijo
applicantCorreo
applicantDni
applicantEstado
applicantNacimiento
applicantPostulacion
applicantPais */}
                                    <h4 className="texto">{props.applicantNombre} {props.applicantApellido}</h4>
                                    <p>
                                        <div>
                                            <LocationCityIcon />
                                            Departamento:
                                        </div> 
                                        <span>{props.applicantDepartamento}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <LocationCityIcon />
                                            Provincia:
                                        </div>
                                        <span>{props.applicantProvincia}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <LocationOnIcon/>
                                            Direccion:
                                        </div>
                                        <span>{props.applicantDireccion}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <PhoneIphoneIcon />
                                            Celular:
                                        </div>
                                        <span>{props.applicantCelular}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <LocalPhoneIcon />
                                            Fijo
                                        </div>
                                        <span>{props.applicantFijo}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <AlternateEmailIcon />
                                            Correo
                                        </div>
                                        <span>{props.applicantCorreo}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <AssignmentIndIcon />
                                            DNI:
                                        </div>
                                        <span>{props.applicantDni}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <ToggleOnIcon/>
                                            Estado
                                        </div>
                                        <span>{props.applicantEstado}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <ChildFriendlyIcon />
                                            Fecha de nacimiento:
                                        </div>
                                        <span>{+props.applicantNacimiento}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <TodayIcon />
                                            Fecha de postulacion:
                                        </div>
                                        <span>{+props.applicantPostulacion}</span>
                                    </p>
                                    <p>
                                        <div>
                                            <LanguageIcon />
                                            Pais: 
                                        </div>
                                        <span>{props.applicantPais}</span>
                                    </p>
                                </CardContent>
                            </Card> 
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <h4 className="texto">informacion personal</h4>
                                </CardContent>
                            </Card> 
                        </Grid>
                        <Grid item xs={6}>
                             <Card>
                                <CardContent>
                                    <h4 className="texto">informacion personal</h4>
                                </CardContent>
                            </Card> 
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}