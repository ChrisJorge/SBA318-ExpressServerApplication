const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const flights = require('./data/flights.js')
const airports = require('./data/airports.js')
const planes = require('./data/planes.js')

app.get('/', (req, res) => {
    res.send('Welcome Please go to /flights to see the available flights, /airports for airports, and /planes for planes!')
})

app.get('/flights', (req,res) => {
    res.send(flights)
})
app.get('/planes', (req,res) => {
    res.send(planes)
})
app.get('/airports', (req,res) => {
    res.send(airports)
})
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})