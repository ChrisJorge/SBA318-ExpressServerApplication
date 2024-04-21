const express = require('express');
const router = express.Router();

const flights = require('../data/flights.js')
const error = require('../utilities/error.js')

router
    .route('/')

        .get((req,res) => {
            res.json(flights)
        })

       // Does not work
        // .post((req, res, next) => {
        //     console.log('sending data')
        //     if (req.body.id && req.body.departing && req.body.arriving && req.body.time && req.body.cost) {
        //     if (flights.find((flight) => flight.id == req.body.id)) {
        //         next(error(409, "id Already Taken"));
        //     }
        
        //     const flight = {
        //         id: req.body.id,
        //         departing: req.body.departing,
        //         arriving: req.body.arriving,
        //         time: req.body.time,
        //         cost: req.body.cost
        //     };
        
        //     flights.push(flight);
        //     res.json(flights[flights.length - 1]);
        //      }
        // });

        router
            .route("/:id")
                .get((req, res, next) => {
                    const flight = flights.find((flight) => flight.id == req.params.id);
                    if (flight) 
                    {
                        res.json(flight);
                    }
                        else next();
                })
                

module.exports = router;