import React, { Component } from 'react';
import ProteinCard from './ProteinCard'

class ProteinListContainer extends Component {

  render() {
    let proteinsToDisplay = []
    for (var i = 0; i < this.props.proteinList.length; i++) {
      proteinsToDisplay.push(this.props.proteinList[i][1]);
    }

    return(
      <ProteinCard display={proteinsToDisplay}/>
    )

  }

}

export default ProteinComponent;
