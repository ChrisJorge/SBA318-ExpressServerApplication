import React, { Component } from 'react'

export default class flights extends Component {
  render() {
    const {flights} = this.props;
    return (
      <>
      
      {flights.map((flight, i) => {
                return(
                <l1 key = {i}>
                 <a href={`/api/flights.${i}`}>Flight {flight.id}</a> is departing from: {flight.departing}, arriving at {flight.arriving}. It will take {flight.time} and cost {flight.price}
                <br></br>
                </l1>
                );
            })}
      </>
    )
  }
}
