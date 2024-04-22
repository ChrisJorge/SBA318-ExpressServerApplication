import React, { Component } from 'react'

export default class home extends Component {
  render() {
    const h1 = {
        textAlign: 'center'
    }

    const container = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <>
      <html lang="en">
      <head>
        <title>HomePage</title>
      </head>
      <body>
        <h1 style={h1}>Welcome! Please navigate to one of the following links.</h1>
        <div className="container" style={container}>
            <div className="box">
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
            </div>
            <div className="box">
                <h2>For View Access</h2>
                    <ul>
                        <h3>
                            <li>/api/flights/view</li>
                            <li>/api/flights/view/flightNumber</li>
                            {/* <li>/api/airports/view</li>
                            <li>/api/airports/view/airportName</li>
                            <li>/api/planes/view</li>
                            <li>/api/planes/view/planeName</li> */}
                        </h3>
                    </ul>
            </div>
        </div>
      </body>
      </html>
      
      </>
    )
  }
}
