// Importando Hooks
import { useEffect, useState } from "react";
// Importando react-router-dom
import { Link } from "react-router-dom";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/navBar.scss";

const NavBar = (props) => {
  const [navBar, setNavBar] = useState(false);

  const NavegacionFija = () => {
    if(window.scrollY >= 10){
      setNavBar(true);
    }else{
      setNavBar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', NavegacionFija, true);
    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', NavegacionFija, true);
    };
  }, []);

  const classNavBar = navBar ? 'navBar--fijo': 'navBar';

  return (
    <>
      <div className={classNavBar}>
        <div className="navBar__container">
          <div className="navBar__item navBar__item--page">
            <Link to={"/dashboard"} className="page">
              <FontAwesomeIcon icon={faHouse} /> <span> / Dashboard</span>
            </Link>
            <p>Dashboard</p>
          </div>

          <div className="navBar__item navBar__item--icon">
            <button href="/" className="icon icon--navBar">
              <FontAwesomeIcon icon={faUser} />
            </button>

            <button href="/" className="icon icon--navBar icon--bar">
              <FontAwesomeIcon icon={faBars} onClick={props.funcion}/>
            </button>
            
            <button href="/" className="icon icon--navBar">
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
