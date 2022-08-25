//Dependencies
const express = require('express');
const mongoose = require('mongoose')

//initialize app
const app = express();

//app settings 
require('dotenv').config();

const { PORT = 3001, DATABASE_URL } = process.env;

//connect mongodb using mongoose
mongoose.connect(DATABASE_URL);

//middlewear
app.use(express.json());

mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB error: ' + error.message));

//test route
app.get('/', (req, res) => {
    res.send('Welcome to my project 3 app')
});

//Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
})