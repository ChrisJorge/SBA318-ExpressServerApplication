const express = require('express');
const router = express.Router()

const planes = require('../data/planes.js')

router
    .route('/')
        .get((req,res) => {
            res.send(planes)
        })


router 
        .route('/:name')
        .get((req,res) => {
            const plane = planes.find((plane) => plane.name == req.params.name);
            if(plane)
            {
                res.send(plane)
            }
        })


module.exports = router