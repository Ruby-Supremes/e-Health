import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

const Patients = ({ column }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

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
            <th>Allergies</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.username}</td>
              <td>{patient.age}</td>
              <td>{patient.address}</td>
              <td>{patient.nationality}</td>
              <td>{patient.occupation}</td>
              <td>{patient.gender}</td>
              <td>{patient.allergies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
