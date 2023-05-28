const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  totalAppointments: {
    type: Number,
  },
  totalPatients: {
    type: Number,
  },
  pendingAppointments: {
    type: Number,
  },
  upcomingAppointments: {
    type: Number,
  },
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
