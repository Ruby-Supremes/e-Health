import React from "react";
import Navbar from "../components/Navbar";
import PatientDetails from "../components/PatientDetails";

const DoctorDashboard = () => {
  return (
    <div className="navigationBar d-flex">
      <Navbar column="col-3" />
      <PatientDetails column="col-9" />
    </div>
  );
};

export default DoctorDashboard;
