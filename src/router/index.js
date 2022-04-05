// Importando react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importando react-router-dom
import { Link, useParams } from "react-router-dom";
// Importando Componentes
// Importando Pages
import Home from "./../pages/Home";
import SignIn from "./../pages/SignIn";
// import SignUp from "./../pages/SignUp";
import Dashboard from "./../pages/Dashboard";
import Tables from "./../pages/Tables";
import Profile from "./../pages/Profile";
// Importando Layouts
import Main from "./../layouts/Main"
import Private from "./../layouts/Private";

const Router = () => {

  const { name } = useParams();

  if(name ==='dashboard'){
    let page = Dashboard
    return page
  }
  else if(name ==='tables'){
    let page = Tables
    return page
  }
  else if(name ==='profile'){
    let page = Profile
    return page
  }

  return (


    <BrowserRouter>
      <Routes>
        {/* Route (Públicas) */}
        {/* Route para el usuario  */}
        <Route path="/" element={<Home />} />
        {/* Route para la empresa  */}
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}

        {/* Route (Privadas) */}
        {/* Route del usuario RRHH logeado*/}
        <Route element={<Private />}>
          <Route element={<Main />}>
            <Route path="/dashboard/:name" element={<Dashboard />} />
            <Route path="/tables/:name" element={<Tables />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
