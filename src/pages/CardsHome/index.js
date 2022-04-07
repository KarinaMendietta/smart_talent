//Importando Hooks
import {useState, useEffect} from "react";
//Importando de firestore
import {getAnnouncements} from "../../service/firestore";
// Importando Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faCalendar,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
// Importando MUI
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
// Importando SASS
import "./../../styles/component/cardsHome.scss";

const CardsHome = () => {
  // Para utilizarlo con la base de datos tblConvocatoria
  const [announcements, setAnnouncements] = useState([]);

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data);
    console.log(data);
  };

  // Para enviar el ID al localstorage
  const handleClickPostulate = (id) => {
    console.log(id);
    localStorage.setItem("id_convocatoria", id);
  };

  //Inicializando los fetch
  useEffect(() => {
    fetchAnnouncements();
  }, []);
  return (
    <Container>
      <h2 className="cards-title">Ofertas Laborales</h2>
      <Grid container spacing={3}>
        {announcements.length > 0 &&
          announcements.map((announcement, index) => (
            <Grid
              key={index}
              item
              md={6}
              lg={6}
              sm={12}
              xs={12}
              style={{minHeight: "730px"}}
            >
              <Card className="card" sx={{borderRadius: "2rem"}}>
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={announcement.photo_convocatoria}
                  sx={{height: "25rem"}}
                />
                <CardContent
                  className="card__content"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="card__name">
                    {announcement.nombre_convocatoria}
                  </h3>

                  <Grid container spacing={3} mb={2}>
                    <Grid item md={12} lg={12} sm={12} xs={12} mb={2}>
                      <p className="card__description">
                        {announcement.descripcion}
                      </p>
                    </Grid>

                    <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="icon--card"
                      />
                      <span className="card__span">Arequipa</span>
                    </Grid>

                    <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="icon--card"
                      />
                      <span className="card__span">12 Vacantes</span>
                    </Grid>

                    <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="icon--card"
                      />
                      <span className="card__span">
                        01/01/2022 al 20/01/2022
                      </span>
                    </Grid>

                    <Grid item md={6} lg={6} sm={4} xs={6} mb={2}>
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        className="icon--card"
                      />
                      <span className="card__span">S/ 2500</span>
                    </Grid>
                  </Grid>

                  {/* Para enviar el ID al localstorage */}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      handleClickPostulate(
                        announcement.id_convocatoria
                      )
                    }
                    sx={{fontSize: "1.6rem", borderRadius: "1rem"}}
                  >
                    Postular
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CardsHome;
