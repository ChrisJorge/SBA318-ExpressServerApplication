const express = require('express');
const router = express.Router()
const error = require('../utilities/error.js')
const planes = require('../data/planes.js')

router
    .route('/')
        .get((req,res) => {
            res.send(planes)
        })

        .post((req, res, next) => {
            if (req.body.name && req.body.passengers && req.body.cost && req.body.manufacturer)
            {
                if (planes.find((plane) => plane.name == req.body.name)) {
                    next(error(409, "Plane Already Exists"));
                }
            
                const plane = {
                    name: req.body.name,
                    passengers: req.body.passengers,
                    cost: req.body.cost,
                    manufacturer: req.body.manufacturer,
                };
            
                planes.push(plane);
                res.json(planes[planes.length - 1]);
            }
            else{
                next(error(400,"Not Enough Information"))
            }
        });
router 
        .route('/:name')
        .get((req,res) => {
            const plane = planes.find((plane) => plane.name == req.params.name);
            if(plane)
            {
                res.send(plane)
            }
        })

        .patch((req,res,next) => {
            const plane = planes.find((plane, i) => {
                if(plane.name == req.params.name)
                {
                    for(const key in req.body)
                    {
                        planes[i][key] = req.body[key]
                    }
                }
                return true
                })
                if(plane)
                {
                    res.json(plane);
                }
                else
                {
                    next()
                }
        })

        .delete((req,res,next) => {
            const plane = planes.find((plane, i) => {
                if(plane.name == req.params.name)
                {
                    planes.splice(i,1);
                    return true;
                }
            });
           if(plane)
           {
            res.json(plane)
           }
           else
           {
            next()
           }
        })



        

module.exports = router