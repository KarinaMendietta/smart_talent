// Importando react-router
import { Link } from "react-router-dom";
// Importando estilos
import "./../../styles/page/home.scss";
import { ButtonModal } from "../../components/ButtonModal";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="bar header__container">
          <nav className="nav">
            <ul className="nav-link">
              <li className="nav-link__item">
                <Link to={"/sign-in"} className="btn--nav">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Home;
