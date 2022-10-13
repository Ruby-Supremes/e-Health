
import "./App.css";
import Form from './pages/Form'
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./pages/DoctorDashboard";
import LandingPage from "./pages/LandingPage/LandingPage.jsx"; 
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
    <Form dataa={<SignUp/>}/>
        </BrowserRouter>
  )
}

export default App;
  