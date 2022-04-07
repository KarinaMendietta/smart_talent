import React from "react";

const Calificacion = ({applicant, qualifications}) => {
  return (
    <>
      <p className="texto">
        Calificacion Academica:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_academica}
        </span>
      </p>
      <p className="texto">
        Calificacion de Aserividad:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_asertividad}
        </span>
      </p>
      <p className="texto">
        Calificacion de Autoestima:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_autoestima}
        </span>
      </p>
      <p className="texto">
        Calificacion de Comunicacion:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_comunicacion}
        </span>
      </p>
      <p className="texto">
        Calificacion Psicologica:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_psicologica}
        </span>
      </p>
      <p className="texto">
        Calificacion Toma de Decision:
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_toma_desicion}
        </span>
      </p>
    </>
  );
};

export default Calificacion;
