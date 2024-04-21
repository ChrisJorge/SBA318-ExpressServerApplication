const express = require('express');
const router = express.Router()

const planes = require('../data/planes.js')

router
    .route('/')
        .get((req,res) => {
            res.send(planes)
        })




module.exports = router