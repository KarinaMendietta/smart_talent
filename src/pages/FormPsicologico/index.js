import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container,Grid, Divider, Button, Stack, FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,Radio } from "@mui/material";
import { getTests  } from "../../service/firestore";

const FormPsicologico = () => {
   
    const [tests, setTests] = useState([]);

    const fetchTests = async () => {
        const data = await getTests();
        setTests(data);
      };

    useEffect(() => {
        fetchTests();
    }, []);


  return (
    <Container maxWidth="lg">
      <form >
        <h1>Formulario Psicológico</h1>
        &nbsp;&nbsp;
        <h2>HABILIDADES SOCIALES</h2>
        <Divider />
        <Grid container spacing={3} mt={5}>
             {tests.length > 0 &&
                    tests.map((test) => (
                    <Grid item xs={12}>                        
                        <div >
                            <p >{test.id_test} &nbsp;&nbsp;{test.pregunta}</p>                       
                            
                        </div>
                        <div>
                        <RadioRespuesta/>
                        </div>
                    </Grid>                   
                    
              ))}
              <Grid item md={12}>
                <Button  variant="contained" fullWidth>
                Guardar
                </Button>
              </Grid>                
        </Grid>        
        <TextButtons/>
        
      </form>  
    </Container>  

    )
}

export const TextButtons = () => {
    return (
      <Link to="/fin-registro">
        <Stack direction="row" spacing={2} mt={5}>
          <Button variant="contained" size="large" href="#text-buttons">Siguiente</Button>
        </Stack>
      </Link>
    );
  };

  export const ButtonRespuesta = () => {
    return (      
        <Stack direction="row" spacing={2}  >
          <Button variant="outlined" >Nunca</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', m: 1 }}>Rara vez</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', m: 1 }} >A veces</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', m: 1 }} >A menudo</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', m: 1 }} >Siempre</Button>
        </Stack>    
    );
  };

  export const RadioRespuesta = () => {
    return (
      <FormControl sx={{display: 'flex', justifyContent:"center"}}>
      <FormLabel id="label-radio">Rspuestas</FormLabel>
      <RadioGroup
        aria-labelledby="label-radio"
        name="calificacion"
      >
         <FormControlLabel
          value="nunca"
          control={<Radio />}
          label="NUNCA"
        />
        
        <FormControlLabel
          value="rara_vez"
          control={<Radio />}
          label="RARA VEZ"
        />
        <FormControlLabel
          value="a_veces"
          control={<Radio />}
          label="A VECES"
        />
        <FormControlLabel
          value="a_menudo"
          control={<Radio />}
          label="A MENUDO"
        />
        <FormControlLabel
          value="siempre"
          control={<Radio />}
          label="SIEMPRE"
        />
       
      </RadioGroup>
    </FormControl>
    )

  }
  
export default FormPsicologico;