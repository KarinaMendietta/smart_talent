import React from "react";
import EngineeringIcon from '@mui/icons-material/Engineering';

const Psicologico = ({ psycho, applicant }) => {
    return(
        <>
            <div className="div">
                <div className="container-icon-title">
                    <EngineeringIcon />
                    Calificacion Psicologica:
                </div>
                <span>
                    {psycho.length > 0 && psycho.find((psy) => psy.id_postulante === applicant.id_postulante)?.calificacion}
                </span>
            </div>
        </>
    );
}
export default Psicologico;