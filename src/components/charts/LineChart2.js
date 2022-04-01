// Importando ApexCharts
import Chart from "react-apexcharts";
// Importando estilos
import "./../../styles/base/colours.scss";
import "./../../styles/component/lineChart2.scss";

const LineChart2 = (props) => {
  const chartData = {
    series: [
      {
        name: "Tech Development",
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
      theme:{
        mode:'dark',
      },
      colors: ['#ffffff50'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 4,
      },
      markers: {
        size: 2,
      },
      fill: {
        colors: ["#fff"],
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
      <div className="lineChart__graphic" >
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height='250'
        />
      </div>
      <div className="lineChart__content">
        <h3>Website Views</h3>
        <p>Last Campaign Performance</p>
      </div>
    </div>
  );
};

export default LineChart2;
