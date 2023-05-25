import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/AppointmentScheduling">Appointment Scheduling</Link>
        </li>
        <li>
          <Link to="/AppointmentList">Appointment List</Link>
        </li>
        <li>
          <Link to="/PatientRegistration">Patient Registration</Link>
        </li>
        <li>
          <Link to="/PatientDetails/manoj">Patient Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
