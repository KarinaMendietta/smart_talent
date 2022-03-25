// Importando Hooks
import { useEffect, useState } from "react";
// Immportando data chart
import { lineDb } from "./../../assets/data/chartDb";
// Importando estilos
import "./../../styles/base/colours.scss";
import "./../../styles/component/lineChart.scss";
// Importando Chart JS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  fill: true,
  scales: {
    y:{
      ticks:{
        color:"white",
        beginAtZero: true,
        stepSize: 1,
        font:{
          size:16
        }
      },
      grid:{
        color:"rgb(15, 57, 78, 1)"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:16
        }
      },
      grid:{
        color:"rgba(128, 128, 128, 1)"
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Line Chart",
    }
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const score = [2, 2, 3, 5, 4, 8, 6];

console.log(lineDb[0].labels);
const LineChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "dataset 1",
        data: [3, 5, 3, 1, 8, 9, 4],
        borderWidth: 3,
        borderColor: "rgba(255 , 255, 255, 1)",
        pointRadius: 6,
        pointBackgroundColor: "rgba(255 , 255, 255, 1)",
        backgroundColor: "rgba(36, 135, 177, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <>
      <div className='lineChart'>
        <div className='lineChart__graphic'>
          <Line data={data} options={options} />
        </div>
        <div className='lineChart__content'>
          <h4>Website Views</h4>
          <p>Last Campaign Performance</p>
        </div>
      </div>
    </>
  );
};

export default LineChart;
