//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getPostulantes, getAnnouncements } from "../../service/firestore";
// Importando ApexCharts
import Chart from "react-apexcharts";
// Importando Lodash
import _, { sortBy } from "lodash";
// Importando estilos
import "./../../styles/component/barChart.scss";

const BarChart = (props) => {
  // Inicializando el chartData para el apexchart
  const [chartData, setChartData] = useState(null);

  // Obteniendo la base de datos tblPostulantes
  const fetchApplicants = async () => {
    const data = await getPostulantes();
    return data;
  };

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    return data;
  };

  const buildChart = async () => {
    const applicants = await fetchApplicants();
    const announcements = await fetchAnnouncements();

    // Agrupando la data de postulantes por id_convocatoria
    const groupedResult = _.chain(applicants)
      .groupBy((item) => {
        return item.id_convocatoria;
      })
      .map((value, key) => ({ key, items: value }))
      .value();

    // Obteniendo el nombre de la convocatoria por el id_convocatoria
    const names = sortBy(announcements, "id_convocatoria").map(
      (item) => item.nombre_convocatoria
    );
    // const names = groupedResult.map(
    //   (_announcement, index) => announcements[index].nombre_convocatoria
    // );

    // Obteniendo el número de postulantes por id_convocatoria
    const counts = groupedResult.map(
      (announcement) => announcement.items.length
    );

    // Declarando la data para el apexChart
    const data = {
      series: [
        {
          name: "N° de postulaciones",
          data: counts,
        },
      ],
      options: {
        xaxis: {
          tickPlacement: "on",
          categories: names,
          labels: {
            style: {
              colors: "#fff",
              fontSize: "14",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#fff"],
              fontSize: "14",
            },
          },
          min: 0,
        },
        // theme:{
        //   mode:'dark',
        // },
        colors: ["#ffffff90"], //para el color de la linea de la gráfica lineal
        dataLabels: {
          enabled: false, // para activar la data encima de los markers
        },
        stroke: {
          curve: "straight",
          width: 5, //para el grosor de la linea de la gráfica lineal
        },
        markers: {
          size: 3, // son los circulos en la gráfica
        },
        fill: {
          colors: ["#fff"], //para el color del sombreado debajo de la gráfica lineal
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["transparent"],
          },
          column: {
            colors: ["transparent"],
          },
        },
      },
    };
    setChartData(data);
  };

  useEffect(() => {
    buildChart();
  }, []);

  return (
    <div className="barChart">
      <div
        className="barChart__graphic"
        style={{
          background: `linear-gradient(195deg, ${props.color1}, ${props.color2})`,
        }}
      >
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={300}
          />
        )}
      </div>
      <div className="barChart__content">
        <h3>Postulantes por posición laboral</h3>
        <p>N° de postulaciones por convocatoria</p>
      </div>
    </div>
  );
};

export default BarChart;
