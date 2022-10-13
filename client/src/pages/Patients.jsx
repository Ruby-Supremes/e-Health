import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

const Patients = ({ column }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://granite-aluminum-grasshopper.glitch.me/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, [patients]);

  return (
    <div className={`${column}`}>

      <table
        className="table table-striped"
        style={{
          fontSize: "1rem",
          // width: "95%",
          margin: "auto",
          backgroundColor: "#809BA6",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Allergies</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.address}</td>
              <td>{patient.DOB}</td>
              <td>{patient.nationality}</td>
              <td>{patient.occupation}</td>
              <td>{patient.allergies}</td>
              <td>
                <Button word="View Details" classN="btn btn-primary" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
