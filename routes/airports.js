const express = require('express');
const router = express.Router()
const error = require('../utilities/error.js')

const airports = require('../data/airports')

router
    .route('/')
        .get((req,res) => {
            res.send(airports)
        })


    router
        .route('/:name')
            .get((req,res) => {
                const airport = airports.find((airport) => airport.name == req.params.name);
                if(airport)
                {
                    res.send(airport)
                }
            })
        

module.exports = router