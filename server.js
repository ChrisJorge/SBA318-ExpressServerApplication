const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const flights = require('./routes/flights.js')
const airports = require('./data/airports.js')
const planes = require('./data/planes.js')
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });
app.get('/', (req, res) => {
    res.send('Welcome Please go to /flights to see the available flights, /airports for airports, and /planes for planes!')
})

// app.get('/api/flights', (req,res) => {
//     res.send(flights)
// })
// app.get('/planes', (req,res) => {
//     res.send(planes)
// })
// app.get('/airports', (req,res) => {
//     res.send(airports)
// })
app.use('/api/flights', flights)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})