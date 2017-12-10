import React, { Component } from 'react';

const ProteinCard = (props) => {

  let display = props.display.map((protein, i) => {
    return (
      <li key={i}>{protein}</li>
    )
  })
  return(
    <ul>
      {display}
    </ul>
  )
}
export default ProteinCard
