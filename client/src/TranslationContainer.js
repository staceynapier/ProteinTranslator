import React, { Component } from 'react';
import ProteinComponent from './ProteinComponent.js'

class TranslationContainer extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    let proteinList = []

    if (this.props.splitString.length === 0) {
      return null;
    }

    for (var i = 0; i < this.props.splitString.length; i++) {
      for (var x = 0; x < this.props.library.length; x++) {
        if (this.props.library[x][0] === this.props.splitString[i]){
            proteinList.push(this.props.library[x])
        }
      }
    }

    return (
      <p>{proteinList}</p>
    )
  }
}

export default TranslationContainer;
