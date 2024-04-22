const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const flights = require('./routes/flights.js')
const airports = require('./routes/airports.js')
const planes = require('./routes/planes.js')
const bodyParser = require("body-parser");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome Please go to /api/flights to see the available flights, /api/airports for airports, and /api/planes for planes!')
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
app.use('/api/airports', airports)
app.use('/api/planes', planes)
// app.all('*', (req,res) => {
//     res.redirect(302, "/")
// })
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})