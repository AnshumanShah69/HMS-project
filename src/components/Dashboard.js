import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/api/dashboard')
      .then(response => {
        const { totalAppointments, totalPatients, pendingAppointments, upcomingAppointments } = response.data;
        setTotalAppointments(totalAppointments);
        setTotalPatients(totalPatients);
        setPendingAppointments(pendingAppointments);
        setUpcomingAppointments(upcomingAppointments);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h3>Total Appointments</h3>
          <p>{totalAppointments}</p>
        </div>
        <div className="stat">
          <h3>Total Patients</h3>
          <p>{totalPatients}</p>
        </div>
        <div className="stat">
          <h3>Pending Appointments</h3>
          <p>{pendingAppointments}</p>
        </div>
        <div className="stat">
          <h3>Upcoming Appointments</h3>
          <p>{upcomingAppointments}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
