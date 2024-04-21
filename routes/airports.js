const express = require('express');
const router = express.Router()
const error = require('../utilities/error.js')

const airports = require('../data/airports')

router
    .route('/')
        .get((req,res) => {
            res.send(airports)
        })

        .post((req, res, next) => {
            if (req.body.name && req.body.location && req.body.numFlightsPerDay && req.body.companies)
            {
                if (airports.find((airport) => airport.name == req.body.name)) {
                    next(error(409, "Airport Already Exists"));
                }
            
                const airport = {
                    name: req.body.name,
                    location: req.body.location,
                    numFlightsPerDay: req.body.numFlightsPerDay,
                    companies: req.body.companies,
                };
            
                airports.push(airport);
                res.json(airports[airports.length - 1]);
            }
            else{
                next(error(400,"Not Enough Information"))
            }
        });


    router
        .route('/:name')
            .get((req,res) => {
                const airport = airports.find((airport) => airport.name == req.params.name);
                if(airport)
                {
                    res.send(airport)
                }
            })

            .patch((req,res,next) => {
                const airport = airports.find((airport, i) => {
                    if(airport.name == req.params.name)
                    {
                        for(const key in req.body)
                        {
                            airports[i][key] = req.body[key]
                        }
                    }
                    return true
                    })
                    if(airport)
                    {
                        res.json(airport);
                    }
                    else
                    {
                        next()
                    }
            })

        

module.exports = router