import React from "react";

const Laboral = ({ trabajo, applicant }) => {
    return(
        <>
            <p className="texto">
                Breve Descripcion de la actividad:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).breve_descripcion_actividad}</h1>
                </span>
            </p>
            <p className="texto">
                Cargo de desempeño:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).cargo_desempenho}</h1>
                </span>
            </p>
            <p className="texto">
                Direccion:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).direccion}</h1>
                </span>
            </p>
            <p className="texto">
                Fecha de Inicio:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).fecha_inicio}</h1>
                </span>
            </p>
            <p className="texto">
                Fecha de Termino:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).fecha_termmino}</h1>
                </span>
            </p>
            <p className="texto">
                Nombre de la Empresa:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).nombre_empresa}</h1>
                </span>
            </p>
            <p className="texto">
                R.U.C:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).ruc}</h1>
                </span>
            </p>
            <p className="texto">
                Numero de Telefono:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).telefono}</h1>
                </span>
            </p>
            <p className="texto">
                Tiempo de Trabajo:
                <span>
                    <h1>{trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante).tiempo}</h1>
                </span>
            </p>
        </>
    );
}

export default Laboral;