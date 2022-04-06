import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container,Grid, Divider, Button, Stack, FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,Radio, TextField } from "@mui/material";
import { getTests, registerCalificacion, registerPsicologico  } from "../../service/firestore";
import swal from "sweetalert";

const FormPsicologico = () => {

  const [idPostulante, setIDPostulante] = useState(
    localStorage.getItem("idPostulante")
  );

  const [idConvocatoria, setIDConvocatoria] = useState(
    localStorage.getItem("idConvocatoria")
  );

  const [califAcademica, setCalifAcademica] = useState(
    localStorage.getItem("califAcademica")
  );

  const [califLaboral, setCalifLaboral] = useState(
    localStorage.getItem("califLaboral")
  );
 
  //Para traer las preguntas
    const [tests, setTests] = useState([]);

    const fetchTests = async () => {
        const data = await getTests();
        console.log(data)
        setTests(data);
        
      };

    useEffect(() => {
        fetchTests();
    }, []);

  //Para leer las respuestas
  const [values,setValues] = useState({
    id_test:"",
    calificacion:"",
  })

  let [sumaAsertividad,setSumaAsertividad] = useState(0)
  let [sumaComunicacion,setSumaComunicacion] = useState(0)
  let [sumaAutoestima,setSumaAutoestima] = useState(0)
  let [sumaTomaDesicion,setSumaTomaDesicion] = useState(0)

   
  const handleChangeCalificacion = (event) => {
    setValues({ 
      id_test:event.target.name,
      calificacion:event.target.value,
    })

    if (event.target.name<=12) {
      setValues(sumaAsertividad += +event.target.value)
    } else if (event.target.name>12 & event.target.name<=21) {
      setValues(sumaComunicacion += +event.target.value)
    } else if (event.target.name>21 & event.target.name<=33) {
      setValues(sumaAutoestima += +event.target.value)
    } else {
      setValues(sumaTomaDesicion += +event.target.value)
    }
   
    console.log("calificacion",event.target.value)
    console.log("idtest",event.target.name)
    console.log("asertiva",sumaAsertividad)
    console.log("comunica",sumaComunicacion)
    console.log("autoesti",sumaAutoestima)
    console.log("tomadecisi",sumaTomaDesicion)
  };

  //Para crear el objeto completo de la calificacion
  const [todasCalif,setTodasCalif] = useState({
    calif_academica:"",
    calif_laboral:"",
    calif_psicologica:"",
    calif_asertividad:"",
    calif_comunicacion:"",
    calif_autoestima:"",
    calif_toma_decision:"",
   
  })


  const handleClickRegisterCalificacion = async () => {

    await registerPsicologico(idPostulante,values)

   
    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente el Postulante",
    });
  }

  const handleClickRegisterCalificaciones = async () => {
     //aqui pongo los valores
     setTodasCalif({ 
      calif_academica:califAcademica,
      calif_laboral:califLaboral,
      calif_psicologica:sumaAsertividad + sumaComunicacion + sumaAutoestima+sumaTomaDesicion,
      calif_asertividad:sumaAsertividad,
      calif_comunicacion:sumaComunicacion,
      calif_autoestima:sumaAutoestima,
      calif_toma_decision:sumaTomaDesicion,
    })

    await registerCalificacion(idPostulante,idConvocatoria,todasCalif)
    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
}

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
                         
                        <FormControl sx={{display: 'flex', justifyContent:"center"}}>
                          <FormLabel id="label-radio"></FormLabel>
                          <RadioGroup
                            sx={{ flexDirection: "row" }}
                            aria-labelledby="label-radio"
                            name={test.id_test}
                            onChange={handleChangeCalificacion}
                          >
                            <FormControlLabel
                              value={test.nunca}
                              control={<Radio />}
                              label="NUNCA"
                            />
                            
                            <FormControlLabel
                              value={test.rara_vez}
                              control={<Radio />}
                              label="RARA VEZ"
                            />
                            <FormControlLabel
                              value={test.a_veces}
                              control={<Radio />}
                              label="A VECES"
                            />
                            <FormControlLabel
                              value={test.a_menudo}
                              control={<Radio />}
                              label="A MENUDO"
                            />
                            <FormControlLabel
                              value={test.siempre}
                              control={<Radio />}
                              label="SIEMPRE"
                            />
                          
                          </RadioGroup>
                        </FormControl>
                        <div sx={{ flexDirection: "row" }}>
                          <Button
                            onClick={handleClickRegisterCalificacion}  
                            variant="contained" >
                            OK
                          </Button>
                        </div>  
                        </div>
                        
                    </Grid>                   
              ))}
              
        </Grid>
        <Button onClick={handleClickRegisterCalificaciones} variant="contained" fullWidth>
            Terminar
        </Button>       
        
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
          value={test.nunca}
          control={<Radio />}
          label="NUNCA"
        />
        
        <FormControlLabel
          value={test.rara_vez}
          control={<Radio />}
          label="RARA VEZ"
        />
        <FormControlLabel
          value={test.a_veces}
          control={<Radio />}
          label="A VECES"
        />
        <FormControlLabel
          value={test.a_menudo}
          control={<Radio />}
          label="A MENUDO"
        />
        <FormControlLabel
          value={test.siempre}
          control={<Radio />}
          label="SIEMPRE"
        />
       
      </RadioGroup>
    </FormControl>
    )

  }
  
export default FormPsicologico;
