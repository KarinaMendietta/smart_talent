//Importando Hooks
import { useState, useEffect, useContext } from "react";
// Importando ApexCharts
import Chart from "react-apexcharts";
//Importando de firestore
import { getApplicants, getAnnouncements, getQualifications } from "../../service/firestore";
// Importando estilos
import "./../../styles/base/colours.scss";
import "./../../styles/component/lineChart.scss";


const LineChart = (props) => {
  // Para utilizarlo con la base de datos tblPostulantes
  const [applicants, setApplicants] = useState([]);
  // Para utilizarlo con la base de datos tblConvocatoria
  const [announcements, setAnnouncements] = useState([]);
  // Para utilizarlo con la base de datos tblConvocatoria
  const [qualifications, setQualifications] = useState([]);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getApplicants();
    setApplicants(data);
    // console.log(applicants);
  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data);
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualification = async () => {
    const data = await getQualifications();
    setQualifications(data);
  };

  //Inicializando los fetch
  useEffect(() => {
    fetchApplicants();
    fetchAnnouncements();
    fetchQualification()
  }, []);

  const chartData = {
    series: [
      {
        name: "Número de Postulantes",
        data: [10, 30, 20, 43, 32, 16],
      },
    ],
    options: {
      xaxis: {
        tickPlacement:'on',
        categories: ["JS", "CSS", "HTML", "NodeJS", "React", "Vue"],
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
    <div className="lineChart">
      <div className="lineChart__graphic" style={{background: `linear-gradient(195deg, ${props.color1}, ${props.color2})`}} >
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={250}
        />
      </div>
      <div className="lineChart__content">
        <h3>Postulantes por mes</h3>
        <p>Last Campaign Performance</p>
      </div>
    </div>
  );
};

export default LineChart;
