import React from "react";
import { FaUserCircle, FaClock } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ column }) => {
  return (
    <div className={`leftSideNavigation ${column}`}>
      <ul className={`navbar-nav`}>
        <li className="nav-item mx-auto mt-5" style={{fontSize:"20px"}}>
          <Link className="nav-link d-flex flex-column" to="/patients">
            <span style={{ marginLeft: "25px" }}>
              <FaUserCircle />
            </span>{" "}
            Patients
          </Link>
        </li>
        <li className="nav-item mx-auto" style={{fontSize:"20px"}}>
          <Link className="nav-link d-flex flex-column" to="/appointments">
            <span style={{ marginLeft: "50px" }}>
              <FaClock />
            </span>
            Appointments
          </Link>
        </li>
        <li className="nav-item mx-auto" style={{fontSize:"20px"}}>
          <Link className="nav-link d-flex flex-column" to="/approvals">
            <span style={{ marginLeft: "25px" }}>
              <BsCheckCircleFill />
            </span>
            Approved
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
