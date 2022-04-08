//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getPostulantes, getAnnouncements, getQualifications } from "../service/firestore";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Importando SASS
import "./../styles/component/cardsDashboard.scss";

const CardsDash = (props) => {
  // Inicializando el chartData para el apexchart
  const [dataCards, setDataCards] = useState(null);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getPostulantes();
    return data;
  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    return data;
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualifications = async () => {
    const data = await getQualifications();
    return data;
    // console.log(data)
  };

  const map = async () => {
    const applicants = await fetchApplicants();
    const announcements = await fetchAnnouncements();
    const qualifications = await fetchQualifications();

    const applicantsLength = await applicants.length;

    const qualificationApproving = await qualifications.filter((qualification) => (qualification.calif_academica + qualification.calif_laboral + qualification.calif_psicologica) > 60 ).map((a)=>a.id_postulante).length


    // const califPsicologica = await qualifications.map((qualification) => {
    //   const calif = qualification;
    //   let suma = calif?.calif_asertividad + calif?.calif_autoestima + calif?.calif_comunicacion + calif?.calif_toma_desicion ;
    //   return suma
    // })
    // console.log('califPsicologica', califPsicologica);

    // const sumaCalificaciones = await qualifications.map((qualification) => {
    //   const calif = qualification;
    //   let sumaPsicologica  = calif?.calif_asertividad + calif?.calif_autoestima + calif?.calif_comunicacion + calif?.calif_toma_desicion ;
    //   const sumaTotal = qualification.calif_academica + sumaPsicologica + qualification.calif_laboral;
    //   return sumaTotal;
    // })
    // console.log('sumaCalificaciones',sumaCalificaciones);

    const data = {
      numero_postulantes: applicantsLength,
      numero_postulantes_aprobados: qualificationApproving,
    };

    setDataCards(data);
  };

  useEffect(() => {
    map();
  }, []);

  return (
    <div className='dashboard__cards'> 
      <div className="cardDash">
        <div className="cardDash__container">
          <div className="cardDash--icon uno">
            <FontAwesomeIcon icon={faUser} className="icon--card" />
          </div>

          {dataCards && (
            <div className="cardDash--description">
              <p>N° de Postulantes</p>
              <h3>{dataCards.numero_postulantes}</h3>
            </div>
          )}
        </div>
      </div>

      <div className="cardDash">
        <div className="cardDash__container">
          <div className="cardDash--icon dos">
            <FontAwesomeIcon icon={faUser} className="icon--card" />
          </div>
          
          {dataCards && (
            <div className="cardDash--description">
              <p>N° de Postulantes aceptados</p>
              <h3>{dataCards.numero_postulantes_aprobados}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsDash;
