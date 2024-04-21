const express = require('express');
const router = express.Router()

const airports = require('../data/airports')

router
    .route('/')
        .get((req,res) => {
            res.send(airports)
        })


module.exports = router