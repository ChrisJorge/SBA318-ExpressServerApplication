const express = require('express');
const app = express()
const router = express.Router();
const flights = require('../data/flights.js')
const error = require('../utilities/error.js')

router
    .route('/')

        .get((req,res) => {
            res.json(flights)
        })

       
        .post((req, res, next) => {
            console.log('sending data')
            if (req.body.id && req.body.departing && req.body.arriving && req.body.time && req.body.cost)
            {
                if (flights.find((flight) => flight.id == req.body.id)) {
                    next(error(409, "id Already Taken"));
                }
            
                const flight = {
                    id: req.body.id,
                    departing: req.body.departing,
                    arriving: req.body.arriving,
                    time: req.body.time,
                    cost: req.body.cost
                };
            
                flights.push(flight);
                res.json(flights[flights.length - 1]);
            }
            else{
                next(error(400,"Not Enough Information"))
            }
        });

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

            .patch((req,res,next) => {
                const flight = flights.find((flight, i) => {
                    if(flight.id == req.params.id)
                    {
                        for(const key in req.body)
                        {
                            flights[i][key] = req.body[key]
                        }
                    }
                    return true
                })
                if(flight)
                {
                    res.json(flight);
                }
                else
                {
                    next()
                }
            })
                

module.exports = router;