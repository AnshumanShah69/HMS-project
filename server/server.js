const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const routes = require('./routes');
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
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
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
