import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
        <>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HomePage</title>
      </head>
      <style>
      </style>
      <body>
        <h1 >Welcome! Please navigate to one of the following links.</h1>
        <h2>For API Access</h2>
        <ul>
            <h3>
                <li>/api/flights</li>
                <li>/api/flights/flightNumber</li>
                <li>/api/airports</li>
                <li>/api/airports/airportName</li>
                <li>/api/planes</li>
                <li>/api/planes/planeName</li>
            </h3>
        </ul>
        <h2>For View Access</h2>
        <h3>
                <li>/api/flights/view</li>
                <li>/api/flights/view/flightNumber</li>
                <li>/api/airports/view</li>
                <li>/api/airports/view/airportName</li>
                <li>/api/planes/view</li>
                <li>/api/planes/view/planeName</li>
            </h3>
      </body>
      </html>
      
      </>
    )
  }
}
