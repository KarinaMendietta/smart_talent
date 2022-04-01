import React from "react";
import { useState, useEffect } from "react";
import { Container,Grid, Divider, Button } from "@mui/material";
import "./index.css";
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
    <Container maxWidth="xl">
        <h1>Formulario Psicológico</h1>
        &nbsp;&nbsp;
        <h2>TEST DISC</h2>
        <Divider />
        <Grid container spacing={3} mt={5}>
             {tests.length > 0 &&
                    tests.map((test) => (
                    <Grid item md={12}>
                        <div>
                            <p >{test.id_test} &nbsp;&nbsp;{test.pregunta}</p>
                        
                            <Button variant="contained" color="secundary">Siempre</Button>
                        </div>
                    </Grid>
                    
                    
                    ))}
                
        </Grid>
    </Container>
    

    )
}

export default FormPsicologico;