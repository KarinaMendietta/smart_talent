import { React, useState } from "react";
import MoreRoundedIcon from '@mui/icons-material/MoreRounded';
import { Button, Dialog, DialogContent } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../components/ButtonModal.css'


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
                    <div className="container-text">

                    </div>
                </div>
                
            </DialogContent>
        </Dialog>
        </>
    );
}