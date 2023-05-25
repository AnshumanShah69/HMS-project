import React, { useState } from 'react';
import axios from 'axios';
import './PatientRegistration.css';

const PatientRegistrationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const patientData = { name, age, gender, phoneNumber: phone, address, medicalHistory };
    console.log(patientData)
    axios.post('http://localhost:3000/api/patient', patientData)
      .then((response) => {
        console.log(response.data);
        // Handle successful registration, e.g. show a success message or redirect to the dashboard.
      })
      .catch((error) => {
        console.error(error);
        // Handle registration error, e.g. show an error message or reset the form.
      });
  };

  return (
    <form className="patient-registration-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

      <label htmlFor="age">Age:</label>
      <input type="text" id="age" name="age" value={age} onChange={(event) => setAge(event.target.value)} required />

      <label htmlFor="gender">Gender:</label>
      <input type="text" id="gender" name="gender" value={gender} onChange={(event) => setGender(event.target.value)} required />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />

      <label htmlFor="medicalHistory">Medical History:</label>
      <textarea id="medicalHistory" name="medicalHistory" value={medicalHistory} onChange={(event) => setMedicalHistory(event.target.value)} />

      <button type="submit">Register</button>
    </form>
  );
};

export default PatientRegistrationForm;
