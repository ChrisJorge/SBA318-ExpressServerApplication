import React, { Component } from 'react'

export default class airport extends Component {
  render() {
    const airport = this.props.airport
    return (
      <>
      <h1>The {airport.name} is in {airport.location}. It has {airport.numFlightsPerDay} flights per day and is used by these companies: {airport.companies}</h1>
      </>
    )
  }
}
