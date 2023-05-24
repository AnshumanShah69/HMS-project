const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  totalAppointments: {
    type: Number,
    required: true,
  },
  totalPatients: {
    type: Number,
    required: true,
  },
  pendingAppointments: {
    type: Number,
    required: true,
  },
  upcomingAppointments: {
    type: Number,
    required: true,
  },
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
