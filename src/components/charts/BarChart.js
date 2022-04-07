//Importando Hooks
import { useState, useEffect} from "react";
//Importando de firestore
import { getApplicants, getAnnouncements} from "../../service/firestore";
// Importando ApexCharts
import Chart from "react-apexcharts";
// Importando estilos
import "./../../styles/base/colours.scss";
import "./../../styles/component/barChart.scss";

const BarChart = (props) => {

  // Para utilizarlo con la base de datos tblPostulantes
  const [applicants, setApplicants] = useState([]);
  // Para utilizarlo con la base de datos tblConvocatoria
  const [announcements, setAnnouncements] = useState([]);

  // Para obtener las posiciones de puestos de trabajo
  // const [positions, setPositions] = useState([chartDb]);
  // console.log(positions);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getApplicants();
    // console.log(data);
    setApplicants(data);

  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    // console.log('data', data);
    // console.log('Object values', Object.values(data[0]));
    setAnnouncements(data);
    // setPositions(Object.values(data.nombre_convocatoria));
  };

  // const map2 = announcements.map((announcement) =>{
  //   let puesto=[];
  //   if(announcement.nombre_convocatoria==="Supervisor de Producción"){
  //     puesto = "Sup. Prod.";
  //   } else if(announcement.nombre_convocatoria==="Jefe de Mantenimiento"){
  //     puesto = "Jefe Mant.";
  //   } else if(announcement.nombre_convocatoria==="Supervisor de Logística"){
  //     puesto = "Sup. Log.";
  //   }
  //   return puesto
  // })
  // console.log('map2', map2);


  const map = announcements.map((announcement) =>{
    return announcement.nombre_convocatoria
  })
  // console.log('map', map);

  //Inicializando los fetch
  useEffect(() => {
    fetchApplicants();
    fetchAnnouncements();
  }, []);

 

  const chartData = {
    series: [
      {
        name: "N° de postulaciones",
        data: [10, 30, 20],
      },
    ],
    options: {
      xaxis: {
        tickPlacement:'on',
        categories: map,
        // categories: ["JS", "CSS", "HTML", "NodeJS", "React", "Vue"],
        labels:{
          style:{
            colors:'#fff',
            fontSize:'14'
          },
        }
      },
      yaxis: {
        labels:{
          style:{
            colors:['#fff'],
            fontSize:'14'
          },
        },
        min: 0,
      },
      // theme:{
      //   mode:'dark',
      // },
      colors: ['#ffffff90'], //para el color de la linea de la gráfica lineal
      dataLabels: {
        enabled: false, // para activar la data encima de los markers 
      },
      stroke: {
        curve: 'straight',
        width: 5,//para el grosor de la linea de la gráfica lineal
      },
      markers: {
        size: 3,// son los circulos en la gráfica
      },
      fill: {
        colors: ["#fff"], //para el color del sombreado debajo de la gráfica lineal
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ["transparent"],
        },
        column: {
          colors: ["transparent"],
        },
      },
    },
  };

  return (
    <div className="barChart">
      <div className="barChart__graphic" style={{background: `linear-gradient(195deg, ${props.color1}, ${props.color2})`}}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={300}
        />
      </div>
      <div className="barChart__content">
        <h3>Postulantes por posición laboral</h3>
        <p>N° de postulaciones por convocatoria</p>
      </div>
    </div>
  );
};

export default BarChart;
