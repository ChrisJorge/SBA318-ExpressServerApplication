import React, { Component } from 'react'

export default class flight extends Component {
  render() {
    const flight = this.props.flight
    return (
      <>
      <h1>Flight {flight.id} is departing from {flight.departing}, and will be arriving at {flight.arriving}. It will take {flight.time} and it will cost ${flight.cost}</h1>
      </>
    )
  }
}
