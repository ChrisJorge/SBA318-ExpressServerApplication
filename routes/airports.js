const express = require('express');
const router = express.Router()
const app = express()
const error = require('../utilities/error.js')

const airports = require('../data/airports')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

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

            .delete((req,res,next) => {
                const airport = airports.find((airport, i) => {
                    if(airport.name == req.params.name)
                    {
                        airports.splice(i,1);
                        return true;
                    }
                });
               if(airport)
               {
                res.json(airport)
               }
               else
               {
                next()
               }
            })


            // Wont load
// router 
//     .route('/view')
//         .get((req,res,next) => {
//             // res.render('airports', {airports: airports});
//             res.send('Plane')
//         })

// router 
//     .route('/view/:name')
//     .get((req,res,next) => {
//         const index = airports.indexOf(req.params.name)
//         res.render("airport", {airport: airports[index]})
//     })       

module.exports = router