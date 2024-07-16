const express = require("express");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');

const app = express()

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));



app.use(errorHandler);

app.listen(PORT, () => console.log("Server Started on Port " + PORT));