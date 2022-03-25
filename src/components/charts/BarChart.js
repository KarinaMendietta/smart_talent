// Importando Hooks
import { useEffect, useState } from "react";
// Importando data
import {barDb} from "./../../assets/data/chartDb";
// Importando estilos
import "./../../styles/base/colours.scss";
import "./../../styles/component/barChart.scss";
// Importando Chart JS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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

const BarChart = () => {
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
      <div className='barChart'>
        <div className='barChart__graphic'>
          <Bar data={data} options={options} />
        </div>
        <div className='barChart__content'>
          <h4>Daily Sales</h4>
          <p>Increase in today sales.</p>
        </div>
      </div>
    </>
  );
};

export default BarChart;
