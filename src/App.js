import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AppointmentScheduling from './components/AppointmentScheduling';
import PatientRegistration from './components/PatientRegistration';
import PatientDetails from './components/PatientDetails';
import AppointmentList from './components/AppointmentList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route path="/AppointmentScheduling" element={<AppointmentScheduling />} />
          <Route path="/PatientRegistration" element={<PatientRegistration />} />
          <Route path="/patientDetails" element={<PatientDetails />} />
          <Route path="/AppointmentList" element={<AppointmentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
