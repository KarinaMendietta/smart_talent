// Importando Hooks
import { border } from "@mui/system";
import { useEffect, useState } from "react";
// Importando componentes
import LineChart from "../../components/charts/LineChart" 
// import LineChart2 from "../../components/charts/LineChart2" 
// import LineChart2 from "../../components/charts/LineChart2" 
// import BarChart2 from "../../components/charts/BarChart2" 
// Importando estilos
import "./../../styles/page/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <div className='charts'>
          <LineChart/>
          {/* <LineChart2/> */}

        </div>
      </div>
    </>
  );
};

export default Dashboard;
