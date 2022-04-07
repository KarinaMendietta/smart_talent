// Importando Hooks
import { useState, useContext } from "react";
// Importando Context
import { UserContext } from "../../context/UserContext";
// Importando firestore
import {
  loginUser,
} from "../../service/firestore";
// Importando Material
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
// Importando estilos SASS
import "./../../styles/page/signIn.scss";
// Importando Sweet Alert
import swal from "sweetalert";

const SignIn = () => {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    const { email, password } = userData;
    let response = await loginUser(email, password);

    if (!response.ok) {
      // si esto es falso el usuario no existe por ende lo vamos a crear
      // response = await storeUserFirebase(email, password);

      if (!response.ok) {
        swal({
          title: "Error",
          text: response.data,
          icon: "error",
        });
        return;
      }
    }
    // después del login o el createUser se debe guardar al usuario en userContext
    storeUser(response.data.user);
    // Después de hacer click en iniciar sesion y haga las verificaciones respectivas te redirige al dashboard
    window.location.href = "/dashboard/dashboard";
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#gray" }}
    >
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Sign In</h5>
            <p>Bienvenido</p>

            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  onChange={handleChangeInput}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChangeInput}
                  fullWidth
                />
              </Grid>

              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignIn;
