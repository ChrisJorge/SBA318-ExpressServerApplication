const express = require('express');
const app = express()
const router = express.Router();
const flights = require('../data/flights.js')
const error = require('../utilities/error.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

router
    .route('/')

        .get((req,res) => {
            res.json(flights)
        })

       
        .post((req, res, next) => {
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

            .delete((req,res,next) => {
                const flight = flights.find((flight, i) => {
                    if(flight.id == req.params.id)
                    {
                        flights.splice(i,1);
                        return true;
                    }
                });
               if(flight)
               {
                res.json(flight)
               }
               else
               {
                next()
               }
            })
                
router 
    .route('/view')
        .get((req,res,next) => {
            res.render('flights', {flights: flights});
        })

router 
    .route('/view/:id')
    .get((req,res,next) => {
        res.render("flight", {flight: flights[(req.params.id) - 1]})
    })
module.exports = router;