import { React, useState } from "react";
import MoreRoundedIcon from '@mui/icons-material/MoreRounded';
import { Button, Dialog, DialogContent, Slider, Chip, Avatar } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../components/ButtonModal.css';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';

export const ButtonModal = () => {

    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        console.log(open)
        setOpen(!open);
    };

    return(
        <>
        <Button onClick={handleOpenDialog} variant='contained'>
            <MoreRoundedIcon/>
        </Button>
        
        <Dialog open={open} onClose={handleOpenDialog} fullWidth={"md"} maxWidth={"md"} >
            <DialogContent className="modal">
                <div className="container-button">
                <Button onClick={handleOpenDialog} variant="contained" size="large" color="error">
                    <CloseRoundedIcon />
                </Button>
                </div>
                <div className="contenido-modal">
                    <img src={"https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"} alt="" className="img-modal"/>
                    <div className="container-text-name">
                        <h1 className="titulo-nombre">JUAN RAMOS</h1>
                    </div>
                    <div className="container-information">
                        <h3>Informacion Personal:</h3>

                        <p>Pais: Peru <FlagCircleRoundedIcon/></p>
                        <Chip variant="outlined" avatar={<Avatar><FlagCircleRoundedIcon/></Avatar>} label="Peru" />
                        <p>Departamento: Arequipa <LocationOnRoundedIcon /></p>
                        <p>Email: ramos@gmail.com<AlternateEmailRoundedIcon/></p>
                        <p>Genero: Masculino <MaleRoundedIcon/></p>
                        <p>Numero de celular: 998-887-478<PhoneIphoneRoundedIcon/></p>
                        <p>Numero telefonico: 054 326444<LocalPhoneRoundedIcon/></p>
                        <p>DNI: 40101245 <AssignmentIndRoundedIcon/></p>
                    </div>
                    <div className="container-information">
                        <h3>Calificacion: </h3>
                        <p>Calificacion Academica: 18/20
                            <Slider size="small" defaultValue={18 * 5} valueLabelDisplay="off" disabled />
                        </p>
                        <p>Calificacion Laboral: 11/20
                            <Slider size="small" defaultValue={11 * 5} valueLabelDisplay="off" disabled />
                        </p>
                        <p>Calificacion psicologica: 14/20
                            <Slider size="small" defaultValue={12 * 5} valueLabelDisplay="off" disabled/>
                        </p>
                    </div>
                    <div className="container-information">
                        <h4>Academico: </h4>
                        <p>vacio</p>
                    </div>
                    <div className="container-information">
                        <h4>Laboral:</h4>
                        <p>Cargo: Supervisor</p>
                        <p>Nombre de la empresa: Taiceria Delia</p>
                        <p>RUC: 1526521210021</p>
                    </div>
                </div>
                
            </DialogContent>
        </Dialog>
        </>
    );
}