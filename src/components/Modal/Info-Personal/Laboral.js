import React from "react";

const Laboral = ({ trabajo, applicant }) => {
    return(
        <>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Breve Descripcion de la actividad:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.breve_descripcion_actividad}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Cargo Desempeñado:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.cargo_desempenho}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Dirreccion del Trabajo:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.direccion}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Fecha de Inicio:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.fecha_inicio}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Fecha de Culminacion</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.fecha_termmino}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Nombre de la empresa: </h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.nombre_empresa}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                <h4>R.U.C:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.ruc}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Telefono:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.telefono}   
                </span>
            </div>
            <div className="div">
                <div className="container-icon-title">
                    <></>
                    <h4>Tiempo:</h4>
                </div>
                <span>
                        {trabajo.length > 0 && trabajo.find((work) => work.id_postulante === applicant.id_postulante)?.tiempo}   
                </span>
            </div>
        </>
    );
}

export default Laboral;