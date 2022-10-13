import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

const Appointments = ({ column }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, [patients]);

  return (
    <div className={`${column}`}>
      <table
        className="table table-striped"
        style={{
          fontSize: "1rem",
          width: "100%",
          // margin: "auto",
          backgroundColor: "#809BA6",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Gender</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.DOB}</td>
              <td>{patient.email}</td>
              <td>{patient.nationality}</td>
              <td>{patient.occupation}</td>
              <td>{patient.gender}</td>
              <td>
                <Button word="Approve" classN="btn btn-primary" />
              </td>
              <td>
                <Button word="Deny" classN="btn btn-danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
