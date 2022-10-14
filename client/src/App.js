import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Navbar from "./components/Navbar";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Approvals from "./pages/Approvals";
import PatientAppointment from "./pages/PatientAppointment"
import Form from "./pages/Form"
import Login from "./pages/Login"
import React,{useState} from "react";
import SignUp from "./pages/SignUp";
function App() {
  const [user,setUser] = useState()
  function onLogin(data){
    setUser(data)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route
          exact
          path="/dashboard"
          element={
            <div className="d-flex">
              <Navbar column="col-2" />
              <Patients column="col-10" />
            </div>
          }
        />
        <Route exact path="/Login" element={<Form dataa={<Login/>}/>}></Route>
        <Route exact path="/SignUp" element={<Form dataa={<SignUp/>}/>}></Route>
        <Route
          path="/patients"
          element={
            <div className="d-flex">
              <Navbar column="col-2" />
              <Patients column="col-10" />
            </div>
          }
        />
        <Route
          path="/appointments"
          element={
            <div className="d-flex">
              <Navbar column="col-2" />
              <Appointments column="col-2" />
            </div>
          }
        />
        <Route
          path="/approvals"
          element={
            <div className="d-flex">
              <Navbar column="col-2" />
              <Approvals column="col-2" />
            </div>
          }
        />
        <Route path="/booking" element={<PatientAppointment />} />
      </Routes> 
      
    </BrowserRouter>
  );

}

export default App;
