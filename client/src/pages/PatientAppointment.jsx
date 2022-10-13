import React from "react";
import { useState } from "react";
import Button from "../components/Button";

const PatientAppointment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [occupation, setOccupation] = useState("");
  const [allergies, setAllergies] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        username: name,
        address: address,
        date_of_birth: date,
        nationality: nationality,
        occupation: occupation,
        allergies: allergies,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return (
    <div className="d-flex fillingForm">
      <div className="d-flex patientForm">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="A Doctor"
          style={{ width: "450px", borderRadius: "7px" }}
        />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-6">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input
              type="text"
              className="form-control"
              placeholder="Kenyan"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="allergy">Allergies:</label>
            <textarea
              class="form-control"
              rows="1"
              id="allergy"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            ></textarea>
          </div>
          <Button
            word="Book Appointment"
            classN="btn btn-primary appointmentBtn"
            typeofbtn="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default PatientAppointment;
