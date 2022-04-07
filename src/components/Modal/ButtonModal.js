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


export const ButtonModal = ({ applicant, qualifications, announcements, academics }) => {
    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(!open);
        console.log(qualifications);
        console.log(announcements);
        console.log(academics);
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
                                <h1>{qualifications.length > 0 && qualifications.find((qualification) => qualification.id_postulante === applicant.id_postulante).calif_laboral}</h1>
                                <CardContent className="card">
                                        
                                </CardContent>
                            </Grid>
                            <Grid item md={4}>+
                                <CardContent className="card">
                                    <Calificacion applicant={applicant} qualifications={qualifications}/>
                                </CardContent>   
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
}
