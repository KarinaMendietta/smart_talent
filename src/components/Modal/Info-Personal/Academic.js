import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TodayIcon from '@mui/icons-material/Today';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Academic = ({ academics, applicant }) => {
    return(
        <>
            <p className="texto">
                <div className="container-icon">
                    <ContactPageIcon />
                    <h4 className="titulo-icon">Area Profesional:</h4>
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.area_profesional}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <SchoolIcon />
                    Centro de Estudios:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.centro_estudios}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <MenuBookIcon />
                    Curso Adicional:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.curso_adicional_1}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <MenuBookIcon />
                    Curso Adicional:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.curso_adicional_2}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <TodayIcon />
                    Fecha de Egreso:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.fecha_egreso}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <SchoolIcon />
                    Nivel Academico:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.nivel_academico}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <LibraryBooksIcon />
                    Nivel Ingles:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.nivel_ingles}</h1>
                </span>
            </p>
            <p className="texto">
                <div>
                    <SchoolIcon />
                    Profesion:
                </div>
                <span>
                    <h1>{academics.length > 0 && academics.find((academic) => academic.id_postulante === applicant.id_postulante)?.profesion}</h1>
                </span>
            </p>
        </>

    );
}

export default Academic;