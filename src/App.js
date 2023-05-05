import "./assets/scss/app.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/views/Login";
import Onboarding from "./components/views/Onboarding";
import Registration from "./components/views/Registration";
import Welcome from "./components/views/Welcome";
import AuthProvider from "./contexts/AuthProvider";
//Startar på welcome -> Onboarding -> Login -> Registration

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registration />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
