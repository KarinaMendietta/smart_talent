import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { height, width } from '@mui/material/node_modules/@mui/system';

function Copyright(props) {
  return (
    <Typography variant='body2' align="center"  {...props} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" sx={{fontFamily:'opensans-regular', fontSize:'14px', }}>
       Smart Talent
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}  >
      <Container  maxWidth="xs" className='containerlogin'>
        
        <Box
          sx={{
           
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 3, width: '200px', height: '180px', backgroundColor: 'ActiveBorder' }}>
            <img src='./images/SmartTalent.png' width={'180px'} ></img>
          </Avatar>
          <Typography sx={{fontFamily:'opensans-bold', fontSize:'20px'}}>
          Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, }}  >
            <TextField 
            sx={{backgroundColor:'#1abc9c', height:'65px',  }}
           
           
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              
              autoFocus
            />
            <TextField  sx={{backgroundColor:'#1abc9c', height:'65px', }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar Contraseña"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, 
                width: '300px', 
                height: '40px', 
                borderRadius: '10px' , 
                fontSize: '14px',
                fontFamily: 'opensans-regular', }}
            >
              Iniciar Sesión
            </Button>
            <Grid container >
              <Grid item xs>
                <Link href="#" sx={{fontFamily:'opensans-regular', fontSize:'13px'}}>
                Has olvidado tu contraseña?
                </Link>
              </Grid>
           
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}