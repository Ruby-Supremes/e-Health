import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

const Appointments = ({ column }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, [patients]);

  function handleDelete(id) {
    fetch(`/users/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className={`${column}`}>
      <table
        className="table table-striped border1"
        style={{
          fontSize: "1rem",
          margin: "auto",
          backgroundColor: "#809BA6",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Gender</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.username}</td>
              <td>{patient.age}</td>
              <td>{patient.address}</td>
              <td>{patient.nationality}</td>
              <td>{patient.occupation}</td>
              <td>{patient.gender}</td>
              <td>
                <Button word="Approve" classN="btn btn-primary" />
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(patient.id)}
                  word="Deny"
                  classN="btn btn-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
