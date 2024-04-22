import React, { Component } from 'react'

export default class airports extends Component {
  render() {
    const css = {
        padding: '0',
        fontSize: '30px'
    }
    const {airports} = this.props;
    return (
      <>
      
      {airports.map((airport, i) => {
                return(
                <l1 key = {i}>
                    <p style={css}>
                        <a href={`/api/airports.${i}`}>The  {airport.name}</a> is in {airport.location}. It has {airport.numFlightsPerDay} flights per day and is used by these companies: {airport.companies}
                    </p>
                <br></br>
                </l1>
                );
            })}
      </>
    )
  }
}
