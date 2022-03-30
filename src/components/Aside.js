// Importando react-router-dom
import { Link } from "react-router-dom";
// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faTableList, faUser, faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
// Importando estilos SASS
import "./../styles/component/aside.scss";

const Aside = (props) => {
  return (
    <>
      <aside className="menu"> 
        <div className="menu__container">
          <h3 className="menu__title">Smart Talent</h3>

          <div className="menu__list">
            <Link to={"/dashboard"} className="menu__link" >
              <FontAwesomeIcon icon={faHouse} className="icon" />
              <p>Dashboard</p>
            </Link>

            <Link to={"/tables"} className="menu__link" >
              <FontAwesomeIcon icon={faTableList}  className="icon icon--menu" />
              <p>Tables</p>
            </Link>
            
            <Link to={"/profile"} className="menu__link">
              <FontAwesomeIcon icon={faUser} className="icon icon--menu" />
              <p>Profile</p>
            </Link>
          
            <Link to={"/sign-in"} className="menu__link">
              <FontAwesomeIcon icon={faRightFromBracket} className="icon icon--menu" />
              <p>Sign out</p>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
