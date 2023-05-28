import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppointmentList.css";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch the list of appointments from the backend API
    axios.get('http://localhost:3000/api/appointmentlist')
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
