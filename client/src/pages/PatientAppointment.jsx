import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const PatientAppointment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [occupation, setOccupation] = useState("");
  const [allergies, setAllergies] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        username: name,
        address: address,
        gender: gender,
        age: age,
        nationality: nationality,
        occupation: occupation,
        allergies: allergies,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    alert("Thank you submitting your response");
    setName("");
    setAddress("");
    setGender("");
    setAge("");
    setNationality("");
    setOccupation("");
    setAllergies("");
  }

  return (
    <div className="d-flex fillingForm">
      <div className="d-flex patientForm">
        <div
          id="carouselExampleIndicators"
          className="carousel slide col-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-primary"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <Carousel />
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="col-6">
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
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
            <label>Choose Gender</label>
            <select
              value={gender}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label for="allergy">Allergies:</label>
            <textarea
              className="form-control"
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
