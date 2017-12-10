import React, { Component } from 'react';

class ProteinComponent extends Component {

  render() {

    for (var i = 0; i < this.props.proteinList.length; i++) {
      console.log(this.props.proteinList[i]);
    }

    return(
      <p>Result</p>
    )

  }

}

export default ProteinComponent;
