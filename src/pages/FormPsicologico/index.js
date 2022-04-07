import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container,Grid, Divider, Button, Stack, FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,Radio, TextField } from "@mui/material";
import { getTests, registerCalificacion, registerPsicologico  } from "../../service/firestore";
import swal from "sweetalert";
import "./../../styles/page/formEstilo.scss"
import { height } from "@mui/system";

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

    const nroTest = +event.target.name
    const calificacionTest = +event.target.value
    console.log("NumeroTest",nroTest )

    if (nroTest<=12) {
      const sumaa = sumaAsertividad += calificacionTest
      setSumaAsertividad(sumaa)
    } else if (nroTest>12 & nroTest<=21) {
      const sumac = sumaComunicacion += calificacionTest
      setSumaComunicacion(sumac)
    } else if (nroTest>21 & nroTest<=33) {
      setSumaAutoestima(sumaAutoestima += calificacionTest)
    } else {
      setSumaTomaDesicion(sumaTomaDesicion += calificacionTest)
    }
   
    console.log("calificacion",calificacionTest)
    console.log("idtest",nroTest)
    console.log("asertiva",sumaAsertividad)
    console.log("comunica",sumaComunicacion)
    console.log("autoesti",sumaAutoestima)
    console.log("tomadecisi",sumaTomaDesicion)
  };


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

     const sumaP = sumaAsertividad + sumaComunicacion + sumaAutoestima + sumaTomaDesicion
     console.log("sumaA",sumaAsertividad)
     console.log("sumaC",sumaComunicacion)
     console.log("sumaP",sumaP)

     const calificaciones = {
      calif_academica:califAcademica,
      calif_laboral:califLaboral,
      calif_psicologica:sumaP,
      calif_asertividad:sumaAsertividad,
      calif_comunicacion:sumaComunicacion,
      calif_autoestima:sumaAutoestima,
      calif_toma_decision:sumaTomaDesicion,
  }

  await registerCalificacion(idPostulante,idConvocatoria,calificaciones)
  console.log("todas califica", calificaciones)
    
}

  return (
    // <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
    <FormControl
        container
        className="formEstilo"
        mt={2}
        sx={{ alignItems:"center", 
        width: "100%",  
        height:"auto",
        background: "linear-gradient(90deg, #43c6ac 0%, #191654 100%)"
       }}
      >
  
      <Stack
          component="form"
          sx={{
            width: "80%",    
            maxWidth: "600px",   
            margin: "20px auto",
            background: "#fff",
            padding: "2rem",
            borderRadius: "1rem",
            
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
        <h1>Formulario Psicológico</h1>
        &nbsp;&nbsp;
        <h2>HABILIDADES SOCIALES</h2>
        <Divider />
        <Grid container spacing={3} mt={5} sx={{width:'100%'}}>
             {tests.length > 0 &&
                    tests.map((test) => (
                    <Grid item xs={12}> 
                                            
                        <div >
                            <p >{test.pregunta}</p>                       
                        </div>
                        <div>
                         
                        <FormControl sx={{display: 'flex', justifyContent:"center"}}>
                          <FormLabel id="label-radio"></FormLabel>
                          <RadioGroup   
                            row                         
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
                        
                        </div>
                        <div>
                          <Button
                            onClick={handleClickRegisterCalificacion}  
                            variant="contained" >
                            OK
                          </Button>
                        </div>
                    </Grid>                   
              ))}
              
        </Grid>
        <Link to="/fin-registro">
        <Button onClick={handleClickRegisterCalificaciones} variant="contained" 
        fullWidth href="#text-buttons">
            Terminar
        </Button>   
        </Link>    
        
        </Stack>
      </FormControl>

    );
}

export const TextButtons = () => {
    return (
      <Link to="/fin-registro">
        <Stack direction="row" spacing={2} mt={5}>
          <Button 
          variant="contained" size="large" 
          sx={{     
            width: "auto",       
            margin: "20px auto",        
            background:"#022251",
            color:"#fff",
            fontSize:"10px",
            padding:"10px",
            
        }} href="#text-buttons">Finalizar formulario</Button>
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
  
export default FormPsicologico;