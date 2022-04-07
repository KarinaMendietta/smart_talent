import React from "react";
//icons
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SmsIcon from '@mui/icons-material/Sms';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const Calificacion = ({applicant, qualifications}) => {
  return (
    <>
      <p className="texto">
        <div>
            <NoteAltIcon/>
            Calificacion Academica:
        </div>
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_academica}
        </span>
      </p>
      <p className="texto">
        <div>
            <GroupAddIcon />
            Calificacion de Aserividad:
        </div>
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_asertividad}
        </span>
      </p>
      <p className="texto">
        <div>
            <AccessibilityNewIcon />
            Calificacion de Autoestima:
        </div>
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_autoestima}
        </span>
      </p>
      <p className="texto">
        <div>
            <SmsIcon />
            Calificacion de Comunicacion:
        </div>
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_comunicacion}
        </span>
      </p>
      <p className="texto">
        <div>
            <PsychologyIcon />
            Calificacion Psicologica:
        </div>
        <span>
          {qualifications.length > 0 &&
            qualifications.find(
              (qualification) =>
                qualification.id_postulante === applicant.id_postulante
            ).calif_psicologica}
        </span>
      </p>
      <p className="texto">
        <div>
            <AltRouteIcon />
            Calificacion Toma de Decision:
        </div>
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
