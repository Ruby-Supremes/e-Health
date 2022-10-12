import React from "react";
import Button from "../components/Button";

const PatientAppointment = () => {
  return (
    <div className="d-flex fillingForm">
      <div className="d-flex patientForm">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="A Doctor"
          style={{ width: "450px", borderRadius: "7px" }}
        />
        <form>
          <div className="row">
            <div className="form-group col-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group col-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Occupation"
            />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input type="text" className="form-control" placeholder="Kenyan" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
          <input type="date" className="form-control"/>
          </div>
          <div class="form-group">
            <label for="allergy">Allergies:</label>
            <textarea class="form-control" rows="1" id="allergy"></textarea>
          </div>
          <Button
            word="Book Appointment"
            classN="btn btn-primary appointmentBtn"
          />
        </form>
      </div>
    </div>
  );
};

export default PatientAppointment;
