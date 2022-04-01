// Importando react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importando Componentes
// Importando Pages
import Home from "./../pages/Home";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
import Dashboard from "./../pages/Dashboard";
import Tables from "./../pages/Tables";
import Profile from "./../pages/Profile";
//import FormPostulante from "../pages/FormPostulante";
//import FormAcademico from "../pages/FormAcademico";
import FormLaboral from "../pages/FormLaboral";
import FormPsicologico from "../pages/FormPsicologico";

// Importando Layouts
import Main from "./../layouts/Main"
import Private from "./../layouts/Private";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route (Públicas) */}
        {/* Route para el usuario  */}
        <Route path="/" element={<Home />} />
        <Route path="/form-laboral" element={<FormLaboral />} />
        <Route path="/form-psicologico" element={<FormPsicologico />} />
        {/* Route para la empresa  */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Route (Privadas) */}
        {/* Route del usuario RRHH logeado*/}
        <Route element={<Private />}>
          <Route element={<Main />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
