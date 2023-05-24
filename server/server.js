const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

// Importing your routes from routes.js
const routes = require('./routes');

// Create an Express app
const app = express();

// Middleware to parse JSON data
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
// Connect to MongoDB
// Connect to MongoDB
mongoose
  .connect('mongodb+srv://mvk:mvk@cluster0.xxgoijn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Use the routes middleware
app.use('/api', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
