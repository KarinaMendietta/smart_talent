import { React, useState } from "react";
//icon
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from '@mui/icons-material/Close';
//material
import { Dialog, DialogContent,Card, CardContent, Grid, Container } from '@mui/material';
import './ButtonModal.css';
//importando informacion
import Personal from "./Info-Personal/Personal";
import Calificacion from "./Info-Personal/Calificacion";
import Academic from "./Info-Personal/Academic";
//import Psicologico from "./Info-Personal/Psicologico";
//import Laboral from "./Info-Personal/Laboral";


//<Academic academics={academics} applicant={applicant}/>
//<Psicologico pyscho={psycho} applicant={applicant}/>
//<Laboral trabajo={trabajo} applicant={applicant}/>


export const ButtonModal = ({ applicant, qualifications, announcements, academics, psycho, trabajo }) => {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(!open);
    };

    

    return(
        <>
        
            <IconButton color="primary" onClick={handleOpenDialog} aria-label="modal" variant="contained">
                <FontAwesomeIcon  className="icon" icon={faEye} />
            </IconButton>
        
            <Dialog open={open} onClose={handleOpenDialog} fullWidth={"xl"} maxWidth={"xl"}>
                <DialogContent className="modal">
                    <IconButton onClick={handleOpenDialog} classname="button-close">
                        <CloseIcon className="icon-exit" color="error" variant="contained" fontSize="large"/>
                    </IconButton>
                    <img className="img-user" src={applicant.photo} alt=""/>
                    <Container maxWidth="xl">
                        <Grid container spacing={3} className="card-container">
                            <Grid item md={4}>
                                <Card>
                                    <CardContent className="card">
                                        <Personal applicant={applicant}/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={4}>
                                <Card>
                                    <CardContent className="card">
                                        <Academic academics={academics} applicant={applicant}/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={4}>
                                <Card>
                                    <CardContent className="card">
                                        <Calificacion applicant={applicant} qualifications={qualifications}/>
                                    </CardContent>  
                                </Card> 
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
}
