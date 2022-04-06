// Importando Hooks
import { useState, useEffect, useContext } from "react";
// Importando Context
import { UserContext } from "../../context/UserContext";
// Importando firestore
import { getUsersAdmin } from "../../service/firestore";
// Importando Material
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
// Importando estilos SASS
import "./../../styles/page/signIn.scss";
// Importando Sweet Alert
import swal from "sweetalert";


const SignIn = () => {
  const { user, storeUser } = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  const fetchUsersAdmin = async () => {
    const data = await getUsersAdmin();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsersAdmin();
  }, []);



  // const handleChangeInput = (e) => {
  //   const { value, name } = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  //   console.log(userData);
  // };

  // const handleClickLogin = () => {
  //   if(userData.email === "pepe@gmail.com" && userData.password === "123456"){
  //     const user = {
  //       nombre: "Pepe",
  //       apellido: "Zapata",
  //       correo: userData.email,
  //       edad: 21,
  //       trabajo: "Sofware Developer",
  //       dni: "12345678",
  //       cel:"923456789"
  //     }
  //     storeUser(user);

  //     window.location.href = "/tables"
  //   } else {
  //     console.log("error")
  //     // swal({
  //     //   icon: "error",
  //     //   title: "Error",
  //     //   text: "Email or Password incorrect",
  //     // });
  //   }
  // };

  // const [dep, setDep] = useState('');

  // const handleChange = (event) => {
  //   setDep(event.target.value);
  // };

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
                {/* onChange={handleChangeInput} */}
                <TextField label="Email" name="email" fullWidth />
              </Grid>
              <Grid item md={12}>
                {/* onChange={handleChangeInput} */}
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                {/* onClick={handleClickLogin} */}
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
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
