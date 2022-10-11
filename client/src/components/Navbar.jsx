import React from "react";

const Navbar = ({ column }) => {
  return (
    <div className="container-fluid leftSideNavigation">
      <ul className={`navbar-nav mx-auto ${column}`} style={{marginTop:"200px"}}>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Patients
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Appointments
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Approved
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
