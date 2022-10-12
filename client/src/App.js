import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Approvals from "./pages/Approvals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
