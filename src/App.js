import "./assets/scss/app.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/views/Login";
import Onboarding from "./components/views/Onboarding";
import Registration from "./components/views/Registration";
import Welcome from "./components/views/Welcome";
import AuthProvider from "./contexts/AuthProvider";
import NumberRegistration from "./components/views/NumberRegistration";
import VerificationCode from "./components/views/VerificationCode";
import Search from "./components/views/Search";
import Header from "./components/views/Header";
//Startar på welcome -> Onboarding -> Login -> Registration

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/NumberReg" element={<NumberRegistration />} />
        <Route path="/Verification" element={<VerificationCode />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
