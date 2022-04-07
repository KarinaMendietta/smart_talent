import React from "react";
//icons
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import TodayIcon from '@mui/icons-material/Today';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import LanguageIcon from '@mui/icons-material/Language';

const Personal = ({ applicant }) => {
  return (
    <>
      <p className="texto">
        Nombre y Apellido:
        <span>
          {applicant.nombre_postulante} {applicant.apellido_postulante}
        </span>
      </p>
      <p className="texto">
        <div>
          <AssignmentIndIcon />
          DNI:
        </div>
        <span>{applicant.dni_postulante}</span>
      </p>
      <p className="texto">
        <div>
          <LocationOnIcon />
          Direccion:
        </div>
        <span>{applicant.direccion}</span>
      </p>
      <p className="texto">
        <div>
          <LocationCityIcon />
          Provincia:
        </div>
        <span>{applicant.provincia}</span>
      </p>
      <p className="texto">
        <div>
          <SouthAmericaIcon />
          Departamento:
        </div>
        <span>{applicant.departamento}</span>
      </p>
      <p className="texto">
        <div>
          <PhoneIphoneIcon />
          Celular:
        </div>
        <span>{applicant.numero_celular}</span>
      </p>
      <p className="texto">
        <div>
          <LocalPhoneIcon />
          Telefono:
        </div>
        <span>{applicant.telefono_fijo}</span>
      </p>
      <p className="texto">
        <div>
          <AlternateEmailIcon />
          Correo:
        </div>
        <span>{applicant.correo_electronico}</span>
      </p>
      <p className="texto">
        <div>
          <ToggleOnIcon />
          Estado:
        </div>
        <span>{applicant.estado}</span>
      </p>
      <p className="texto">
        <div>
          <ChildFriendlyIcon />
          F. nacimiento:
        </div>
        <span>{+applicant.fecha_nacimiento}</span>
      </p>
      <p className="texto">
        <div>
          <TodayIcon />
          F. postulacion:
        </div>
        <span>{+applicant.fecha_postulacion}</span>
      </p>
      <p className="texto">
        <div>
          <LanguageIcon />
          Pais:
        </div>
        <span>{applicant.pais_nacimiento}</span>
      </p>
    </>
  );
};

export default Personal;