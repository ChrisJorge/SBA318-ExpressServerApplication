const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const flights = require('./data/flights.js')
const airports = require('./data/airports.js')
console.log(airports)
app.get('/', (req, res) => {
    res.send('Welcome to port 3000!!')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})