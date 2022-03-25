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
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// Importando estilos SASS
import "./../styles/component/navBar.scss";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  // const [btnMenu, setBtnMenu] = useState(false);
  // const [btnMenuContent, setBtnMenuContent] = useState(faBars);

  const NavegacionFija = () => {
    if(window.scrollY >= 100){
      setNavBar(true);
    }else{
      setNavBar(false);
    }
  }

  // const HandleBtnMenu = () => {
  //   if(btnMenu == true){
  //     setBtnMenu(false);
  //     setBtnMenuContent(faBars);
  //   } else{
  //     setBtnMenu(true);
  //     setBtnMenuContent(faRemove);
  //   }
  // };

  useEffect(() => {
    window.addEventListener('scroll', NavegacionFija, true);
    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', NavegacionFija, true);
    };
  }, []);

  const classNavBar = navBar ? 'navBar fijo': 'navBar';
  // const classMenu = btnMenu ? 'nav nav--float': 'nav';
  // className={classNavBar}
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

            <button href="/" className="icon icon--navBar">
              <FontAwesomeIcon icon={faBars} />
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
