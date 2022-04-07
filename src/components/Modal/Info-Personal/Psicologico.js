import React from "react";
import EngineeringIcon from '@mui/icons-material/Engineering';

const Psicologico = ({ psycho, applicant }) => {
    return(
        <>
            <p className="texto">
                <div>
                    <EngineeringIcon />
                    Calificacion Psicologica:
                </div>
                <span>
                    <h1>{psycho.length > 0 && psycho.find((psy) => psy.id_postulante === applicant.id_postulante).calificacion}</h1>
                </span>
            </p>
        </>
    );
}
export default Psicologico;