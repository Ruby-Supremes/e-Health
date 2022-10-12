import React from "react";
import Button from "../components/Button";

const Appointments = ({ column }) => {
  const patients = [
    {
      id: 1,
      name: "Steven Otieno",
      age: "22",
      DOB: "12th Dec 2000",
      email: "steveotianga8991@gmail.com",
      nationality: "Kenyan",
      occupation: "Software Developer",
      gender: "Male",
    },
  ];
  return (
    <div className={`${column}`}>
      <table
        className="table table-striped"
        style={{
          fontSize: "1rem",
          width: "100%",
          margin: "auto",
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
                <Button text="Approve" design="btn btn-primary" />
              </td>
              <td><Button text="Deny" design="btn btn-danger" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
