// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot, faBuilding, faUser, faCalendar, faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
// Importando MUI
import { Container, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
// Importando SASS
import './../styles/component/cardsHome.scss'

const CardsHome = () => {

  return (
    <Container>
        <h2 className="cards-title">Ofertas Laborales</h2>
        <Grid container spacing={3}>
            <Grid item md={6} lg={6} sm={12} xs={12} >
              <Card className="card" sx={{borderRadius:'2rem'}}>
                <CardContent className="card__content">
                    <h3 className="card__name">Asistente de Producción</h3>

                    <Grid container spacing={3} mb={2} >
                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faBuilding} className="icon--card" />
                            <span className="card__span">Cerro Verde</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faLocationDot} className="icon--card" />
                            <span className="card__span">Arequipa</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faUser} className="icon--card" />
                            <span className="card__span">12 Vacantes</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">01/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">20/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faMoneyBill} className="icon--card" />
                            <span className="card__span">S/ 2500</span>
                        </Grid>
                    </Grid>

                    <Button fullWidth variant="contained" color="primary" sx={{fontSize:'1.6rem', borderRadius:'1rem'}} >
                      Postular
                    </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={6} lg={6} sm={12} xs={12} >
              <Card className="card" sx={{borderRadius:'2rem'}}>
                <CardContent className="card__content">
                    <h3 className="card__name">Asistente de Logística</h3>

                    <Grid container spacing={3} mb={2} >
                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faBuilding} className="icon--card" />
                            <span className="card__span">Cerro Verde</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faLocationDot} className="icon--card" />
                            <span className="card__span">Arequipa</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faUser} className="icon--card" />
                            <span className="card__span">12 Vacantes</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">01/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">20/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faMoneyBill} className="icon--card" />
                            <span className="card__span">S/ 2500</span>
                        </Grid>
                    </Grid>

                    <Button fullWidth variant="contained" color="primary" sx={{fontSize:'1.6rem', borderRadius:'1rem'}} >
                      Postular
                    </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={6} lg={6} sm={12} xs={12} >
              <Card className="card" sx={{borderRadius:'2rem'}}>
                <CardContent className="card__content">
                    <h3 className="card__name">Jefe de Calidad</h3>

                    <Grid container spacing={3} mb={2} >
                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faBuilding} className="icon--card" />
                            <span className="card__span">Cerro Verde</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faLocationDot} className="icon--card" />
                            <span className="card__span">Arequipa</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faUser} className="icon--card" />
                            <span className="card__span">12 Vacantes</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">01/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faCalendar} className="icon--card" />
                            <span className="card__span">20/01/2022</span>
                        </Grid>

                        <Grid item md={6} lg={6} sm={4} xs={6} mb={2} >
                            <FontAwesomeIcon icon={faMoneyBill} className="icon--card" />
                            <span className="card__span">S/ 2500</span>
                        </Grid>
                    </Grid>

                    <Button fullWidth variant="contained" color="primary" sx={{fontSize:'1.6rem', borderRadius:'1rem'}} >
                      Postular
                    </Button>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default CardsHome