// Importando Hooks
import { useEffect, useState } from "react";
// Importando componentes
import LineChart from "../../components/charts/LineChart" 
import BarChart from "../../components/charts/BarChart" 
// Importando estilos
import "./../../styles/page/dashboard.scss";
import "./../../styles/base/colours.scss";

const Dashboard = () => {

  return (
      <div className='dashboard'>
        <div className='charts'>
          {/* <LineChart color1={'rgb(73, 163, 241)'} color2={'rgb(26, 115, 232)'} /> */}
          <BarChart color1={'rgb(255, 167, 38)'} color2={'rgb(251, 140, 0)'} />
          {/* <LineChart2 color1={'rgb(102, 187, 106)'} color2={'rgb(67, 160, 71)'} /> */}
        </div>
      </div>
  );
};

export default Dashboard;
