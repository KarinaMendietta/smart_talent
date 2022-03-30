// Importando Hooks
import { useState, useEffect, useContext } from "react";
// Importando Context
// import { userContext } from "../../context/userContext";
// Importando firestore
import { getUsersAdmin } from "../../service/firestore";
// Importando Material
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
// Importando estilos SASS
import "./../../styles/page/signIn.scss";
// Importando Sweet Alert
// import swal from "sweetalert";
// import bgLogin from "../../assets/image/bg-login.png";

// import {
//   Select,
//   MenuItem,
//   Stack,
//   TextField,
//   Box,
//   FormControl,
//   InputLabel,
//   Input,
//   FormHelperText,
//   Container,
// } from "@mui/material";
// import { TextFieldsOutlined } from "@mui/icons-material";

const SignIn = () => {
  // const [users, setUsers] = useState([]);

  // const fetchUsersAdmin = async () => {
  //   const data = await getUsersAdmin();
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchUsersAdmin();
  // }, []);

  // const { user, storeUser } = useContext(UserContext);

  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });

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



    // <FormControl container sx={{ display: "flex", justifyContent: "center" }}>
    //   <h1>Formulario de datos</h1>
    //   <Stack
    //     component="form"
    //     sx={{
    //       width: "500px",
    //       margin: "0 auto",
    //       background: "#fff",
    //       padding: "2rem",
    //       borderRadius: "1rem",
    //     }}
    //     spacing={2}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <TextField name="nombre" label="Nombre" type="text" variant="filled" />
    //     <TextField
    //       name="apellido"
    //       label="Apellido"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField name="dni" label="Dni" type="text" variant="filled" />
    //     <TextField name="correo" label="Correo" type="mail" variant="filled" />
    //     <TextField
    //       name="fechaDeNacimiento"
    //       label="Fecha de nacimiento"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField name="genero" label="Genero" type="text" variant="filled" />
    //     <TextField
    //       name="PaisDeNacimiento"
    //       label="Pais de nacimiento"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField
    //       name="celular"
    //       label="Celular"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField
    //       name="departamento"
    //       label="Departamento"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField
    //       name="provincia"
    //       label="Provincia"
    //       type="text"
    //       variant="filled"
    //     />
    //     <Box fullWidth>
    //       <InputLabel fullWidth id="select-departamento-label" variant="filled" sx={{color:"gray", position:'relative', top: '15px'}}>Departamento</InputLabel>
    //       <Select
    //         fullWidth
    //         labelId="select-departamento-label"
    //         id="select-departamento"
    //         value={dep}
    //         label="Departamento"
    //         onChange={handleChange}
    //         variant="filled"
    //       >
    //         <MenuItem value={'Lima'}>Lima</MenuItem>
    //         <MenuItem value={'Arequipa'}>Arequipa</MenuItem>
    //         <MenuItem value={'Puno'}>Puno</MenuItem>
    //       </Select>
    //     </Box>
    //     <TextField
    //       name="distrito"
    //       label="Distrito"
    //       type="text"
    //       variant="filled"
    //     />
    //     <TextField
    //       name="direccion"
    //       label="Direccion"
    //       type="text"
    //       variant="filled"
    //     />
    //   </Stack>
    // </FormControl>
  );
};

export default SignIn;
