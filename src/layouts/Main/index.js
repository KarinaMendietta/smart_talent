// Importando react-router
import { Link, Outlet } from "react-router-dom";
// Importando componentes
import Aside from "./../../components/Aside";
import NavBar from "../../components/NavBar";
// Importando estilos
import "./../../styles/layouts/main.scss";

const Main = () => {

  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="aside">
            <Aside />
          </div>

          <div className="content">
            <div className="header--main">
              <NavBar />
            </div>
            
            <div className="Outlet">
              <Outlet />
            </div>
          </div>          
        </div>
      </div>
    </>
  );
};

export default Main;
