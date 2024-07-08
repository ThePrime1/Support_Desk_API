const express = require("express");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use(errorHandler);

app.listen(PORT, () => console.log("Server Started on Port " + PORT));