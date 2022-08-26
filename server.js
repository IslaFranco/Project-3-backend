//Dependencies
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const logger = require('morgan');
const stonesRouter = require('./controllers/stones');


//initialize app
const app = express();

//app settings 
require('dotenv').config();
const { PORT = 3001, DATABASE_URL } = process.env;

//connect mongodb using mongoose
mongoose.connect(DATABASE_URL);

//middlewear
app.use(express.json());
app.use(cors());
app.use(logger('dev'));


mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB error: ' + error.message));

//test route
app.get('/', (req, res) => {
    res.send('Welcome to my project 3 app')
});

app.use('/stones', stonesRouter);

app.get('/*', (req, res) => {
    res.status(404).json({message: 'not found'})
})

//Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
})