
import "./App.css";
import Form from './pages/Form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./pages/DoctorDashboard";
import LandingPage from "./pages/LandingPage/LandingPage.jsx"; 
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
    <Form dataa={<Login/>}/>
    </BrowserRouter>
  )
}

export default App;
  