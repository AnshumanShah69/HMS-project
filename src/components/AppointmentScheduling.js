import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './AppointmentScheduling.module.css';

const AppointmentScheduling = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const appointmentData = {
        patientName,
        doctorName,
        appointmentDate,
        appointmentTime,
      };
  
      await axios.post('http://localhost:3000/api/appointment', appointmentData).then(res=>{
        console.log(res);
      });
      console.log('Appointment created successfully!');
      setPatientName('');
      setDoctorName('');
      setAppointmentDate('');
      setAppointmentTime('');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Appointment Scheduling</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label htmlFor="doctorName">Doctor Name:</label>
        <input
          type="text"
          id="doctorName"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
        />

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

        <label htmlFor="appointmentTime">Appointment Time:</label>
        <input
          type="time"
          id="appointmentTime"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
        />

        <button type="submit" className={styles.button}>
          Schedule Appointment
        </button>
      </form>

      <p className={styles.link}>
        Click <Link to="/PatientRegistration">here</Link> to register as a new patient.
      </p>
    </div>
  );
};

export default AppointmentScheduling;
