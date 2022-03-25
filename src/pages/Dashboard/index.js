// Importando Hooks
import { useEffect, useState } from "react";
// Importando componentes
import LineChart from "./../../components/charts/LineChart" 
import BarChart from "./../../components/charts/BarChart" 
// Importando estilos
import "./../../styles/page/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <div className='charts'>
          <LineChart/>
          <BarChart/>
          <LineChart/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
